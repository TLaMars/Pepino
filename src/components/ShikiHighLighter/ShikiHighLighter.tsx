import { HighlighterCore } from "@shikijs/core";
import React, { useEffect } from "react";

import { Language } from "src/models/language";
import getShiki from "src/utils/get-shiki";

type Props = {
  code: string;
  language: Language;
  className?: string;
};

const ShikiHighLighter: React.FC<Props> = ({ code, language, className }) => {
  const [highlightedCode, setHighlightedCode] = React.useState("");
  const [shiki, setShiki] = React.useState<HighlighterCore>();

  useEffect(() => {
    getShiki().then((shiki) => {
      setShiki(shiki);
    });
  }, []);

  useEffect(() => {
    if (!shiki) return;

    const highlight = async () => {
      await shiki.loadLanguage(() => language.import());
      const result = shiki.codeToHtml(code, {
        lang: language.id,
        theme: "lamars.io",
      });
      setHighlightedCode(result);
    };

    highlight();
  }, [code, language, shiki]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    ></div>
  );
};

export default ShikiHighLighter;
