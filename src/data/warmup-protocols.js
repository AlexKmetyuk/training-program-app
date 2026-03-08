/**
 * Розминкові протоколи для compound вправ.
 * Показуються перед робочими підходами.
 * Відсотки від робочої ваги.
 */

const barbell = [
  { pct: 0, reps: 10, note: 'пустий гриф' },
  { pct: 40, reps: 8 },
  { pct: 60, reps: 5 },
  { pct: 80, reps: 3 },
]

const barbellHeavy = [
  { pct: 0, reps: 10, note: 'пустий гриф' },
  { pct: 40, reps: 8 },
  { pct: 60, reps: 5 },
  { pct: 75, reps: 3 },
  { pct: 85, reps: 2 },
]

const dumbbell = [
  { pct: 50, reps: 8 },
  { pct: 70, reps: 5 },
]

const machine = [
  { pct: 40, reps: 10 },
  { pct: 70, reps: 5 },
]

const bodyweight = [
  { pct: 0, reps: 5, note: 'без ваги / з гумкою' },
]

/**
 * Карта розминок за nameEn.
 * Ключ — підрядок nameEn, значення — масив розминкових підходів.
 */
export const warmupByExercise = {
  // Barbell compounds
  'Barbell Back Squat': barbell,
  'Front Squat': barbell,
  'Deadlift': barbell,
  'Romanian Deadlift': barbell,
  'Barbell Bench Press': barbell,
  'Incline Barbell': barbell,

  // Dumbbell compounds
  'Dumbbell Bench': dumbbell,
  'Incline Dumbbell Press': dumbbell,
  'Seated Dumbbell Press': dumbbell,
  'Bulgarian Split Squat': dumbbell,
  'Dumbbell Lunges': dumbbell,
  'Goblet Squat': dumbbell,

  // Machine compounds
  'Leg Press': machine,
  'Hack Squat': machine,
  'Machine Chest Press': machine,

  // Cable/pulldown compounds
  'Lat Pulldown': machine,
  'Chest Supported Row': machine,
  'Seated Cable Row': machine,

  // Bodyweight
  'Chin-Up': bodyweight,
  'Pull-Up': bodyweight,

  // Glute Bridge
  'Glute Bridge': machine,
}

/**
 * Повертає масив розминкових рядків для вправи.
 */
export function getWarmupSteps(exercise) {
  if (exercise.type !== 'compound') return null

  const nameEn = exercise.nameEn || ''
  let protocol = null

  for (const [key, value] of Object.entries(warmupByExercise)) {
    if (nameEn.includes(key)) {
      protocol = value
      break
    }
  }

  if (!protocol) return null

  return protocol.map(step => {
    if (step.note) {
      return `${step.note} \u00d7 ${step.reps}`
    }
    return `${step.pct}% \u00d7 ${step.reps}`
  })
}

/**
 * Повертає розминки для всіх compound вправ у тренуванні.
 * Формат: [{ name, steps }]
 */
export function getWorkoutWarmups(exercises) {
  if (!exercises) return []

  const result = []
  for (const ex of exercises) {
    const steps = getWarmupSteps(ex)
    if (steps && steps.length > 0) {
      result.push({ name: ex.name, steps })
    }
  }
  return result
}

/**
 * Спеціальні розминки для важких тижнів (RPE 9, тестові тижні).
 * Додатковий підхід на 85% для підготовки до важкої ваги.
 */
export function getHeavyWarmup(exercise) {
  const nameEn = exercise.nameEn || ''
  if (['Barbell Back Squat', 'Deadlift', 'Romanian Deadlift', 'Barbell Bench Press', 'Front Squat'].some(n => nameEn.includes(n))) {
    return barbellHeavy
  }
  return null
}
