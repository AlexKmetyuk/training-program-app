<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progress.js'

const store = useProgressStore()

const testWeeks = [
  { id: 11, month: 3, format: '3RM', label: 'M3 — Фундамент', color: '#6c8cff' },
  { id: 23, month: 6, format: '3RM', label: 'M6 — DUP', color: '#f5a623' },
  { id: 35, month: 9, format: '2RM', label: 'M9 — Спеціалізація', color: '#e74c3c' },
  { id: 47, month: 12, format: '1RM', label: 'M12 — Реалізація', color: '#2ecc71' },
]

const lifts = [
  { key: 'squat', name: 'Присід', nameEn: 'Squat', day: 'Пн' },
  { key: 'deadlift', name: 'Станова тяга', nameEn: 'Deadlift', day: 'Ср' },
  { key: 'bench', name: 'Жим лежачи', nameEn: 'Bench Press', day: 'Пт' },
]

// Editing state
const editingCell = ref(null)
const editWeight = ref('')

function getResult(weekId, liftKey) {
  return store.testResults?.[`week-${weekId}-${liftKey}`] || null
}

function startEdit(weekId, liftKey) {
  const existing = getResult(weekId, liftKey)
  editWeight.value = existing?.weight?.toString() || ''
  editingCell.value = `${weekId}-${liftKey}`
}

function saveResult(weekId, liftKey, format) {
  const weight = parseFloat(editWeight.value)
  if (!weight || weight <= 0) {
    editingCell.value = null
    return
  }

  const reps = format === '1RM' ? 1 : format === '2RM' ? 2 : 3
  const estimated1rm = reps === 1 ? weight : Math.round(weight * (1 + reps / 30) * 10) / 10

  store.saveTestResult(`week-${weekId}-${liftKey}`, { weight, reps, estimated1rm })
  editingCell.value = null
}

function cancelEdit() {
  editingCell.value = null
}

// Progress overview
const filledTests = computed(() => {
  let count = 0
  for (const tw of testWeeks) {
    for (const lift of lifts) {
      if (getResult(tw.id, lift.key)) count++
    }
  }
  return count
})

// Best estimated 1RM per lift
function bestE1rm(liftKey) {
  let best = 0
  for (const tw of testWeeks) {
    const r = getResult(tw.id, liftKey)
    if (r?.estimated1rm > best) best = r.estimated1rm
  }
  return best || null
}

// Progress between tests
function progressPct(liftKey, twIndex) {
  if (twIndex === 0) return null
  const curr = getResult(testWeeks[twIndex].id, liftKey)
  const prev = getResult(testWeeks[twIndex - 1].id, liftKey)
  if (!curr?.estimated1rm || !prev?.estimated1rm) return null
  return Math.round(((curr.estimated1rm - prev.estimated1rm) / prev.estimated1rm) * 100)
}
</script>

<template>
  <div>
    <div class="test-hero">
      <div class="test-hero__title">Історія тестів</div>
      <div class="test-hero__sub">{{ filledTests }}/12 результатів записано</div>
    </div>

    <!-- Best results summary -->
    <div class="test-bests" v-if="filledTests > 0">
      <div class="test-best" v-for="lift in lifts" :key="lift.key">
        <div class="test-best__name">{{ lift.name }}</div>
        <div class="test-best__value">
          {{ bestE1rm(lift.key) ? bestE1rm(lift.key) + ' кг' : '—' }}
        </div>
        <div class="test-best__label">найкращий e1RM</div>
      </div>
    </div>

    <!-- Test table per phase -->
    <div class="test-phase" v-for="(tw, twIdx) in testWeeks" :key="tw.id">
      <div class="test-phase__header" :style="{ borderColor: tw.color }">
        <span class="test-phase__label" :style="{ color: tw.color }">{{ tw.label }}</span>
        <span class="test-phase__format">Тест {{ tw.format }}</span>
        <span class="test-phase__week">Тиждень {{ tw.id }}</span>
      </div>

      <div class="test-phase__body">
        <div class="test-row" v-for="lift in lifts" :key="lift.key">
          <div class="test-row__info">
            <span class="test-row__name">{{ lift.name }}</span>
            <span class="test-row__day">{{ lift.day }}</span>
          </div>

          <!-- Editing mode -->
          <div v-if="editingCell === `${tw.id}-${lift.key}`" class="test-row__edit">
            <input
              v-model="editWeight"
              type="number"
              inputmode="decimal"
              step="0.5"
              placeholder="кг"
              class="test-input"
              @keyup.enter="saveResult(tw.id, lift.key, tw.format)"
              @keyup.escape="cancelEdit"
              ref="editInput"
              autofocus
            />
            <button class="test-btn test-btn--save" @click="saveResult(tw.id, lift.key, tw.format)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
            <button class="test-btn test-btn--cancel" @click="cancelEdit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <!-- Display mode -->
          <div v-else class="test-row__result" @click="startEdit(tw.id, lift.key)">
            <template v-if="getResult(tw.id, lift.key)">
              <span class="test-row__weight">{{ getResult(tw.id, lift.key).weight }} кг</span>
              <span class="test-row__reps">&times; {{ getResult(tw.id, lift.key).reps }}</span>
              <span class="test-row__e1rm">e1RM: {{ getResult(tw.id, lift.key).estimated1rm }} кг</span>
              <span
                v-if="progressPct(lift.key, twIdx) !== null"
                :class="['test-row__progress', progressPct(lift.key, twIdx) >= 0 ? 'test-row__progress--up' : 'test-row__progress--down']"
              >
                {{ progressPct(lift.key, twIdx) >= 0 ? '+' : '' }}{{ progressPct(lift.key, twIdx) }}%
              </span>
            </template>
            <template v-else>
              <span class="test-row__empty">Натисни щоб записати</span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="test-info">
      <div class="test-info__title">Як працює</div>
      <p>Тести проводяться кожні 3 місяці (тиждень 3 кожного циклу).</p>
      <p><strong>Формула Epley:</strong> e1RM = вага &times; (1 + повторення / 30)</p>
      <p>Записуй вагу, з якою зробив вказану кількість повторень. Estimated 1RM розрахується автоматично.</p>
      <table class="test-info__table">
        <tr><th>Тест</th><th>Формат</th><th>Точність</th></tr>
        <tr><td>M3, M6</td><td>3RM</td><td>Оцінка через формулу</td></tr>
        <tr><td>M9</td><td>2RM</td><td>Ближче до реального 1RM</td></tr>
        <tr><td>M12</td><td>1RM</td><td>Справжній максимум</td></tr>
      </table>
    </div>
  </div>
</template>
