<template>
<ul>
  <li v-for="suggestedTag in suggestedTags" :key="suggestedTag">
    {{ suggestedTag }}
  </li>
</ul>
</template>

<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';

import { useSuggestionsFinder } from '@/stores/SuggestionsFinder'

const props = defineProps({
  partialTitle: String
});

const { getSuggestions } = useSuggestionsFinder();

interface SuggestedTag {
  title: String;
  selected: Boolean;
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
