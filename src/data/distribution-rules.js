/**
 * ПРАВИЛА РОЗПОДІЛУ ВПРАВ
 * 144 тренування = 12 місяців × 4 тижні × 3 дні.
 * Вправи ТІЛЬКИ з exercises.js (39 затверджених).
 * Full Body × 3. Кожен м'яз 2-3x/тиждень.
 * Core 2x/тиждень (Пн + Пт). Середа без core.
 */

// ============================================
// 1. ФАЗИ
// ============================================
export const phases = {
  foundation: {
    months: [1, 2, 3],
    name: "Foundation",
    compound: { reps: "8-12", sets: 3, rest: 120 },
    isolation: { reps: "8-12", sets: 3, rest: 60 },
    exerciseCount: { mon: 8, wed: 6, fri: 7 },
    extras: {
      monday: { slot: 7, exercise: ["tricep-pushdown", "cable-french-press"], coreMovesTo: 8 }
    }
  },
  dup: {
    months: [4, 5, 6],
    name: "DUP",
    monday: {
      type: "strength",
      compound: { reps: "4-6", sets: 4, rest: 180 },
      isolation: { reps: "8-12", sets: 3, rest: 60 }
    },
    wednesday: {
      type: "hypertrophy",
      compound: { reps: "8-12", sets: 3, rest: 120 },
      isolation: { reps: "8-12", sets: 3, rest: 60 }
    },
    friday: {
      type: "endurance",
      all: { reps: "12-15", sets: 3, rest: 60 },
      preferLighter: ["machine-press", "pec-deck", "goblet-squat", "lat-pulldown-wide", "lat-pulldown-narrow"]
    },
    exerciseCount: { mon: 8, wed: 6, fri: 7 },
    extras: {
      monday: { slot: 7, exercise: ["tricep-pushdown", "cable-french-press"], coreMovesTo: 8 }
    }
  },
  specialization: {
    months: [7, 8, 9],
    name: "Specialization",
    monday: {
      slots1to3: { reps: "4-6", sets: 3, rest: 150 },
      otherSlots: { compound: { reps: "8-12", sets: 3, rest: 120 }, isolation: { reps: "8-12", sets: 3, rest: 60 } }
    },
    wednesday: {
      slot1: { reps: "4-6", sets: 3, rest: 150 },
      otherSlots: { compound: { reps: "8-12", sets: 3, rest: 120 }, isolation: { reps: "8-12", sets: 3, rest: 60 } }
    },
    friday: {
      allSlots: { compound: { reps: "8-12", sets: 3, rest: 120 }, isolation: { reps: "8-12", sets: 3, rest: 60 } }
    },
    exerciseCount: { mon: 8, wed: 7, fri: 7 },
    extras: {
      monday: { slot: 7, exercise: ["tricep-pushdown", "cable-french-press"], coreMovesTo: 8 },
      wednesday: { slot: 7, exercise: ["calf-raise"] }
    }
  },
  accumulation: {
    months: [10],
    name: "Accumulation",
    allExercises: { reps: "10-12", sets: 4, rest: 60 },
    exerciseCount: { mon: 8, wed: 7, fri: 7 },
    extras: {
      monday: { slot: 7, exercise: ["tricep-pushdown", "cable-french-press"], coreMovesTo: 8 },
      wednesday: { slot: 7, exercise: ["calf-raise"] }
    }
  },
  transmutation: {
    months: [11],
    name: "Transmutation",
    allExercises: { compound: { reps: "6-8", sets: 4, rest: 120 }, isolation: { reps: "6-8", sets: 4, rest: 60 } },
    exerciseCount: { mon: 7, wed: 6, fri: 7 }
  },
  realization: {
    months: [12],
    name: "Realization",
    slot1: { reps: "3-5", sets: 5, rest: 180 },
    otherSlots: { compound: { reps: "8-10", sets: 3, rest: 120 }, isolation: { reps: "8-10", sets: 3, rest: 60 } },
    exerciseCount: { mon: 5, wed: 4, fri: 6 },
    noCore: true,
    removedSlots: {
      monday: ["leg-curl"],
      wednesday: ["leg-extension", "curl"]
    },
    keptIsolation: ["lateral-raise", "calf-raise", "face-pull"]
  }
};

// ============================================
// 2. RPE ЦИКЛ
// ============================================
export const rpeCycle = {
  week1: { rpe: 7, label: "Легкий" },
  week2: { rpe: 8, label: "Середній" },
  week3: { rpe: 9, label: "Важкий" },
  week4: { rpe: 7, label: "Deload" },
  exception: "M12 W3 = тест 1RM, RPE цикл не застосовується."
};

// ============================================
// 3. CORE РОТАЦІЯ (Пн + Пт)
// ============================================
export const coreRotation = {
  week1: "hanging-leg-raise",
  week2: "crunches",
  week3: "plank",
  week4: null,
  days: ["monday", "friday"],
  rule: "Та сама вправа обидва дні. Завжди остання вправа."
};

// ============================================
// 4. ОБМЕЖЕННЯ
// ============================================
export const restrictions = [
  { id: "no-deadlift-squat-same-day", rule: "Deadlift НЕ з squat/front-squat/rdl в один день." },
  { id: "no-spinal-overload", rule: "Макс 1 важка вправа на поперек. Hyperextension без ваги — не важка." },
  { id: "no-consecutive-repeat", rule: "Та сама compound НЕ в сусідніх днях. Lateral-raise і calf-raise — виняток." },
  { id: "compound-first", rule: "Compound першими, ізоляція після, core останньою." },
  { id: "friday-order", rule: "Пт: legs → push → vertical pull → horizontal pull." },
  { id: "shoulder-press-wed-only", rule: "Shoulder press тільки Ср slot 3. Пт slot 1 = тільки chest жими." },
  { id: "dup-isolation-min-8-rep", rule: "Ізоляція не нижче 8 rep (8-15 залежно від дня). DUP strength: ізоляція 8-12. DUP endurance: ізоляція 12-15." }
];

// ============================================
// 5. РОЗПОДІЛ ПО ДНЯХ (базова структура)
// ============================================
export const dailySplit = {
  monday: {
    label: "Full Body A",
    structure: [
      { slot: 1, type: "compound", role: "legs (quads)", examples: ["squat", "front-squat", "bulgarian-split-squat"] },
      { slot: 2, type: "compound", role: "push (chest)", examples: ["bench-press", "dumbbell-bench", "incline-bench", "incline-dumbbell"] },
      { slot: 3, type: "compound", role: "pull (horizontal)", examples: ["chest-supported-row", "seated-row-narrow", "seated-row-wide"] },
      { slot: 4, type: "isolation", role: "hamstrings", examples: ["leg-curl", "hyperextension"] },
      { slot: 5, type: "isolation", role: "mid_delt", examples: ["lateral-raise"], fixed: true },
      { slot: 6, type: "isolation", role: "calves", examples: ["calf-raise"], fixed: true },
      { slot: 7, type: "core", role: "core" }
    ]
  },
  wednesday: {
    label: "Full Body B",
    neverHasCore: true,
    structure: [
      { slot: 1, type: "compound", role: "legs (posterior)", examples: ["rdl", "deadlift", "glute-bridge"] },
      { slot: 2, type: "compound", role: "pull (vertical)", examples: ["lat-pulldown-wide", "lat-pulldown-narrow", "chin-up", "pull-up"] },
      { slot: 3, type: "compound", role: "push (shoulders)", examples: ["seated-dumbbell-press"] },
      { slot: 4, type: "isolation", role: "quads", examples: ["leg-extension"], fixed: true },
      { slot: 5, type: "isolation", role: "rear_delt", examples: ["face-pull", "reverse-fly-machine"], fixed: true },
      { slot: 6, type: "isolation", role: "biceps", examples: ["ez-curl", "incline-curl", "dumbbell-curl", "hammer-curl"], fixed: true }
    ]
  },
  friday: {
    label: "Full Body C",
    structure: [
      { slot: 1, type: "compound", role: "legs (quads)", examples: ["leg-press", "hack-squat", "lunges", "goblet-squat"] },
      { slot: 2, type: "compound", role: "push (chest variant)", examples: ["incline-bench", "incline-dumbbell", "dumbbell-bench", "machine-press"], enduranceAlternative: "pec-deck" },
      { slot: 3, type: "compound", role: "pull (vertical)", examples: ["lat-pulldown-wide", "lat-pulldown-narrow", "chin-up", "pull-up"] },
      { slot: 4, type: "compound", role: "pull (horizontal)", examples: ["chest-supported-row", "seated-row-narrow", "seated-row-wide"] },
      { slot: 5, type: "isolation", role: "mid_delt", examples: ["lateral-raise"], fixed: true },
      { slot: 6, type: "isolation", role: "calves", examples: ["calf-raise"], fixed: true },
      { slot: 7, type: "core", role: "core" }
    ]
  },
  sunday: { label: "Басейн", type: "pool" }
};

// ============================================
// 6. DELOAD (W4 кожного місяця)
// ============================================
export const deload = {
  allDays: { sets: 2, rpe: 7 },
  monday: {
    base: { exercises: 5, kept: [1, 2, 3, 5, 6], removed: [4, 7, 8], note: "Tricep + hamstrings + core прибираються." }
  },
  wednesday: {
    base: { exercises: 4, kept: [1, 2, 3, 5], removed: [4, 6] },
    withExtra: { exercises: 4, note: "Calf (M7-M10) теж прибирається." }
  },
  friday: {
    base: { exercises: 5, kept: [1, 2, 3, 4, 5], removed: [6, 7] }
  }
};

// ============================================
// 7. ТИЖНЕВИЙ ОБ'ЄМ (base = 3 sets/вправа)
// ============================================
export const weeklyVolume = {
  quads:      { base: 9, source: "squat(3) + leg-ext(3) + leg-press(3)" },
  hamstrings: { base: 6, source: "leg-curl(3) + rdl(3)" },
  glutes:     { base: "~6", source: "squat(~1.5) + rdl(3) + leg-press(~1.5)" },
  chest:      { base: 6, source: "bench(3) + incline(3)" },
  lats:       { base: 6, source: "pulldown Ср(3) + pulldown Пт(3)" },
  mid_back:   { base: 6, source: "row Пн(3) + row Пт(3)" },
  front_delt: { base: "~6", source: "bench(~1.5) + shoulder-press(3) + incline(~1.5)" },
  mid_delt:   { base: 7.5, source: "lateral Пн(3) + shoulder-press(~1.5) + lateral Пт(3)" },
  rear_delt:  { base: 6, source: "face-pull(3) + rows(~1.5+~1.5)" },
  biceps:     { base: 6, source: "curl(3) + pulldowns(~1.5+~1.5)" },
  triceps:    { base: "7.5", source: "жими(~1.5×3) + tricep(3) з M1" },
  calves:     { base: "6 / 9 (M7-M10)", source: "calf Пн(3)+Пт(3). M7-M10: +Ср(3)" },
  core:       { base: 6, source: "Пн(3) + Пт(3). W4/M12: 0" }
};

// ============================================
// 8. ПРОГРЕСІЯ ВПРАВ
// ============================================
export const exerciseProgression = {
  note: "Усі 39 вправ доступні з M1. Програма для атлета з досвідом.",
  verticalPull: "Чергувати lat-pulldown (wide/narrow), chin-up, pull-up по місяцях для різних стимулів.",
  squats: "Чергувати squat, front-squat, bulgarian-split-squat (Пн). Leg-press, hack-squat, lunges, goblet-squat (Пт).",
  deadlift: "Чергувати rdl та deadlift (Ср slot 2). Одне з двох на місяць, не обидва.",
  chestPress: "Чергувати barbell, dumbbell, machine, pec-deck. Pec-deck — для endurance/легких днів.",
  rows: "Чергувати narrow/wide хват та chest-supported-row по місяцях.",
  hyperextension: "Замінює leg-curl (Пн slot 4) в окремі місяці."
};

// ============================================
// 9. ВАРІАТИВНІСТЬ
// ============================================
export const variety = {
  rule: "Кожен місяць — нова комбінація compound. Не повторювати набір з попереднього місяця.",
  gripVariation: "Wide ↔ narrow для pulldown та row по місяцях.",
  curlRotation: "ez-curl → incline-curl → dumbbell-curl → hammer-curl → повтор.",
  rearDeltRotation: "face-pull ↔ reverse-fly-machine по місяцях.",
  examples: {
    M1: {
      mon: ["squat", "bench-press", "chest-supported-row", "leg-curl", "lateral-raise", "calf-raise", "core"],
      wed: ["deadlift", "chin-up", "seated-dumbbell-press", "leg-extension", "face-pull", "ez-curl"],
      fri: ["leg-press", "incline-dumbbell", "lat-pulldown-wide", "seated-row-wide", "lateral-raise", "calf-raise", "core"]
    },
    M4: {
      mon: ["front-squat", "dumbbell-bench", "seated-row-narrow", "hyperextension", "lateral-raise", "calf-raise", "core"],
      wed: ["rdl", "pull-up", "seated-dumbbell-press", "leg-extension", "reverse-fly-machine", "hammer-curl"],
      fri: ["goblet-squat", "machine-press", "lat-pulldown-narrow", "chest-supported-row", "lateral-raise", "calf-raise", "core"]
    }
  }
};

// ============================================
// 10. M12 W3 — ТЕСТОВИЙ ТИЖДЕНЬ
// ============================================
export const testingWeeks = {
  description: "Тест кожні 3 місяці. RPE цикл не застосовується в тестовий тиждень.",
  schedule: [
    { month: 3, week: 3, format: "3RM", note: "Estimated 1RM через формулу Epley. Кінець Foundation." },
    { month: 6, week: 3, format: "3RM", note: "Порівняти з M3. Кінець DUP." },
    { month: 9, week: 3, format: "2RM", note: "Ближче до реального 1RM. Кінець Specialization." },
    { month: 12, week: 3, format: "1RM", note: "Справжній 1RM. Кінець Realization." }
  ],
  days: {
    monday: { test: "squat", accessories: ["leg-press 2×8", "lateral-raise 2×12", "calf-raise 2×15"] },
    wednesday: { test: "deadlift", accessories: ["lat-pulldown 2×10", "face-pull 2×15"] },
    friday: { test: "bench-press", accessories: ["row 2×10", "lateral-raise 2×12", "calf-raise 2×15"] }
  }
};

export default { phases, rpeCycle, coreRotation, restrictions, dailySplit, deload, weeklyVolume, exerciseProgression, variety, testingWeeks };
