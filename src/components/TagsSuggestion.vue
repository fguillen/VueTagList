<template>
<ul>
  <li v-for="suggestedTag in suggestedTags" :key="suggestedTag.title">
    {{ suggestedTag }}
  </li>
</ul>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';

import { useSuggestionsFinder } from '@/stores/SuggestionsFinder'

const props = defineProps<{
  partialTitle: string
}>();

const { getSuggestions } = useSuggestionsFinder();

interface SuggestedTag {
  title: string;
  selected: boolean;
}
const suggestedTags: Ref<SuggestedTag[]> = ref([]);

watch(() => props.partialTitle, (): void => {
  if (props.partialTitle && props.partialTitle.length > 1) {
    const result = getSuggestions(props.partialTitle, 10);
    suggestedTags.value = result.map(e => ({ title: e, selected: false }));
  } else {
    suggestedTags.value = [];
  }
});

</script>
