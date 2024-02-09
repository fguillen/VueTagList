<template>
  <span>
    {{ tag.title }}
    <button type="button" @click="remove">-</button>
  </span>
</template>

<script setup lang="ts">
import type { Tag } from '@/models/Tag';
import { useTagsStore } from '@/stores/TagsStore';

const { removeTag } = useTagsStore();

const props = defineProps<{
  tag: Tag
}>();

const remove = () => {
  console.log("remove", props.tag.id);
  removeTag(props.tag.id);
}
</script>
