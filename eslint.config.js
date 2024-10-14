import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      jest: pluginJest,
    },
  },
  {
    ...pluginJs.configs.recommended,
  },
  {
    ...pluginReact.configs.flat.recommended,
  },
];
