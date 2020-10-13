const path = require('path');

const ENTRY_PATH = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const OUTPUT_PATH = path.resolve(__dirname, 'public');

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
      },
      {
        test: /\.css?/,
        use: ['style-loader', { loader: 'css-loader', options: { modules: false } }],
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
