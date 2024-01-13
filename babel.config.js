module.exports = function (api) {
  api.cache.forever();
  
  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: 3
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "syntax-async-functions",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-transform-export-namespace-from",
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-transform-json-strings",
      "@babel/plugin-transform-numeric-separator",
      "@babel/plugin-transform-optional-chaining",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      [
        "@babel/plugin-transform-class-properties",
        {
          "loose": true
        }
      ],
      isDevelopment && require.resolve('react-refresh/babel')
    ].filter(Boolean) // Filter out false values in development mode
  }
}
