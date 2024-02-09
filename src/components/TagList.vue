<template>
  <ul>
    <li v-for="tag in tags" :key="tag.id">{{ tag.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import type { Tag } from '@/models/Tag';

const props = defineProps<{
  tags: Array<Tag>;
}>();
</script>
