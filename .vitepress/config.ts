import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Anqing's blog",
  description: "Anqing's blog website, generated by VitePress.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文章", link: "/posts/index", activeMatch: "/posts/" },
      {
        text: "镜像文档",
        items: [
          {
            text: "leaflet",
            link: "http://www.xieanqing.top/leaflet",
            target: "blank",
          },
        ],
      },
      { text: "Demos", link: "/demos/index", activeMatch: "/demos/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Anqing-None" }],
  },
});
