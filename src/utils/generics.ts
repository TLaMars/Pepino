export type AnyFunction<T = unknown, K = unknown> = (
  ...args: T extends [] ? T[] : unknown[]
) => K extends unknown ? unknown : K;
