import month01 from './months/month-01.js'
import month02 from './months/month-02.js'
import month03 from './months/month-03.js'
import month04 from './months/month-04.js'
import month05 from './months/month-05.js'
import month06 from './months/month-06.js'
import month07 from './months/month-07.js'
import month08 from './months/month-08.js'
import month09 from './months/month-09.js'
import month10 from './months/month-10.js'
import month11 from './months/month-11.js'
import month12 from './months/month-12.js'

// Legacy export — kept temporarily for migration
export const program = [
  month01, month02, month03, month04, month05, month06,
  month07, month08, month09, month10, month11, month12,
]

// Phases definition
export const phases = [
  {
    id: 1, name: "Фундамент", fullName: "Full Body 3x — Фундамент", color: "#6c8cff", weeks: [1, 12],
    description: "Базові рухи Full Body 3 рази на тиждень. 3×8-12 повторень. Фокус на техніці та поступовій прогресії ваг через ротацію вправ. Тест 3RM в кінці фази."
  },
  {
    id: 2, name: "DUP", fullName: "DUP — Undulating Periodization", color: "#f5a623", weeks: [13, 24],
    description: "Хвилеподібна періодизація: Пн — сила (4×4-6), Ср — гіпертрофія (3×8-12), Пт — витривалість (3×12-15). Різні стимули кожен день для максимальної адаптації. Тест 3RM в кінці фази."
  },
  {
    id: 3, name: "Спеціалізація", fullName: "Specialization", color: "#e74c3c", weeks: [25, 36],
    description: "Важкі compounds (3×4-6) + помірні (3×8-12). Додатковий об'єм для литок. Підготовка до пікових фаз. Тест 2RM в кінці фази."
  },
  {
    id: 4, name: "Піковий блок", fullName: "Accumulation → Transmutation → Realization", color: "#2ecc71", weeks: [37, 48],
    description: "Три блоки: Accumulation (4×10-12, метаболічний стрес), Transmutation (4×6-8, важкі ваги), Realization (5×3-5, пік сили). Фінальний тест 1RM."
  },
]

// Flat array of 48 weeks with global IDs
export const weeks = program.flatMap((month, monthIndex) =>
  month.weeks.map((week, weekIndex) => ({
    id: monthIndex * 4 + weekIndex + 1,     // global ID 1-48
    phase: month.phase,
    phaseName: month.phaseName,
    phaseColor: month.phaseColor,
    phaseDescription: month.description,
    monthName: month.name,
    name: week.name,
    rpeTarget: week.rpeTarget,
    note: week.note,
    workouts: week.workouts,
  }))
)

export function getWeek(id) {
  return weeks[id - 1]
}

export function getPhaseWeeks(phaseId) {
  return weeks.filter(w => w.phase === phaseId)
}
