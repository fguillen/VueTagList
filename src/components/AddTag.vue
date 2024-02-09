<template>
  <form v-on:submit.prevent="addTag">
    <input type="text" v-model.trim="title" />
    <button type="submit">+</button>
  </form>
  <TagsSuggestion :partial-title="title" />
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { useTagsStore } from '@/stores/TagsStore';
import TagsSuggestion from './TagsSuggestion.vue';

const title: Ref<string> = ref("");

const { addTag: storeAddTag } = useTagsStore();

const addTag = () => {
  if (title.value == "") return;
  console.log(title.value);
  storeAddTag(title.value);
  title.value = "";
}
</script>
