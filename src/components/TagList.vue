<template>
  <ul>
    <li v-for="tag in tags" :key="tag.id">
      <TagElement :tag="tag" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Tag } from '@/models/Tag';
import TagElement from '@/components/TagElement.vue';

defineProps<{
  tags: Array<Tag>;
}>();
</script>
