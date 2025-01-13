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

  useEffect(() => {
    const runShiki = async () => {
      const shiki = await getShiki();
      await shiki.loadLanguage(language.import());

      const html = shiki.codeToHtml(code, {
        lang: language.name.toLowerCase(),
        theme: "lamars.io",
      });

      setHighlightedCode(html);
    };

    runShiki();
  }, [code, language]);

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
