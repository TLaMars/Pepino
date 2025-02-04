/* eslint-disable @typescript-eslint/no-explicit-any */
export type Language = {
  id: string;
  name: string;
  import: () => Promise<any>;
};
