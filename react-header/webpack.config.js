/* eslint-disable prettier/prettier */
const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react-ts")

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "isra",
    projectName: "react-header",
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["react-router-dom"],
  })
}
