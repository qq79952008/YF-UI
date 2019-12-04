module.exports = {
	build: {
    // html模板
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 生产环境的souce map
    productionSourceMap: false,
    devtool: '#source-map',
    // 开启静态文件的Gzip压缩
    // 如果是true 的话  需要 npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 打包完成显示包大小的状态分析
    // `npm run build --report`
    bundleAnalyzerReport: process.env.npm_config_report
  }
}