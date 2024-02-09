<template>
  <span>{{ tag.title }}</span>
</template>

<script setup lang="ts">
import type Tag from '@/models/Tag`;

const props = defineProps<{
  tag: Tag
}>();
</script>
