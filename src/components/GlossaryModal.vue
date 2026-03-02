<script setup>
import { ref } from 'vue'
import { glossary } from '../data/glossary.js'

const emit = defineEmits(['close'])
const search = ref('')

function filtered() {
  const q = search.value.toLowerCase().trim()
  if (!q) return glossary
  return glossary
    .map(cat => ({
      ...cat,
      terms: cat.terms.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.full && t.full.toLowerCase().includes(q))
      )
    }))
    .filter(cat => cat.terms.length > 0)
}
</script>

<template>
  <Teleport to="body">
    <div class="glossary-overlay" @click.self="emit('close')">
      <div class="glossary-modal">
        <div class="glossary-header">
          <h2 class="glossary-title">Глосарій</h2>
          <button class="glossary-close" @click="emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="glossary-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            v-model="search"
            type="text"
            placeholder="Пошук термінів..."
            class="glossary-search__input"
          />
        </div>

        <div class="glossary-body">
          <div v-for="cat in filtered()" :key="cat.category" class="glossary-cat">
            <div class="glossary-cat__title">{{ cat.category }}</div>
            <div v-for="t in cat.terms" :key="t.term" class="glossary-term">
              <div class="glossary-term__name">
                {{ t.term }}
                <span v-if="t.full" class="glossary-term__full">{{ t.full }}</span>
              </div>
              <div class="glossary-term__desc">{{ t.description }}</div>
            </div>
          </div>
          <div v-if="filtered().length === 0" class="glossary-empty">
            Нічого не знайдено
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.glossary-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.glossary-modal {
  background: var(--bg-secondary, #1a1d27);
  border-radius: 16px;
  width: 100%;
  max-width: 560px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.glossary-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid var(--bg-hover, #2a2e42);
}
.glossary-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}
.glossary-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  display: flex;
}
.glossary-close:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}
.glossary-search {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 20px;
  padding: 8px 12px;
  border-radius: 10px;
  background: var(--bg-card, #222639);
  color: var(--text-muted);
}
.glossary-search__input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 0.9rem;
}
.glossary-search__input::placeholder {
  color: var(--text-muted);
}
.glossary-body {
  overflow-y: auto;
  padding: 0 20px 20px;
  flex: 1;
}
.glossary-cat {
  margin-bottom: 20px;
}
.glossary-cat__title {
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 10px;
  padding-top: 12px;
}
.glossary-term {
  margin-bottom: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--bg-card, #222639);
}
.glossary-term__name {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.glossary-term__full {
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-left: 6px;
}
.glossary-term__desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.45;
}
.glossary-empty {
  text-align: center;
  color: var(--text-muted);
  padding: 32px 0;
}
</style>
