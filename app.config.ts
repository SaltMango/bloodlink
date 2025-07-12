import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "Blood-Link",
  name: "Blood Link",
  plugins: ["expo-asset", "expo-font"],
});
