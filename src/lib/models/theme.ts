export type Theme = {
  name: string;
  gradient: Gradient;
  colors: {
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
    foreground: string;
    background: string;
  };
};

export type Gradient = {
  color1: string;
  color2: string;
};
