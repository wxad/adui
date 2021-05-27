const eslintrc = {
  extends: [
    "airbnb",
    "prettier",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  globals: {
    JSX: "readonly",
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: "16.8",
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["markdown", "react", "babel", "jest", "@typescript-eslint"],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
      },
    },
  ],
  rules: {
    "prettier/prettier": 0,
    // 不要求文件末必须有一行空行
    "eol-last": 0,
    // 不要求字符串单引号
    quotes: 0,
    // 不禁止如 isNaN 的使用
    "no-restricted-globals": 0,
    // 允许 对 param props 的赋值
    "no-param-reassign": [2, { props: false }],
    // 不使用封号
    semi: ["error", "never"],
    // 不要求箭头函数参数的括号
    "arrow-parens": 0,
    // 不要求块内换行
    "padded-blocks": 0,
    // 不要求 label 格式
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": 0,
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        tags: [],
        roles: ["none"],
      },
    ],
    "max-len": ["error", { code: 80 }],
    "import/prefer-default-export": 0,
    // 不要求 .JSX
    "react/jsx-filename-extension": 0,
    "react/static-property-placement": 0,
    "react/jsx-props-no-spreading": 0,
    // 不设置 jsx 的缩进
    "react/jsx-indent": 0,
    // 不设置 jsx prop 的缩进
    "react/jsx-indent-props": 0,
    // 不要求 prop 第一个换行
    "react/jsx-first-prop-new-line": 0,
    // 不要求每行只有一个表达式
    "react/jsx-one-expression-per-line": 0,
    // 不限制 prop-types 不能为 ['any', 'array', 'object']
    "react/forbid-prop-types": 0,
    // ES7 不需要 constructor，既然是新语法，那就用
    "react/state-in-constructor": 0,
    // 不考虑顺序问题
    "react/sort-comp": 0,
    // 不要求引入输入扩展格式
    "import/extensions": 0,
    // 20210119 修复 'React' was used before it was defined
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
}

if (process.env.RUN_ENV === "DEMO") {
  eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
  }

  Object.assign(eslintrc.rules, {
    "no-console": 0,
    "no-plusplus": 0,
    "eol-last": 0,
    "no-script-url": 0,
    "prefer-rest-params": 0,
    "react/no-access-state-in-setstate": 0,
    "react/destructuring-assignment": 0,
    "react/no-multi-comp": 0,
    "jsx-a11y/href-no-hash": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/control-has-associated-label": 0,
  })
}

module.exports = eslintrc
