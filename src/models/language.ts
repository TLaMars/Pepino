export type Language = {
  id: string;
  name: string;
  import: () => Promise<any>;
};
