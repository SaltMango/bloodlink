// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withTamagui } = require("@tamagui/metro-plugin");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

module.exports = wrapWithReanimatedMetroConfig(
  withTamagui(config, {
    components: ["tamagui"],
    config: "./tamagui.config.ts",
    outputCSS: "./tamagui-web.css",
  })
);
