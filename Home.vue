<template>
  <VPFeatures :features="features"></VPFeatures>
</template>

<script setup lang="ts">
//@ts-ignore
import { data as posts } from "./posts.data";

const features = posts.slice(0, 3).map((p) => {
  const { frontmatter, groupDate, month, url, year } = p;
  const { categories, date, excerpt, tags, title, update } = frontmatter;
  return {
    title,
    details: excerpt,
    link: url,
    linkText: "阅读全文",
    date,
  };
});
</script>
