import type { RefObject } from "react";
import type { AnyFunction } from "src/utils/generics";
import { useEffect } from "react";

const useClickOutside = <T>(ref: RefObject<T>, callback: AnyFunction) => {
  const handleClick = (event: MouseEvent) => {
    if (
      ref.current instanceof Node &&
      !ref.current.contains(event.target as Node)
    ) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useClickOutside;
