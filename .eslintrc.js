module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.js"],
      plugins: ["prettier"],
      extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"],
      env: {
        browser: true,
        node: true
      },
      parserOptions: {
        ecmaVersion: 2019
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"]
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
      ],
      rules: {
        "prettier/prettier": ["error", { singleQuote: true, semi: false }]
      }
    }
  ]
};
