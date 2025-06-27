import type { ConstructorParams } from "@/dist";
import dotenv from "dotenv";
dotenv.config();

const StagehandConfig: ConstructorParams = {
  verbose: 2 /* Verbosity level for logging: 0 = silent, 1 = info, 2 = all */,
  domSettleTimeoutMs: 30_000 /* Timeout for DOM to settle in milliseconds */,

  //   LLM configuration - Using Groq instead of OpenAI
  modelName: "groq-llama-3.3-70b-versatile" /* Name of the Groq model to use */,
  modelClientOptions: {
    apiKey: process.env.GROQ_API_KEY, // Use Groq API key instead of OpenAI
  } /* Configuration options for the model client */,

  // Browser configuration
  env:
    process.env.BROWSERBASE_API_KEY && process.env.BROWSERBASE_PROJECT_ID
      ? "BROWSERBASE"
      : "LOCAL",
  apiKey: process.env.BROWSERBASE_API_KEY /* API key for authentication */,
  projectId: process.env.BROWSERBASE_PROJECT_ID /* Project identifier */,
  browserbaseSessionID:
    undefined /* Session ID for resuming Browserbase sessions */,
  browserbaseSessionCreateParams: {
    projectId: process.env.BROWSERBASE_PROJECT_ID!,
    browserSettings: {
      blockAds: true,
      viewport: {
        width: 1024,
        height: 768,
      },
    },
  },
  localBrowserLaunchOptions: {
    headless: false,
    viewport: {
      width: 1024,
      height: 768,
    },
  } /* Configuration options for the local browser */,
  experimental: false, // Enable experimental features
};
export default StagehandConfig;
