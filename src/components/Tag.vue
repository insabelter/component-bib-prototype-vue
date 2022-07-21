<script setup lang="ts">
const props = defineProps<{
  tag: string,
  tags: string[]
}>()
const emit = defineEmits(['update:tags'])

function deleteTag() {
  var tagsCopy = props.tags;
  const index = tagsCopy.indexOf(props.tag);
  if (index >= 0) {
    tagsCopy.splice(index, 1);
  }
  emit('update:tags',tagsCopy);
}
</script>

<template>
  <div class="badge">
    {{tag}}
    <button @click="deleteTag()">X</button>
  </div>
</template>

<style scoped>
:where(.badge) {
  --_badge-bg-color: var(--color-accent-bg-secondary); /* private custom property */
  --_badge-color: var(--color-accent-text); /* private custom property */
  --_badge-icon-color: var(--color-accent-text); /* private custom property */
  --badge-size: 1.5rem;
  --badge-line-height: 1.25;
  --badge-padding: var(--spacing-s);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: var(--max-line-length);
  min-inline-size: var(--badge-size);
  min-block-size: var(--badge-size);
  padding-inline: var(--badge-padding);
  overflow: hidden;
  gap: var(--spacing-xs);
  border-radius: calc(var(--badge-size) / 2);
  background-color: var(--_badge-bg-color);
  color: var(--_badge-color);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-medium);
  line-height: var(--badge-line-height);
  vertical-align: middle;
}

:where(.badge > button) {
  color: var(--_badge-color);
  background-color: transparent;
  border: transparent;
}

:where(.badge > button:hover) {
  cursor: pointer;
}
</style>
