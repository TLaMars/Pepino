import { HighlighterCore } from "@shikijs/core";
import { useSetAtom } from "jotai";
import React, { useEffect } from "react";

import { Language } from "../../models/language";
import { loadingAtom } from "../../store/control-settings";
import getShiki from "../../utils/get-shiki";

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
      setLoading(false);
    };

    highlight();
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
