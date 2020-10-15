module.exports = {
  root: true,
  env: { node: true },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: { parser: "babel-eslint" },

  plugins: ["import"],
  rules: {
    // @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'always'],
  },
};

//RANT ON WHAT DIDNT WORK
// christ the docs are so ambiguous. instead of this import/extensions setting you need to use the "import/resolver": {node} above
// WAIT NOPE "import/resolver" doesnt work correctly either
// @see https://github.com/benmosher/eslint-plugin-import/issues/1615#issuecomment-577396731
// @see https://github.com/benmosher/eslint-plugin-import/blob/055389d425caae7219659fb97b6d0b992d2f1aaa/README.md#settings
// "import/extensions": [ ".vue" ],

//this doesnt work either. why is it included in test cases though?
// https://github.com/benmosher/eslint-plugin-import/blob/master/tests/src/rules/extensions.js#L34
// "import/resolve": { "extensions": ['.vue', '.json', '.js'] },
/*
//turns out eslint-import-resolver-alias has its own 'extensions' field, and this is the FINAL v3 (FOR SURE FINAL) version that solves the issue
  "import/resolver": { 
  node: {
    extensions: ['.vue', '.json', '.js']
  },
  }
*/
