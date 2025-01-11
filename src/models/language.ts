/* eslint-disable @typescript-eslint/no-explicit-any */
export type Language = {
  name: string;
  import: () => Promise<any>;
};
