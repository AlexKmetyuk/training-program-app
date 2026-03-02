export default {
  id: 9,
  name: "Листопад",
  phase: 3,
  phaseName: "Full Body 3x — Спеціалізація Пік",
  phaseColor: "#10b981",
  description: "Спеціалізація пік. Просунуті техніки: дропсети, темпо, паузи. ~14-16 сетів/м'яз/тиждень.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Піковий місяць Спеціалізації: дропсети, темпо, паузи. Освоюй техніки з помірними вагами, RPE 7.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повна амплітуда, контрольований темп",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Контрольоване опускання",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Останній сет — дропсет: знизити вагу на 20-30% і виконати до відмови",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Широкий хват, відчувати широчайші",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Без розгойдування корпусу",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс в тренажері (spider curl)",
              nameEn: "Spider Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Пікове скорочення у верхній точці",
              supersetWith: null
            },
            {
              id: 8,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "12-15",
              rpe: "7",
              rest: "1 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body + Груди/Плечі",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Відчувати розтяжку задньої поверхні стегна",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Темпо 3-1-1-0: 3сек опускання, 1сек пауза, 1сек підйом, без паузи вгорі",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Контрольований рух",
              supersetWith: null
            },
            {
              id: 4,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Останній сет — дропсет: знизити вагу на 30% і виконати до відмови",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Up",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повна амплітуда",
              supersetWith: null
            },
            {
              id: 7,
              name: "Зворотні розведення в тренажері",
              nameEn: "Reverse Machine Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Задні дельти, контрольований рух",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1 хв",
              notes: "Повне розгинання в нижній точці. Контролюй негативну фазу.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body + Ноги",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Пауза 2 секунди внизу, контроль позиції",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повна амплітуда, не замикати коліна",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус на задню поверхню стегна",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Дропсет: знизити вагу на 30% і виконати до відмови",
              supersetWith: null
            },
            {
              id: 5,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Підтримка тонусу грудних",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Зводити лопатки в кінцевій точці",
              supersetWith: null
            }
          ]
        },
        {
          id: 4,
          day: "Неділя",
          type: "pool",
          note: "30-45 хв плавання / аквааеробіка, легке кардіо"
        }
      ]
    },
    {
      id: 2,
      name: "Навантаження",
      rpeTarget: "8",
      note: "Додай вагу або повторення до просунутих технік. Дропсети стають агресивнішими. RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу порівняно з тижнем 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Контрольоване опускання, прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Останній сет — дропсет: знизити вагу на 20-30% і виконати до відмови",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Широкий хват, збільшити вагу",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Без розгойдування, прогресія ваги",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс в тренажері (spider curl)",
              nameEn: "Spider Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Пікове скорочення у верхній точці",
              supersetWith: null
            },
            {
              id: 8,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "12-15",
              rpe: "8",
              rest: "1 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body + Груди/Плечі",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Прогресія ваги, відчувати розтяжку",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Темпо 3-1-1-0: 3сек опускання, 1сек пауза, 1сек підйом",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Останній сет — дропсет",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Up",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Повна амплітуда, прогресія",
              supersetWith: null
            },
            {
              id: 7,
              name: "Зворотні розведення в тренажері",
              nameEn: "Reverse Machine Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Задні дельти",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1 хв",
              notes: "Повне розгинання в нижній точці. Контролюй негативну фазу.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body + Ноги",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Пауза 2 секунди внизу, збільшити вагу",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "12",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Дропсет на останньому сеті",
              supersetWith: null
            },
            {
              id: 5,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Зводити лопатки, збільшити вагу",
              supersetWith: null
            }
          ]
        },
        {
          id: 4,
          day: "Неділя",
          type: "pool",
          note: "30-45 хв плавання / аквааеробіка, легке кардіо"
        }
      ]
    },
    {
      id: 3,
      name: "Пік",
      rpeTarget: "9",
      note: "Фінальний пік Спеціалізації! RPE 9, агресивні дропсети та темпо. Кульмінація 3-місячної фокусної роботи.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна вага на цей діапазон повторень",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Біля межі, тримати техніку",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Останній сет — подвійний дропсет",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага з правильною технікою",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальне навантаження на біцепс",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс в тренажері (spider curl)",
              nameEn: "Spider Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Дропсет на останньому сеті",
              supersetWith: null
            },
            {
              id: 8,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "12-15",
              rpe: "9",
              rest: "1 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body + Груди/Плечі",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна вага з правильною технікою",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Темпо 3-1-1-0, максимальна вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Пікове навантаження",
              supersetWith: null
            },
            {
              id: 4,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Подвійний дропсет на останньому сеті",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Up",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Додати вагу якщо можливо",
              supersetWith: null
            },
            {
              id: 7,
              name: "Зворотні розведення в тренажері",
              nameEn: "Reverse Machine Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальна вага, дропсет",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1 хв",
              notes: "Повне розгинання в нижній точці. Контролюй негативну фазу.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body + Ноги",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Пауза 2 секунди внизу, максимальна вага",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "12",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна вага з правильною технікою",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Подвійний дропсет",
              supersetWith: null
            },
            {
              id: 5,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальне навантаження",
              supersetWith: null
            }
          ]
        },
        {
          id: 4,
          day: "Неділя",
          type: "pool",
          note: "30-45 хв плавання / аквааеробіка, легке кардіо"
        }
      ]
    },
    {
      id: 4,
      name: "Розвантаження",
      rpeTarget: "7",
      note: "Розвантаження перед Блоковою періодизацією. -40% ваги, активне відновлення. Далі — силовий блок!",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, ідеальна техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, фокус на техніку",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Без дропсетів, легка вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легке навантаження",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс в тренажері (spider curl)",
              nameEn: "Spider Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага, фокус на скорочення",
              supersetWith: null
            },
            {
              id: 8,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "12-15",
              rpe: "7",
              rest: "1 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body + Груди/Плечі",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, темпо без напруги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Без дропсетів, легко",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Up",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Без додаткової ваги",
              supersetWith: null
            },
            {
              id: 7,
              name: "Зворотні розведення в тренажері",
              nameEn: "Reverse Machine Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1 хв",
              notes: "Повне розгинання в нижній точці. Контролюй негативну фазу.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body + Ноги",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Легка вага, пауза внизу, ідеальна техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, розтяжка",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, без дропсетів",
              supersetWith: null
            },
            {
              id: 5,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            }
          ]
        },
        {
          id: 4,
          day: "Неділя",
          type: "pool",
          note: "30-45 хв плавання / аквааеробіка, легке кардіо"
        }
      ]
    }
  ]
};
