const path = require('path');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    newTaskModule: './src/modules/newTaskModule.js',
    newTaskInfo: './src/modules/newTaskInfo.js',
    renderTask: './src/modules/renderTasks.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};