export default {
  "*": "prettier --write --ignore-unknown",
  "*.(jsx|ts|tsx)": "eslint --max-warnings 0",
  "*.(ts|tsx)": () => "tsc -p tsconfig.json --noEmit",
};
