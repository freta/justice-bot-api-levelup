module.exports= {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
      },
    "extends" : "airbnb-base",
    "parserOptions": {
        "ecmaVersion" : 2018,
        "sourceType": "module"
    },
    "rules": {
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "curly": ["error", "multi-line"],
        "import/no-unresolved": [
          2,
          {
            "commonjs": true
          }
        ],
        "no-shadow": [
          "error",
          {
            "allow": ["req", "res", "err"]
          }
        ],
  
}