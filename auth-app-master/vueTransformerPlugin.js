var upstreamTransformer = require("metro-react-native-babel-transformer");
var vueNaiveScripts = require("vue-native-scripts");
var vueExtensions = ["vue"];

module.exports.transform = function ({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith("." + ext))) {
    return vueNaiveScripts.transform({ src, filename, options });
  }
  return upstreamTransformer.transform({ src, filename, options });
};