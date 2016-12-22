module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": "react-app",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "space-in-parens": [
      "warn",
      "always",
      {
        "exceptions": ["{}", "[]"]
      }
    ],
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "warn",
      "never"
    ],
    "max-len": [
      "warn",
      {
        "code": 80
      }
    ]
  }
}
