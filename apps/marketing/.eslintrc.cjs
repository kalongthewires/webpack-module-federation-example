module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      plugins: ["@typescript-eslint"],
    },
  ],
};
