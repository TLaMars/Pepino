import { isTauri } from "@tauri-apps/api/core";
import hljs from "highlight.js";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import ShikiHighLighter from "src/components/ShikiHighLighter/ShikiHighLighter";
import EXAMPLES from "src/constants/examples";
import LANGUAGES from "src/constants/languages";
import {
  autoLanguageAtom,
  detectedLanguageAtom,
  languageAtom,
} from "src/store/control-settings";
import handleEnterKey from "src/utils/editor/handle-enter-key";
import handleTabKey from "src/utils/editor/handle-tab-key";
import registerClipboardReader from "src/utils/tauri/register-clipboard-reader";

import $ from "./Editor.module.scss";

const example = EXAMPLES[Math.floor(Math.random() * EXAMPLES.length)];

const Editor: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const autoLanguage = useAtomValue(autoLanguageAtom);
  const [detectedLanguage, setDetectedLanguage] = useAtom(detectedLanguageAtom);
  const [selectedLanguage] = useAtom(languageAtom);
  const [code, setCode] = useState(example.code);

  useEffect(() => {
    if (!autoLanguage) return;

    const { language } = hljs.highlightAuto(code, Object.keys(LANGUAGES));
    if (!language) return;

    setDetectedLanguage(LANGUAGES[language]);
  }, [autoLanguage, code, setDetectedLanguage]);

  // NOTE: THIS IS TAURI SPECIFIC CODE
  useEffect(() => {
    if (isTauri()) {
      void registerClipboardReader(setCode);
    }
  }, []);

  const language = useMemo(() => {
    if (autoLanguage) return detectedLanguage;
    return selectedLanguage;
  }, [autoLanguage, detectedLanguage, selectedLanguage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;

    if (e.key === "Enter") {
      e.preventDefault();
      handleEnterKey(textarea, setCode);
    }

    if (e.key === "Tab") {
      e.preventDefault();
      handleTabKey(textarea, e.shiftKey, setCode);
    }
  };

  return (
    <div className={$.editor}>
      <textarea
        id="textarea"
        ref={textareaRef}
        className={$.textarea}
        value={code}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ShikiHighLighter
        className={$.highlighter}
        code={code}
        language={language}
      />
    </div>
  );
};

export default Editor;
