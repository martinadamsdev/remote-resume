const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@image", resolve("src/assets/image"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@components", resolve("src/components"));

    // 打包分析
    if (process.env.NODE_ENV === "production") {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
        config.plugins.delete("prefetch");
      }
    }

    // CDN
    const cdn = {
      // 访问https://unpkg.com/element-ui/lib/theme-chalk/index.css获取最新版本
      css: ["//cdn.jsdelivr.net/npm/codemirror@5.53.0/lib/codemirror.css"],
      js: [
        "//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
        "//cdn.jsdelivr.net/npm/@toast-ui/editor@2.1.0/dist/toastui-editor.min.js",
        "//cdn.jsdelivr.net/npm/vue-i18n@8.17.4/dist/vue-i18n.min.js",
        "//cdn.jsdelivr.net/npm/codemirror@5.53.0/lib/codemirror.min.js",
        "//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"
      ]
    };

    config.plugin("html").tap(args => {
      // html中添加cdn
      args[0].cdn = cdn;
      return args;
    });
  },
  configureWebpack: config => {
    config.externals = {
      axios: "axios",
      VueI18n: "vue-i18n",
      Editor: "@toast-ui/editor",
      CodeMirror: "codemirror",
      vue: "Vue"
    };
    const plugins = [];
    if (IS_PROD) {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  pluginOptions: {
    i18n: {
      locale: "Chinese",
      fallbackLocale: "Chinese",
      localeDir: "languages",
      enableInSFC: true
    }
  },
  lintOnSave: false
};
