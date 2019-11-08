const MiniCssExtractPlugin =  require("mini-css-extract-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  devtool: prod ? false : "source-map",
  mode,
  entry: {
    bundle: ["./src/index.js"]
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte")
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[hash:8].js"
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize:  30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: require("svelte-preprocess")()
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp4|svg|ttf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
}
