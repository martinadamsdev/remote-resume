const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@image', resolve('src/assets/image'))
      .set('@scss', resolve('src/assets/scss'))
      .set('@components', resolve('src/components'))
  },
  pluginOptions: {
    i18n: {
      locale: 'Chinese',
      fallbackLocale: 'Chinese',
      localeDir: 'languages',
      enableInSFC: true
    }
  }
}
