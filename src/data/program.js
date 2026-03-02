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
    description: "Базові рухи Full Body 3 рази на тиждень. 3×8-12 повторень, ~10 сетів/м'яз/тиждень. Фокус на техніці, побудові звички та поступовій прогресії ваг через ротацію вправ."
  },
  {
    id: 2, name: "DUP", fullName: "DUP — Undulating Periodization", color: "#f5a623", weeks: [13, 24],
    description: "Хвилеподібна періодизація: Пн — сила (4×3-5), Ср — гіпертрофія (3×8-12), Пт — метаболічний (3×15-20). ~12-14 сетів/м'яз/тиждень. Різні стимули кожен день для максимальної адаптації."
  },
  {
    id: 3, name: "Спеціалізація", fullName: "Спеціалізація", color: "#e74c3c", weeks: [25, 36],
    description: "Full Body + фокус-група з додатковим об'ємом щодня. ~14-16 сетів/м'яз/тиждень. Просунуті техніки: дропсети, темпо-повторення, паузи. Цільова робота над слабкими місцями."
  },
  {
    id: 4, name: "Блокова періодизація", fullName: "Блокова періодизація", color: "#2ecc71", weeks: [37, 48],
    description: "Три 4-тижневі блоки: силовий (3-6 повторень), гіпертрофійний (8-12, макс. об'єм) та піковий з ретестом 3RM. Порівняй результати з початком програми!"
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
