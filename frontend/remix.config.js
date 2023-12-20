const {
  routeExtensions,
} = require("remix-custom-routes")
const path = require("path")

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  serverBuildPath: "api/index.js",
  serverMainFields: ["main", "module"],
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  serverMinify: false,
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  tailwind: true,
  async routes() {
    const appDirectory = path.join(__dirname, "app")

    return routeExtensions(appDirectory)
  }
};
