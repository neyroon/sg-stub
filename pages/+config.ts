import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout

  // https://vike.dev/head-tags
  title: "Весенний плейлист от SG",
  description:
    "Музыкальное пространство, где каждая мелодия вдохновлена ритмами наших современниц. Просто покрутите пластинку и позвольте музыке выбрать настроение этого дня.",

  extends: vikeReact,
} satisfies Config;
