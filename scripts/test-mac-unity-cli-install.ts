// Throwaway check for the Unity CLI install path in SetupMac. Not part of the PR.
import { configureLogger, Verbosity } from "../src/core/logger/index.ts";
import { SetupMac } from "../src/logic/unity/platform-setup/setup-mac.ts";

// The CLI sets up the global logger at startup; System.run uses it.
await configureLogger(Verbosity.normal);

await SetupMac.setup({
  isRunningLocally: false,
  unityHubVersionOnMac: "",
  engineVersion: process.env.ENGINE_VERSION,
  targetPlatform: process.env.TARGET_PLATFORM,
} as any);
console.log("SetupMac.setup finished");
