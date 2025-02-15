import hljs from "highlight.js";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  autoLanguageAtom,
  detectedLanguageAtom,
  languageAtom,
} from "../../store/control-settings";
import ShikiHighLighter from "../ShikiHighLighter/ShikiHighLighter";
import $ from "./Editor.module.scss";
import EXAMPLES from "../../constants/examples";
import LANGUAGES from "../../constants/languages";

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
      <ShikiHighLighter
        className={$.highlighter}
        code={code}
        language={language}
      />
    </div>
  );
};

export default Editor;
