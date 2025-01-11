import { useRef, useState } from "react";
import LANGUAGES from "src/constants/languages";
import ShikiHighLighter from "../ShikiHighLighter/ShikiHighLighter";
import $ from "./Editor.module.scss";

const Editor: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState("console.log('Hello, world!');");

  return (
    <div className={$.editor}>
      <textarea
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
      <ShikiHighLighter code={code} language={LANGUAGES.javascript} />
    </div>
  );
};

export default Editor;
