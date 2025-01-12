export type Theme = {
  name: string;
  background: Background;
  cssTokens: {
    // Shiki theme tokens
    "token-constant": string;
    "token-link": string;
    "token-comment": string;
    "token-function": string;
    "token-keyword": string;
    "token-number": string;
    "token-property": string;
    "token-string": string;
    "token-string-expression": string;
    "token-punctuation": string;
    "token-parameter": string;
    // Custom tokens
    foreground: string;
    background: string;
    "font-family": string;
    "box-shadow": string;
  };
};

type Background = {
  gradient?: Gradient;
};

type Gradient = {
  colors: string[];
  direction: string;
};
