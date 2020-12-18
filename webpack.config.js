// import path from 'path';

const path = require("path");
// export default {
module.exports = {
    mode: 'development',
    entry: {
      main: ['./src/app/index.tsx'],
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: { configFile: 'tsconfig.fe.json' },
          },
        },
      ],
    },
}