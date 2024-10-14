import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest"; // Import the Jest plugin

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Add Jest globals here
        ...globals.node, // Add Node.js globals here
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'jest/no-disabled-tests': 'warn', // Example rule
      'jest/no-focused-tests': 'error', // Example rule
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      jest: pluginJest, // Define Jest as a plugin
    },
  },
  {
    ...pluginJs.configs.recommended,
  },
  {
    ...pluginReact.configs.flat.recommended,
  },
];
