<template>
  <form v-on:submit.prevent="addTag">
    <input type="text" v-model.trim="title" @keydown="onKeyDown"/>
    <button type="submit">+</button>
  </form>
  <TagsSuggestion :partial-title="title" ref="tagsSuggestionRef" @suggestion-selected="onSuggestionSelected"/>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { useTagsStore } from '@/stores/TagsStore';
import TagsSuggestion from './TagsSuggestion.vue';

const title: Ref<string> = ref("");
const tagsSuggestionRef = ref(null);

const { addTag: storeAddTag } = useTagsStore();

const addTag = () => {
  if (title.value == "") return;
  console.log(title.value);
  storeAddTag(title.value);
  title.value = "";
}

const onKeyDown = (event: KeyboardEvent): void => {
  console.log("AddTag.onKeyDown", event.code)
  if (tagsSuggestionRef.value != undefined) {
    tagsSuggestionRef.value.onKeyDown(event.code);
  }
}

const onSuggestionSelected = (suggestion: string): void => {
  title.value = suggestion;
}
</script>
