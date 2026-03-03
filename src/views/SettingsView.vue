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

    <!-- How to read exercise card -->
    <h3 class="settings-section-title">Як читати картку вправи</h3>

    <div class="guide-card">
      <!-- Mock exercise -->
      <div class="guide-exercise">
        <div class="guide-exercise__checkbox">
          <span class="guide-checkbox-mock"></span>
        </div>
        <div class="guide-exercise__body">
          <div class="guide-exercise__name">
            Присідання зі штангою
            <span class="category-badge category-badge--legs">legs</span>
          </div>
          <div class="guide-exercise__name-en">Barbell Back Squat</div>
          <div class="guide-exercise__params">
            <span class="guide-param guide-param--sets">3 &times; 12</span>
            <span class="guide-param">RPE 8</span>
            <span class="guide-param">2-3 хв</span>
          </div>
          <div class="guide-exercise__notes">Контрольований темп, повна амплітуда</div>
        </div>
      </div>

      <!-- Annotations -->
      <div class="guide-annotations">
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--success);"></div>
          <div class="guide-anno__text">
            <strong>Чекбокс</strong> — відмітити вправу як виконану
          </div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--warning);"></div>
          <div class="guide-anno__text">
            <strong>legs / push / pull / core</strong> — категорія м'язової групи
          </div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--accent);"></div>
          <div class="guide-anno__text">
            <strong>3 &times; 12</strong> — 3 підходи по 12 повторень
          </div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--danger);"></div>
          <div class="guide-anno__text">
            <strong>RPE 8</strong> — зусилля для <em>останнього</em> підходу. RPE 8 = ще 2 повторення в запасі. Перші підходи будуть легшими з тією ж вагою
          </div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--pool-color);"></div>
          <div class="guide-anno__text">
            <strong>2-3 хв</strong> — відпочинок між підходами
          </div>
        </div>
      </div>
    </div>

    <!-- RPE Scale -->
    <h3 class="settings-section-title">Шкала RPE</h3>

    <div class="guide-card">
      <div class="rpe-table">
        <div class="rpe-row rpe-row--header">
          <span class="rpe-cell rpe-cell--rpe">RPE</span>
          <span class="rpe-cell rpe-cell--rir">В запасі</span>
          <span class="rpe-cell rpe-cell--desc">Відчуття</span>
        </div>
        <div class="rpe-row">
          <span class="rpe-cell rpe-cell--rpe rpe-val rpe-val--easy">7</span>
          <span class="rpe-cell rpe-cell--rir">3 повт.</span>
          <span class="rpe-cell rpe-cell--desc">Комфортно, є запас</span>
        </div>
        <div class="rpe-row">
          <span class="rpe-cell rpe-cell--rpe rpe-val rpe-val--medium">8</span>
          <span class="rpe-cell rpe-cell--rir">2 повт.</span>
          <span class="rpe-cell rpe-cell--desc">Відчутно, але контрольовано</span>
        </div>
        <div class="rpe-row">
          <span class="rpe-cell rpe-cell--rpe rpe-val rpe-val--hard">9</span>
          <span class="rpe-cell rpe-cell--rir">1 повт.</span>
          <span class="rpe-cell rpe-cell--desc">Майже на межі</span>
        </div>
        <div class="rpe-row">
          <span class="rpe-cell rpe-cell--rpe rpe-val rpe-val--max">10</span>
          <span class="rpe-cell rpe-cell--rir">0</span>
          <span class="rpe-cell rpe-cell--desc">Відмова — більше не можу</span>
        </div>
      </div>
    </div>

    <!-- Week cycle -->
    <h3 class="settings-section-title">Цикл тижнів</h3>

    <div class="guide-card">
      <div class="cycle-grid">
        <div class="cycle-item">
          <div class="cycle-item__week" style="background: var(--accent-dim); color: var(--accent);">Т1</div>
          <div class="cycle-item__info">
            <div class="cycle-item__name">Адаптація</div>
            <div class="cycle-item__desc">RPE 7 · Пошук ваг, техніка</div>
          </div>
        </div>
        <div class="cycle-item">
          <div class="cycle-item__week" style="background: var(--warning-dim); color: var(--warning);">Т2</div>
          <div class="cycle-item__info">
            <div class="cycle-item__name">Навантаження</div>
            <div class="cycle-item__desc">RPE 8 · +2.5-5 кг до ваг</div>
          </div>
        </div>
        <div class="cycle-item">
          <div class="cycle-item__week" style="background: var(--danger-dim); color: var(--danger);">Т3</div>
          <div class="cycle-item__info">
            <div class="cycle-item__name">Пік</div>
            <div class="cycle-item__desc">RPE 9 · Максимальне зусилля</div>
          </div>
        </div>
        <div class="cycle-item">
          <div class="cycle-item__week" style="background: var(--success-dim); color: var(--success);">Т4</div>
          <div class="cycle-item__info">
            <div class="cycle-item__name">Розвантаження</div>
            <div class="cycle-item__desc">RPE 7 · -40% ваги, відновлення</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.settings-section-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 28px 0 12px;
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

/* === Guide Card === */
.guide-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: 12px;
}

/* === Mock Exercise === */
.guide-exercise {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-primary);
  margin-bottom: 16px;
}

.guide-exercise__checkbox {
  margin-top: 2px;
}

.guide-checkbox-mock {
  display: block;
  width: 28px;
  height: 28px;
  border: 2px solid var(--text-muted);
  border-radius: 6px;
}

.guide-exercise__body {
  flex: 1;
}

.guide-exercise__name {
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.3;
}

.guide-exercise__name-en {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 1px;
}

.guide-exercise__params {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.guide-param {
  display: inline-flex;
  align-items: center;
}

.guide-param--sets {
  font-weight: 600;
  color: var(--accent);
}

.guide-exercise__notes {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 4px;
  line-height: 1.4;
}

/* === Annotations === */
.guide-annotations {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.guide-anno {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.guide-anno__marker {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
}

.guide-anno__text {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.45;
}

.guide-anno__text strong {
  color: var(--text-primary);
}

.guide-anno__text em {
  font-style: italic;
}

/* === RPE Table === */
.rpe-table {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.rpe-row {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--bg-accent);
}

.rpe-row:last-child {
  border-bottom: none;
}

.rpe-row--header {
  padding-bottom: 6px;
}

.rpe-row--header .rpe-cell {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: var(--text-muted);
}

.rpe-cell--rpe {
  width: 44px;
  flex-shrink: 0;
  text-align: center;
}

.rpe-cell--rir {
  width: 72px;
  flex-shrink: 0;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.rpe-cell--desc {
  flex: 1;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.rpe-val {
  font-weight: 800;
  font-size: 1rem;
}

.rpe-val--easy { color: var(--success); }
.rpe-val--medium { color: var(--warning); }
.rpe-val--hard { color: #f97316; }
.rpe-val--max { color: var(--danger); }

/* === Week Cycle === */
.cycle-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cycle-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cycle-item__week {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.cycle-item__info {
  flex: 1;
}

.cycle-item__name {
  font-weight: 600;
  font-size: 0.9rem;
}

.cycle-item__desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 1px;
}
</style>
