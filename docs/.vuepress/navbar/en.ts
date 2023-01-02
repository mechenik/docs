import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  // "/en/",
  { text: "Guide", icon: "creative", link: "/en/guide/" },
  { text: "Config", icon: "config", link: "/en/config/" },
  { text: "FAQ", icon: "question", link: "/en/faq/" },
  {
    text: "Community",
    icon: "community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/alist-org/alist/discussions",
      },
      { text: "Telegram", link: "https://t.me/alist_chat" },
      { text: "Discord", link: "https://discord.gg/F4ymsH4xv2" },
    ],
  },
  {
    text: "Version",
    icon: "branch",
    children: [{ text: "V2", link: "https://alist-doc.nn.ci" }],
  },
  {
    text: "Github",
    icon: "github",
    link: "https://github.com/alist-org/alist",
  },
]);
