import { useCallback, useEffect, useMemo } from "react";
import isMacOS from "src/utils/platform";

type ModifierKey = "Meta" | "Control" | "Shift" | "Alt" | "CommandOrControl";
type ShortcutKeys =
  | `${ModifierKey}+${string}`
  | `${ModifierKey}+${ModifierKey}+${string}`;

interface ShortcutOptions {
  shortcut: ShortcutKeys;
  onPress: () => void;
  preventDefault?: boolean;
}

const isMac = isMacOS();

const parseShortcut = (shortcut: ShortcutKeys) => {
  const parts = shortcut
    .split("+")
    .map((part) => part.trim())
    .map((part) => {
      if (part === "CommandOrControl") {
        return isMac ? "Meta" : "Control";
      }
      return part;
    });

  return {
    key: parts[parts.length - 1].toLowerCase(),
    modifiers: parts.slice(0, -1) as ModifierKey[],
  };
};

const useShortcut = ({
  shortcut,
  onPress,
  preventDefault = false,
}: ShortcutOptions) => {
  const { key, modifiers } = useMemo(() => parseShortcut(shortcut), [shortcut]);

  const checkModifiers = useCallback(
    (event: KeyboardEvent) => {
      const modifierStates = {
        Meta: event.metaKey,
        Control: event.ctrlKey,
        Shift: event.shiftKey,
        Alt: event.altKey,
      };

      // All required modifiers must be pressed
      const hasRequiredModifiers = modifiers.every(
        (mod) => modifierStates[mod as keyof typeof modifierStates],
      );

      // No extra modifiers should be pressed
      const noExtraModifiers = Object.entries(modifierStates).every(
        ([mod, isPressed]) =>
          modifiers.includes(mod as ModifierKey) ? isPressed : !isPressed,
      );

      return hasRequiredModifiers && noExtraModifiers;
    },
    [modifiers],
  );

  const handleKeyEvent = useCallback(
    (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== key || !checkModifiers(event)) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      onPress();
    },
    [key, checkModifiers, preventDefault, onPress],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, [handleKeyEvent]);
};

export default useShortcut;
