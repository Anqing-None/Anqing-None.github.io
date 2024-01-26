---
title: vite前端工程化配置Snippets
date: 2024-01-16 17:12:00
update: 2024-01-16
tags: vite
categories: vite
excerpt: 一些常用的vite打包配置。
---

# vite 前端工程化配置 Snippets

## 配置`@`符号映射为项目根目录

```ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

如果使用 ts，添加 ts 路径设置

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

`resolve.alias`选项参考[vite resolve.alias](https://cn.vitejs.dev/config/shared-options.html#resolve-alias)；

`URL`是 Node.js url 模块下的一个类，用于解析 URL，参考[node:url](https://nodejs.cn/api/url.html#%E7%B1%BBurl)；

`fileURLToPath`是 Node.js url 模块的原生方法，参考[fileURLToPath](https://nodejs.cn/api/url.html#urlfileurltopathurl)；

`import.meta.url`是 ESM 模块的元数据信息，url 属性是模块的路径，参考[MDN import.meta](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta)；

`compilerOptions`属性用来定制 TypeScript 编译行为，参考[compilerOptions.paths](https://wangdoc.com/typescript/tsconfig.json#paths)；

## 打包时将不同的包分为多个 chunk

```ts
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash-es'],
          vueuse: ['@vueuse/core'],
          axios: ['axios'],
          dragger: ['vue-draggable-plus'],
          ant: ['@ant-design/icons-vue', 'ant-design-vue'],
        },
      },
    },
  },
  ...
});

```

`rollupOptions.output.manualChunks`选项参考[manualchunks](https://rollupjs.org/configuration-options/#output-manualchunks)；
