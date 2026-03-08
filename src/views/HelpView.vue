<script setup>
import { ref } from 'vue'
import { glossary } from '../data/glossary.js'

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
  <div>
    <h2 class="help-title">Допомога</h2>

    <!-- How to read exercise card -->
    <h3 class="help-section-title">Як читати картку вправи</h3>

    <div class="help-card">
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

      <div class="guide-annotations">
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--success);"></div>
          <div class="guide-anno__text"><strong>Чекбокс</strong> — відмітити вправу як виконану</div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--warning);"></div>
          <div class="guide-anno__text"><strong>legs / push / pull / core</strong> — категорія м'язової групи</div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--accent);"></div>
          <div class="guide-anno__text"><strong>3 &times; 12</strong> — 3 підходи по 12 повторень</div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--danger);"></div>
          <div class="guide-anno__text"><strong>RPE 8</strong> — зусилля для <em>останнього</em> підходу. RPE 8 = ще 2 повторення в запасі. Перші підходи будуть легшими з тією ж вагою</div>
        </div>
        <div class="guide-anno">
          <div class="guide-anno__marker" style="background: var(--pool-color);"></div>
          <div class="guide-anno__text"><strong>2-3 хв</strong> — відпочинок між підходами</div>
        </div>
      </div>
    </div>

    <!-- RPE Scale -->
    <h3 class="help-section-title">Шкала RPE</h3>

    <div class="help-card">
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
    <h3 class="help-section-title">Цикл тижнів</h3>

    <div class="help-card">
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

    <!-- Weight progression -->
    <h3 class="help-section-title">Прогресія ваги</h3>

    <div class="help-card">
      <p class="help-text">Кожен місяць — 4 тижні. Підбирай вагу під цільовий RPE:</p>
      <div class="help-list">
        <div class="help-list__item"><strong>Т1 (RPE 7):</strong> Підбери вагу, з якою залишається 3 повторення в запасі. Запиши ваги.</div>
        <div class="help-list__item"><strong>Т2 (RPE 8):</strong> Підбери вагу під RPE 8 (2 в запасі). Зазвичай +1-2.5 кг штанга.</div>
        <div class="help-list__item"><strong>Т3 (RPE 9):</strong> Підбери вагу під RPE 9 (1 в запасі). Пік циклу — запиши ваги!</div>
        <div class="help-list__item"><strong>Т4 (Deload):</strong> ~40% від ваги Т3. Легко, відновлення.</div>
      </div>
      <p class="help-text" style="margin-top: 8px;"><strong>Скільки додавати?</strong> Залежить від вправи: штанга зазвичай +2.5 кг, гантелі +1-2 кг, тренажери/ізоляція +1-2.5 кг. Головне — щоб останній підхід відповідав цільовому RPE.</p>
      <p class="help-text" style="margin-top: 4px;">Якщо на Т3 фактичний RPE менший за 9 — наступний місяць почни Т1 з вищої ваги.</p>
    </div>

    <!-- Superset hints -->
    <h3 class="help-section-title">Суперсети</h3>

    <div class="help-card">
      <p class="help-text">Деякі вправи позначені як <strong>можна в суперсеті</strong>. Це означає, що їх можна виконувати по черзі без відпочинку між ними — один підхід першої, потім одразу підхід другої, потім відпочинок.</p>
      <p class="help-text" style="margin-top: 8px;">Суперсет <strong>не обов'язковий</strong> — це лише підказка для економії часу (10-15 хвилин). Пари підібрані так, щоб м'язи не перетиналися:</p>
      <div class="help-list">
        <div class="help-list__item"><strong>Пн/Пт:</strong> Махи в сторони + Підйом на носки (дельти + литки)</div>
        <div class="help-list__item"><strong>Ср:</strong> Розгинання ніг + Тяга до обличчя (квадри + задні дельти)</div>
        <div class="help-list__item"><strong>Ср:</strong> Тяга до обличчя + Згинання на біцепс (задні дельти + біцепс)</div>
      </div>
    </div>

    <!-- Warmup protocols -->
    <h3 class="help-section-title">Розминкові підходи</h3>

    <div class="help-card">
      <p class="help-text">Перед робочими підходами compound вправ потрібно розім'ятися. Натисни на блок розминки в тренуванні, щоб побачити розминкові підходи для кожної вправи.</p>
      <p class="help-text" style="margin-top: 8px;"><strong>Відсотки — від робочої ваги.</strong> Наприклад, якщо присід сьогодні 80 кг:</p>
      <div class="help-list">
        <div class="help-list__item">Пустий гриф (20 кг) &times; 10</div>
        <div class="help-list__item">40% = 32 кг &rarr; 30 кг &times; 8</div>
        <div class="help-list__item">60% = 48 кг &rarr; 50 кг &times; 5</div>
        <div class="help-list__item">80% = 64 кг &rarr; 65 кг &times; 3</div>
        <div class="help-list__item"><strong>Робочі = 80 кг &times; 8</strong></div>
      </div>
      <p class="help-text" style="margin-top: 8px;">Округлюй до найближчих блінів. Ізоляційні вправи не потребують розминки — м'язи вже розігріті після compound.</p>
    </div>

    <!-- Test history -->
    <h3 class="help-section-title">Історія тестів</h3>

    <div class="help-card">
      <p class="help-text">Тести проводяться кожні 3 місяці (тиждень 3 циклу) на трьох основних вправах:</p>
      <div class="help-list">
        <div class="help-list__item"><strong>Пн:</strong> Присід</div>
        <div class="help-list__item"><strong>Ср:</strong> Станова тяга</div>
        <div class="help-list__item"><strong>Пт:</strong> Жим лежачи</div>
      </div>
      <p class="help-text" style="margin-top: 8px;">Формат тесту змінюється з часом для більшої точності:</p>
      <div class="help-list">
        <div class="help-list__item"><strong>M3, M6:</strong> 3RM — оцінка через формулу Epley</div>
        <div class="help-list__item"><strong>M9:</strong> 2RM — ближче до реального максимуму</div>
        <div class="help-list__item"><strong>M12:</strong> 1RM — справжній максимум</div>
      </div>
      <p class="help-text" style="margin-top: 8px;">Результати записуються на сторінці <strong>Історія тестів</strong> (доступна з головної або бокової панелі).</p>
    </div>

    <!-- Glossary -->
    <h3 class="help-section-title">Глосарій</h3>

    <div class="help-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input
        v-model="search"
        type="text"
        placeholder="Пошук термінів..."
        class="help-search__input"
      />
    </div>

    <div v-for="cat in filtered()" :key="cat.category" class="glossary-section">
      <div class="glossary-section__title">{{ cat.category }}</div>
      <div v-for="t in cat.terms" :key="t.term" class="glossary-item">
        <div class="glossary-item__name">
          {{ t.term }}
          <span v-if="t.full" class="glossary-item__full">{{ t.full }}</span>
        </div>
        <div class="glossary-item__desc">{{ t.description }}</div>
      </div>
    </div>
    <div v-if="filtered().length === 0" style="text-align: center; color: var(--text-muted); padding: 32px 0;">
      Нічого не знайдено
    </div>
  </div>
</template>

<style scoped>
.help-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.help-section-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 28px 0 12px;
}

/* === Help Card === */
.help-card {
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

/* === Help Text & Lists === */
.help-text {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.help-text strong {
  color: var(--text-primary);
}

.help-list {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.help-list__item {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.5;
  padding-left: 12px;
  position: relative;
}

.help-list__item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--text-muted);
}

.help-list__item strong {
  color: var(--text-primary);
}

/* === Search === */
.help-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: var(--radius);
  background: var(--bg-card);
  color: var(--text-muted);
  margin-bottom: 16px;
}

.help-search__input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.help-search__input::placeholder {
  color: var(--text-muted);
}

/* === Glossary Inline === */
.glossary-section {
  margin-bottom: 20px;
}

.glossary-section__title {
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.glossary-item {
  margin-bottom: 8px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
}

.glossary-item__name {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.glossary-item__full {
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-left: 6px;
}

.glossary-item__desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.45;
}
</style>
