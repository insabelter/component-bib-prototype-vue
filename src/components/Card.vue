<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="card">
    <header v-if="title">
      <h2>{{ title }}</h2>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>
  :host {
    --card-bg-color: var(--color-bg);
  }

  .card {
    --inline-padding: 1.5rem;
    max-inline-size: calc(var(--max-line-length) + 2 * var(--inline-padding));
    margin: 1.5rem;
    padding: 2rem var(--inline-padding);
    border-radius: var(--border-radius-xl);
    background-color: var(--card-bg-color);
    box-shadow: var(--shadow-l);
  }
</style>
