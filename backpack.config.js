const PathsResolvePlugin = require("tsconfig-paths-webpack-plugin");
const EventHooksPlugin = require("event-hooks-webpack-plugin");
const { execSync } = require("child_process");

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ["./src/server.ts"];

    config.resolve = {
      extensions: [".ts", ".js", ".json"],
      plugins: [new PathsResolvePlugin()],
    };

    config.plugins = [
      new EventHooksPlugin({
        environment: () => {
          console.info("Building routes and specs");
          execSync("yarn tsoa:gen");
        },
      }),
    ];

    config.module.rules.push({
      test: /\.ts$/,
      loader: "ts-loader",
    });

    return config;
  },
};
