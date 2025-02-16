import type { HighlighterCore } from "@shikijs/core";
import type { Language } from "src/models/language";
import { useSetAtom } from "jotai";
import React, { useEffect } from "react";
import { loadingAtom } from "src/store/control-settings";
import getShiki from "src/utils/get-shiki";

type Props = {
  code: string;
  language: Language;
  className?: string;
};

const ShikiHighLighter: React.FC<Props> = ({ code, language, className }) => {
  const [highlightedCode, setHighlightedCode] = React.useState("");
  const [shiki, setShiki] = React.useState<HighlighterCore>();
  const setLoading = useSetAtom(loadingAtom);

  useEffect(() => {
    void getShiki().then((highlighter) => {
      setShiki(highlighter);
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
      setLoading(false);
    };

    void highlight();
  }, [code, language, shiki, setLoading]);

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
