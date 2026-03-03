<script setup>
import { useProgressStore } from '../stores/progress.js'

const store = useProgressStore()
</script>

<template>
  <div>
    <h2 class="settings-title">Налаштування</h2>

    <div class="settings-group">
      <div class="settings-group__title">Тренування</div>

      <label class="settings-toggle">
        <div class="settings-toggle__info">
          <div class="settings-toggle__name">Басейн по неділях</div>
          <div class="settings-toggle__desc">Показувати заняття в басейні та відстежувати відвідування</div>
        </div>
        <div class="settings-switch" :class="{ 'settings-switch--on': store.settings.poolEnabled }">
          <input
            type="checkbox"
            :checked="store.settings.poolEnabled"
            @change="store.settings.poolEnabled = $event.target.checked"
          />
          <div class="settings-switch__track">
            <div class="settings-switch__thumb"></div>
          </div>
        </div>
      </label>
    </div>

    <div class="settings-note">
      Басейн не впливає на прогрес програми. Коли увімкнено — на сторінці тижня показується картка басейну з можливістю відмітити відвідування.
    </div>
  </div>
</template>

<style scoped>
.settings-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.settings-group {
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 16px;
}

.settings-group__title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  padding: 12px 16px 8px;
}

.settings-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.settings-toggle__info {
  flex: 1;
}

.settings-toggle__name {
  font-weight: 600;
  font-size: 0.95rem;
}

.settings-toggle__desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 2px;
  line-height: 1.4;
}

.settings-switch {
  position: relative;
  flex-shrink: 0;
}

.settings-switch input {
  position: absolute;
  opacity: 0;
  width: 52px;
  height: 32px;
  cursor: pointer;
  z-index: 1;
}

.settings-switch__track {
  width: 48px;
  height: 28px;
  border-radius: 14px;
  background: var(--bg-accent);
  transition: background 0.2s;
  position: relative;
}

.settings-switch--on .settings-switch__track {
  background: var(--pool-color);
}

.settings-switch__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.settings-switch--on .settings-switch__thumb {
  transform: translateX(20px);
}

.settings-note {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
  padding: 0 4px;
}
</style>
