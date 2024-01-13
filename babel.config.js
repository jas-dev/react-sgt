module.exports = function (api) {
  api.cache.forever();

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: 3 // Specify the version of core-js
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "syntax-async-functions",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-transform-export-namespace-from", // Updated
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-transform-json-strings", // Updated
      "@babel/plugin-transform-numeric-separator", // Updated
      "@babel/plugin-transform-optional-chaining", // Updated
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      [
        "@babel/plugin-transform-class-properties", // Updated
        {
          "loose": true
        }
      ]
    ]
  }
}
