<template>
<ul>
  <li v-for="suggestedTag in suggestedTags" :key="suggestedTag">
    {{ suggestedTag }}
  </li>
</ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useSuggestionsFinder } from '@/stores/SuggestionsFinder'

const props = defineProps({
  partialTitle: String
});

const { getSuggestions } = useSuggestionsFinder();

const suggestedTags = computed(() => {
  if (props.partialTitle && props.partialTitle.length > 1) {
    return getSuggestions(props.partialTitle, 10);
  } else {
    return [];
  }
});

</script>
@/stores/SuggestionsFinder@/data/SuggestionsFinder
