<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import Tag from './Tag.vue'
const props = defineProps<{
  placeholder: string,
  tags: string[]
}>()
const emit = defineEmits(['update:tags'])
const state = reactive({ 
  inputText: ''
})

function addTag() {
  emit('update:tags', [...props.tags, state.inputText])
  state.inputText = '';
}
</script>

<template>
  <input v-model="state.inputText" type="text" id="tag-input" :title="placeholder" :placeholder="placeholder" @keyup.enter="addTag"/>
  <div class="tag-container">
    <Tag class="tag-input-tag" v-for="tag in tags" v-model:tags="tags" :tag="tag"></Tag>
  </div>
</template>

<style scoped>
#tag-input {
  margin-block-end: var(--spacing-m);
}

.tag-input-tag {
  margin-inline-end: var(--spacing-s);
  margin-block: var(--spacing-xs);
}

.tag-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
