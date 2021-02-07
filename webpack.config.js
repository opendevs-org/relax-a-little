const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (_, argv) => {
  const isDev = (argv.mode && argv.mode === 'development') || false
  console.log('Development', isDev)

  return {
    target: 'node',
    entry: resolve(__dirname, 'src', 'extension.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'extension.js',
      libraryTarget: 'commonjs2',
      devtoolModuleFilenameTemplate: '../[resource-path]',
    },
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    externals: {
      // the vscode-module is created on-the-fly and must be excluded.
      // See: https://webpack.js.org/configuration/externals/
      vscode: 'commonjs vscode',
    },
    resolve: {
      extensions: ['.js'],
    },
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
      minimize: !isDev,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          parallel: true,
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [resolve(__dirname, 'dist')],
      }),
    ]
  }
}
