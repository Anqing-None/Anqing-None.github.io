<template>
  <div>
    <div v-for="(posts, date) in groupByYearAndMonthPosts" :key="date">
      <h2>{{ date }}</h2>
      <div v-for="post of posts" :key="post.url">
        <p>
          <a :href="post.url">{{ post.frontmatter.title }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { data as posts } from "../posts.data";
import { groupBy } from "lodash-es";

const groupByYearAndMonthPosts = groupBy(posts, "groupDate");
</script>
