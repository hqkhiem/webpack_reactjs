const path = require('path');

const config = {
   entry: './src/Main.jsx',
   output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'demo.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   watch: true
}
module.exports = config;