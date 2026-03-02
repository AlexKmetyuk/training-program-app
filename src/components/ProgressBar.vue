<script setup>
defineProps({
  value: { type: Number, default: 0 },
  large: { type: Boolean, default: false },
  color: { type: String, default: null },
})
</script>

<template>
  <div :class="['progress-bar', { 'progress-bar--lg': large }]">
    <div
      class="progress-bar__fill"
      :class="{ 'progress-bar__fill--success': value === 100 }"
      :style="{ width: value + '%', background: color || undefined }"
    />
  </div>
</template>
