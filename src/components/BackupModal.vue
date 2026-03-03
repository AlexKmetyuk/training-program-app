<script setup>
import { ref } from 'vue'
import { useProgressStore } from '../stores/progress.js'

const emit = defineEmits(['close'])
const store = useProgressStore()
const fileInput = ref(null)
const message = ref('')
const messageType = ref('')

const completedCount = Object.keys(store.completed).length

function downloadBackup() {
  const data = store.exportData()
  const json = JSON.stringify(data, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  const date = new Date().toISOString().slice(0, 10)
  a.href = url
  a.download = `training-backup-${date}.json`
  a.click()
  URL.revokeObjectURL(url)
  message.value = 'Бекап завантажено!'
  messageType.value = 'success'
}

function triggerUpload() {
  fileInput.value.click()
}

function handleFile(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result)

      const count = Object.keys(data.completed || {}).length
      if (!confirm(`Завантажити бекап? (${count} відміток)\nПоточний прогрес буде замінено.`)) {
        return
      }

      store.importData(data)
      message.value = `Прогрес відновлено! (${count} відміток)`
      messageType.value = 'success'
    } catch (err) {
      message.value = err.message || 'Помилка читання файлу'
      messageType.value = 'error'
    }
  }
  reader.readAsText(file)
  e.target.value = ''
}
</script>

<template>
  <Teleport to="body">
    <div class="backup-overlay" @click.self="emit('close')">
      <div class="backup-modal">
        <div class="backup-header">
          <h2 class="backup-title">Бекап прогресу</h2>
          <button class="backup-close" @click="emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="backup-body">
          <div class="backup-info">
            <div class="backup-info__row">
              <span class="backup-info__label">Відмічено вправ</span>
              <span class="backup-info__value">{{ completedCount }}</span>
            </div>
            <div class="backup-info__row">
              <span class="backup-info__label">Загальний прогрес</span>
              <span class="backup-info__value">{{ store.totalProgress }}%</span>
            </div>
          </div>

          <p class="backup-hint">
            Скачайте бекап на одному пристрої та завантажте на іншому, щоб перенести прогрес.
          </p>

          <div class="backup-actions">
            <button class="backup-btn backup-btn--download" @click="downloadBackup">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Скачати бекап
            </button>
            <button class="backup-btn backup-btn--upload" @click="triggerUpload">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              Завантажити бекап
            </button>
          </div>

          <input
            ref="fileInput"
            type="file"
            accept=".json"
            style="display: none"
            @change="handleFile"
          />

          <div v-if="message" :class="['backup-message', `backup-message--${messageType}`]">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.backup-overlay {
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
.backup-modal {
  background: var(--bg-secondary, #1a1d27);
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.backup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid var(--bg-hover, #2a2e42);
}
.backup-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}
.backup-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  display: flex;
}
.backup-close:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}
.backup-body {
  padding: 16px 20px 20px;
}
.backup-info {
  background: var(--bg-card, #222639);
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 12px;
}
.backup-info__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}
.backup-info__label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.backup-info__value {
  font-size: 0.9rem;
  font-weight: 700;
}
.backup-hint {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 16px;
}
.backup-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.backup-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.15s;
}
.backup-btn:active {
  opacity: 0.8;
}
.backup-btn--download {
  background: var(--accent, #6c8cff);
  color: #fff;
}
.backup-btn--upload {
  background: var(--bg-card, #222639);
  color: var(--text-primary);
  border: 1px solid var(--bg-accent, #323750);
}
.backup-message {
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
}
.backup-message--success {
  background: var(--success-dim, rgba(16, 185, 129, 0.15));
  color: var(--success, #10b981);
}
.backup-message--error {
  background: var(--danger-dim, rgba(239, 68, 68, 0.15));
  color: var(--danger, #ef4444);
}
</style>
