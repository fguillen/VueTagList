<template>
  <header>
    <h1>App</h1>
  </header>

  <AddTag />
  <TagList :tags="tags" />
</template>

<script setup lang="ts">
import { useTagsStore } from '@/stores/TagsStore';
import TagList from './components/TagList.vue';
import AddTag from './components/AddTag.vue';

const tags = useTagsStore.tags;
</script>
