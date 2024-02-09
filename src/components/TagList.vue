<template>
  <ul>
    <li v-for="tag in tags" :key="tag.id">
      {{ tag.title }}
      <button type="button" @on-click="remove">-</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Tag } from '@/models/Tag';

defineProps<{
  tags: Array<Tag>;
}>();

const emit = defineEmits(["onRemove"]);

const remove = () => {
  emit("onRemove");
}
</script>
