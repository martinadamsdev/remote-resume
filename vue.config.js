const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isProd = ["production", "prod"].includes(process.env.NODE_ENV);

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  publicPath: isProd ? "/" : "/",
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@image", resolve("src/assets/image"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@components", resolve("src/components"));

    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/]vue[\\/]/,
          name: "npm.vue",
        },
        vuex: {
          test: /[\\/]node_modules[\\/]vuex[\\/]/,
          name: "npm.vuex",
        },
        router: {
          test: /[\\/]node_modules[\\/]vue[\\-]router[\\/]/,
          name: "npm.router",
        },
        // vendor: {
        //   name: "npm.vendors",
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: "all",
        // },
      },
    });

    // 打包分析
    if (isProd) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        .end();

      config.plugins.delete("prefetch");

      // CDN
      const cdn = {
        // 访问https://unpkg.com/element-ui/lib/theme-chalk/index.css获取最新版本
        css: ["//cdn.jsdelivr.net/npm/codemirror@5.53.0/lib/codemirror.css"],
        js: [
          "//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
          "//cdn.jsdelivr.net/npm/@toast-ui/editor@2.1.0/dist/toastui-editor.min.js",
          "//cdn.jsdelivr.net/npm/vue-i18n@8.17.4/dist/vue-i18n.min.js",
          "//cdn.jsdelivr.net/npm/codemirror@5.53.0/lib/codemirror.min.js",
          "//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js",
        ],
      };

      config.plugin("html").tap((args) => {
        // html 中添加 cdn
        args[0].cdn = cdn;
        return args;
      });
    }
  },
  configureWebpack: (config) => {
    const plugins = [];
    if (isProd) {
      // config.module = {
      //   rules: [
      //     {
      //       test: /\.(scss|css)$/,
      //       resolve: { extensions: [".scss", ".css"] },
      //       use: [
      //         "style-loader",
      //         MiniCssExtractPlugin.loader,
      //         "css-loader",
      //         "postcss-loader?sourceMap",
      //         "resolve-url-loader?sourceMap",
      //         "sass-loader?sourceMap",
      //       ],
      //     },
      //   ],
      // };

      config.externals = {
        axios: "axios",
        VueI18n: "vue-i18n",
        Editor: "@toast-ui/editor",
        CodeMirror: "codemirror",
        vue: "Vue",
      };

      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path][query][name].gz",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
        })
        // new MiniCssExtractPlugin({
        //   filename: `styles/[name][hash:8].css`,
        // })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  pluginOptions: {
    i18n: {
      locale: "Chinese",
      fallbackLocale: "Chinese",
      localeDir: "languages",
      enableInSFC: true,
    },
  },
  lintOnSave: false,
};
