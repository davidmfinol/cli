// Throwaway check for the Unity CLI install path in SetupMac. Not part of the PR.
import { SetupMac } from "../src/logic/unity/platform-setup/setup-mac.ts";

await SetupMac.setup({
  isRunningLocally: false,
  unityHubVersionOnMac: "",
  engineVersion: process.env.ENGINE_VERSION,
  targetPlatform: process.env.TARGET_PLATFORM,
} as any);
console.log("SetupMac.setup finished");
