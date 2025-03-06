import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike({ prerender: true }), react({}), tailwindcss()],
  build: {
    target: "es2022",
  },
  base: "https://github.com/neyroon/sg-stub",
});
