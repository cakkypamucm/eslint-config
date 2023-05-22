/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

const addPaddingLineAfter = (statement) => [
    { blankLine: "always", prev: statement, next: "*" },
    { blankLine: "any", prev: statement, next: statement }
];

module.exports = {
    plugins: ["sort-keys", "unused-imports", "ext"],
    extends: [
        "plugin:import/recommended",
        "plugin:promise/recommended",
        "plugin:optimize-regex/recommended",
        "plugin:markdown/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "standard",
        "prettier"
    ],
    /* eslint-enable sort-keys/sort-keys-fix */
    rules: {
        "consistent-return": "off",
        "ext/lines-between-object-properties": ["error", "never"],
        "import/exports-last": "error",
        "import/first": "error",
        "import/newline-after-import": ["error", { considerComments: true, count: 1 }],
        "import/no-absolute-path": ["error", { amd: false, commonjs: true, esmodule: true }],
        "import/no-named-default": "error",
        "import/no-useless-path-segments": [
            "error",
            {
                noUselessIndex: true
            }
        ],
        "import/no-webpack-loader-syntax": "error",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]
            }
        ],
        "import/prefer-default-export": ["error", { target: "single" }],
        "lines-between-class-members": ["error", "never"],
        "no-constructor-return": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-extra-semi": "error",
        "no-multi-spaces": "error",
        "no-param-reassign": "off",
        "no-promise-executor-return": "off",
        "no-return-await": "error",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "padding-line-between-statements": [
            "error",
            ...addPaddingLineAfter("directive"),
            ...addPaddingLineAfter("import"),
            ...addPaddingLineAfter("cjs-import")
        ],
        "promise/always-return": ["error", { ignoreLastCallback: true }],
        "promise/prefer-await-to-callbacks": ["error"],
        "promise/prefer-await-to-then": ["error"],
        quotes: ["error", "double", { allowTemplateLiterals: false, avoidEscape: true }],
        radix: ["error", "as-needed"],
        "require-await": "error",
        semi: ["error", "always"],
        "spaced-comment": ["error", "always"],
        "unicorn/consistent-function-scoping": "off",
        "unicorn/error-message": "error",
        "unicorn/expiring-todo-comments": "off",
        "unicorn/explicit-length-check": "off",
        "unicorn/filename-case": "off",
        "unicorn/no-anonymous-default-export": "off",
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-array-push-push": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-negated-condition": "off",
        "unicorn/no-null": "off",
        "unicorn/no-this-assignment": "off",
        "unicorn/prefer-module": "off",
        "unicorn/prefer-object-from-entries": "off",
        "unicorn/prefer-reflect-apply": "off",
        "unicorn/prefer-string-starts-ends-with": "error",
        "unicorn/prefer-ternary": ["error", "only-single-line"],
        "unicorn/prefer-type-error": "error",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/throw-new-error": "error",
        "unused-imports/no-unused-imports": "error"
    },
    /* eslint-disable sort-keys/sort-keys-fix */
};
