<script setup>
defineProps({
  phaseName: String,
  description: String,
  phaseColor: String,
})
</script>

<template>
  <div class="phase-info" :style="{ borderLeftColor: phaseColor, background: phaseColor + '15' }">
    <div class="phase-info__name">{{ phaseName }}</div>
    <div class="phase-info__desc">{{ description }}</div>
  </div>
</template>
