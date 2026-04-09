import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    // @ts-ignore
    start: {
      server: {
        preset: "cloudflare-pages",
        rollupConfig: {
          external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"]
        },
      }
    }
  },
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro()
  ]
});
