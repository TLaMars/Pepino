import React, { useEffect } from "react";

import { Language } from "src/models/language";
import getShiki from "src/utils/get-shiki";

type Props = {
  code: string;
  language: Language;
};

const ShikiHighLighter: React.FC<Props> = ({ code, language }) => {
  const [highlightedCode, setHighlightedCode] = React.useState("");

  useEffect(() => {
    const runShiki = async () => {
      const shiki = await getShiki();

      await shiki.loadLanguage(language.import());

      const html = shiki.codeToHtml(code, {
        lang: language.name.toLowerCase(),
        theme: "lamars.io",
      });
      console.log(html);

      setHighlightedCode(html);
    };

    runShiki();
  }, [code, language]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    ></div>
  );
};

export default ShikiHighLighter;