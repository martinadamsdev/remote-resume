const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_PROD = true
// publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL,


const glob = require("glob");
const pagesInfo = require("./pages.config");
const pages = {};

glob.sync('./src/pages/**/main.js').forEach(entry => {
  let chunk = entry.match(/\.\/src\/pages\/(.*)\/main\.js/)[1];
  const curr = pagesInfo[chunk];
  if (curr) {
    pages[chunk] = {
      entry,
      ...curr,
      chunk: ["chunk-vendors", "chunk-common", chunk]
    }
  }
})

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@components", resolve("src/components"))
      .set("@plugins", resolve("src/plugins"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@layouts", resolve("src/layouts"))
      .set("@static", resolve("src/static"));
    // 防止多页面打包卡顿
    config.plugins.delete("named-chunks");
    return config;
  },
  pages
}
