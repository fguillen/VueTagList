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

const emit = defineEmits(["suggestionSelected"]);

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

const selectNext = ():void => {
  if (suggestedTags.value.length > 0) {
    const index = suggestedTags.value.findIndex(e => e.selected);
    const nextIndex = (index + 1) % suggestedTags.value.length;

    if (index != -1) {
      suggestedTags.value[index].selected = false;
    }
    suggestedTags.value[nextIndex].selected = true;
  }
}

const selectPrevious = (): void => {
  if (suggestedTags.value.length > 0) {
    const index = suggestedTags.value.findIndex(e => e.selected);
    let previousIndex = 0;

    if (index == -1 || index == 0) {
      previousIndex = suggestedTags.value.length - 1;
    } else {
      previousIndex = index - 1;
    }

    if (index != -1) {
      suggestedTags.value[index].selected = false;
    }
    suggestedTags.value[previousIndex].selected = true;
  }
}

const sendSelected = (): void => {
  const selected = suggestedTags.value.find(e => e.selected);
  if (selected) {
    emit("suggestionSelected", selected.title);
  }
}

const onKeyDown = (keyCode: string):void => {
  console.log("onKeyDown", keyCode);
  switch (keyCode) {
    case "ArrowDown":
      selectNext();
      break;
    case "ArrowUp":
      selectPrevious();
      break;
    case "Enter":
      sendSelected();
      break;
  }
}

defineExpose({
  onKeyDown
});
</script>
