const cx = (...classes: (string | undefined | false)[]): string =>
  classes.filter(Boolean).join(" ");

export default cx;
