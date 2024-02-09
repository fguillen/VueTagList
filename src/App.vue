<template>
  <header>
    <h1>App</h1>
  </header>

  <AddTag @onAddTag="addTag" />
  <TagList :tags="tags" />
</template>

<script setup lang="ts">
import type { Tag } from '@/models/Tag';
import { type Ref, ref } from 'vue';
import TagList from './components/TagList.vue';
import AddTag from './components/AddTag.vue';

const tags: Ref<Tag[]> = ref([
  {
    id: "1",
    title: "Infos sammeln"
  },
  {
    id: "2",
    title: "Test Projekt erstellen"
  },
  {
    id: "3",
    title: "Blog Beitrag schreiben"
  },
]);

const addTag = (title: string) => {
  console.log("addTag", title);
  tags.value.push({
    id: title,
    title: title
  });
}

</script>
