import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "process.env.VARVAR": JSON.stringify("hello"),
  },
  test: {},
});
