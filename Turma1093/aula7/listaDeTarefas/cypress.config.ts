import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    supportFile: false,
    devServer: {
      framework: "react",
      bundler: "vite",
    }
  },
});
