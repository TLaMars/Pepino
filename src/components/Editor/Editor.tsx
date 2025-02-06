import hljs from "highlight.js";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import EXAMPLES from "src/constants/examples";
import LANGUAGES from "src/constants/languages";
import {
  autoLanguageAtom,
  detectedLanguageAtom,
  languageAtom,
} from "src/store/control-settings";
import ShikiHighLighter from "../ShikiHighLighter/ShikiHighLighter";
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

  const language = useMemo(() => {
    if (autoLanguage) return detectedLanguage;
    return selectedLanguage;
  }, [autoLanguage, detectedLanguage, selectedLanguage]);

  return (
    <div className={$.editor}>
      <ShikiHighLighter
        className={$.highlighter}
        code={code}
        language={language}
      />
      <textarea
        id="textarea"
        ref={textareaRef}
        className={$.textarea}
        value={code}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => {
          setCode(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Editor;
