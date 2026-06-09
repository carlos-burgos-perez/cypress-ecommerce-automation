import js from "@eslint/js";
import cypress from "eslint-plugin-cypress";

export default [

  js.configs.recommended,

  {
    files: ["cypress.config.js"],

    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly"
      }
    }
  },

  {
    files: ["**/*.js"],

    plugins: {
      cypress
    },

    languageOptions: {
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
        it: "readonly",
        expect: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];