# Initiate yarn
yarn init -y
# Webpack dev dependencies
yarn add webpack webpack-dev-server path --dev
# Bable dev dependencies
yarn add babel-core babel-loader babel-preset-env babel-preset-react --dev
# Bable and webpack config files
touch .babelrc webpack.config.js
echo "{
  "presets": [
    "react","env"
  ]
}
" >> .babelrc
# react dependencies
yarn add react react-dom react-router --save
# create static directories
mkdir src public public/css public/img public/js
# app index.html
touch src/index.js public/index.html
