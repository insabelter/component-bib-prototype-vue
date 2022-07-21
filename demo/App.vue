<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  tags: ['Test1', 'Test2']
})
</script>

<template>
  <p>This is the Vue direct Test</p>
  <Card title="Tag Input">
    <TagInput v-model:tags="state.tags" placeholder="Enter a tag!"></TagInput>
  </Card>
  <p>Resulting Tags:</p>
  <ul>
    <li v-for="tag in state.tags">{{ tag }}</li>
  </ul>
</template>
