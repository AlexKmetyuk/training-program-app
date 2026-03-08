/**
 * Пари вправ, які МОЖНА виконувати в суперсеті.
 * Суперсет — не обов'язковий. Лише підказка для економії часу.
 * Правило: обидві ізоляції, різні м'язові групи, сусідні слоти.
 */
export const supersetPairs = [
  {
    a: ['Lateral Raise'],
    b: ['Standing Calf Raise'],
    label: 'Дельти + Литки',
  },
  {
    a: ['Leg Extension'],
    b: ['Face Pull', 'Reverse Pec Deck'],
    label: 'Квадри + Задні дельти',
  },
  {
    a: ['Face Pull', 'Reverse Pec Deck'],
    b: ['EZ-Bar Bicep Curl', 'Incline Dumbbell Curl', 'Dumbbell Bicep Curl', 'Hammer Curl'],
    label: 'Задні дельти + Біцепс',
  },
]

/**
 * Знаходить суперсет-пари серед списку вправ тренування.
 * Повертає Map<exerciseId, { partnerId, label }>
 */
export function findSupersetPairs(exercises) {
  const hints = new Map()

  for (let i = 0; i < exercises.length - 1; i++) {
    const exA = exercises[i]
    const exB = exercises[i + 1]

    // Обидві мають бути ізоляцією
    if (exA.type !== 'isolation' || exB.type !== 'isolation') continue

    for (const pair of supersetPairs) {
      const aMatch = pair.a.some(name => exA.nameEn?.includes(name))
      const bMatch = pair.b.some(name => exB.nameEn?.includes(name))

      if (aMatch && bMatch) {
        hints.set(exA.id, { partnerId: exB.id, partnerName: exB.name, label: pair.label })
        hints.set(exB.id, { partnerId: exA.id, partnerName: exA.name, label: pair.label })
        break
      }

      // Перевірити зворотний порядок
      const aMatchRev = pair.b.some(name => exA.nameEn?.includes(name))
      const bMatchRev = pair.a.some(name => exB.nameEn?.includes(name))

      if (aMatchRev && bMatchRev) {
        hints.set(exA.id, { partnerId: exB.id, partnerName: exB.name, label: pair.label })
        hints.set(exB.id, { partnerId: exA.id, partnerName: exA.name, label: pair.label })
        break
      }
    }
  }

  return hints
}
