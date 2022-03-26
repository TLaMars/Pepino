export type Language = {
  name: string;
  mode: string;
  path?: string;
  hljs?: string;
};

export type Gradient = {
  color1: string;
  color2: string;
};

export type Theme = {
  name: string;
  gradient: Gradient;
  colors: {
    atom: string;
    attribute: string;
    background: string;
    builtin: string;
    comment: string;
    definition: string;
    keyword: string;
    meta: string;
    number: string;
    operator: string;
    property: string;
    string: string;
    tag: string;
    text: string;
    type: string;
    variable: string;
    variable2: string;
    variable3: string;
  };
};

export type SelectOption = {
  label: string;
  gradient?: Gradient;
};

export type ImageType = "png" | "svg";
export type ImageScale = 1 | 2 | 4 | 8;
