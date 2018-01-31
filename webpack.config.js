module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./public/js/app.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [/node_modules/],
        use: { loader: 'babel-loader' }
      },
      {
        test:/\.css$/,
        use: [
          {
             loader: 'style-loader',
          },
          {
             loader: 'css-loader',
             options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
               }
          }
        ]
      }
    ]
  }
}
