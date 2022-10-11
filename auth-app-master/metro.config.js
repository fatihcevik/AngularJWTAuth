const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig(__dirname)
  return {
    transformer: {
      babelTransformerPath: require.resolve("./vueTransformerPlugin.js"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      })
    },
    resolver: {
      sourceExts: [...sourceExts, "vue"]
    }
  };
})();