import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/en/guide/": "structure",
  "/en/config/": "structure",
  "/en/faq/": "structure",
  "/en/": [
    "",
    {
      text: "Guide",
      icon: "creative",
      prefix: "guide/",
      children: ["install/", "drivers/", "advanced/"],
    },
    {
      text: "Config",
      icon: "config",
      prefix: "config/",
      children: [
        "config",
      ],
    },
    {
      text: "FAQ",
      icon: "question",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
