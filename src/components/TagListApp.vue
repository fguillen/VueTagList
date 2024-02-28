<template>
  <AddTag />
  <TagList :tags="tags" />
</template>

<script setup lang="ts">
import TagList from '@/components/TagList.vue';
import AddTag from '@/components/AddTag.vue';
import { useTagsStore } from '@/stores/TagsStore';
import { useSuggestionsFinder } from '@/stores/SuggestionsFinder'

const props = defineProps<{
  suggestions: Array<string>;
}>();

const { setSuggestions } = useSuggestionsFinder();

if (props.suggestions) {
  setSuggestions(props.suggestions);
}

const { tags } = useTagsStore();
</script>
