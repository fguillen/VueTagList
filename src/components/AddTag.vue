<template>
  <form v-on:submit.prevent="addTag">
    <input type="text" v-model.trim="title" />
    <button type="submit">+</button>
  </form>
</template>

<script setup lang="ts">
import { type Ref, ref, defineEmits } from 'vue';

const emit = defineEmits(["onAddTag"]);

const title: Ref<string> = ref("");

const addTag = () => {
  if (title.value == "") return;
  console.log(title.value);
  emit("onAddTag", title.value);
  title.value = "";
}
</script>
