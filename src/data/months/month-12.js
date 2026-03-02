export default {
  id: 12,
  name: "Лютий",
  phase: 4,
  phaseName: "Full Body 3x — Піковий блок",
  phaseColor: "#ef4444",
  description: "Піковий блок + ретест. Порівняй результати з Місяцем 1! Тижні 1-2: змішане важке/помірне, Тиждень 3: тестовий (3RM), Тиждень 4: розвантаження/святкування.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Піковий блок: змішане важке/помірне тренування. Тіло готується до фінального тесту, RPE 7-8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Помірна вага, підготовка до тесту",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Помірна вага, фокус на техніці",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Контрольований рух",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Стабілізація кора",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Помірна додаткова вага",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Помірна вага, техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Контрольований рух",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Зводити лопатки",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "З гантелями",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення гантелей стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Контрольований рух",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс",
              nameEn: "Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Штанга або гантелі",
              supersetWith: null
            },
            {
              id: 7,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body C",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повна амплітуда",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Контрольований темп",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повна амплітуда",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "З власною вагою або додатковою",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Кожною рукою окремо",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
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
      note: "Останній важкий тиждень програми. Підвищ ваги, але збережи запас — через тиждень тест!",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу, підготовка до 3RM тесту",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Прогресія ваги до тесту",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "6",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити додаткову вагу",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення гантелей стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс",
              nameEn: "Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 7,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "10-12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body C",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "6",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 4,
              reps: "6",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу якщо можливо",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
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
      note: "ТЕСТ 3RM! Розминка → поступове підвищення → максимум на 3 повторення. Порівняй з тижнем 1 — покажи прогрес за 48 тижнів!",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A — Тест 3RM",
          duration: "60-70 хв",
          warmup: "15 хв ретельна розминка: кардіо + динамічна розтяжка + поступове збільшення ваги до робочої",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою — розминка до 3RM",
              nameEn: "Barbell Squat — Warm up to 3RM",
              category: "legs",
              sets: 1,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Розминка: пустий гриф → 50% → 70% → 85% → 95% → 3RM. Запиши результат!",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи — розминка до 3RM",
              nameEn: "Barbell Bench Press — Warm up to 3RM",
              category: "push",
              sets: 1,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Розминка: пустий гриф → 50% → 70% → 85% → 95% → 3RM. Запиши результат!",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Допоміжна робота після тестів",
              supersetWith: null
            },
            {
              id: 4,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Допоміжна робота",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B — Тест 3RM",
          duration: "60-70 хв",
          warmup: "15 хв ретельна розминка: кардіо + динамічна розтяжка + поступове збільшення ваги до робочої",
          exercises: [
            {
              id: 1,
              name: "Станова тяга — розминка до 3RM",
              nameEn: "Deadlift — Warm up to 3RM",
              category: "legs",
              sets: 1,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Розминка: пустий гриф → 50% → 70% → 85% → 95% → 3RM. Запиши результат!",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги стоячи — розминка до 3RM",
              nameEn: "Overhead Press — Warm up to 3RM",
              category: "push",
              sets: 1,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Розминка: пустий гриф → 50% → 70% → 85% → 95% → 3RM. Запиши результат!",
              supersetWith: null
            },
            {
              id: 3,
              name: "Присід зі штангою (легко)",
              nameEn: "Barbell Squat (Light)",
              category: "legs",
              sets: 3,
              reps: "5",
              rpe: "6",
              rest: "2-3 хв",
              notes: "Легка вага (60-70%), підтримка тонусу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "6",
              rest: "1.5-2 хв",
              notes: "Допоміжна робота",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C — Ретест",
          duration: "60-70 хв",
          warmup: "15 хв ретельна розминка: кардіо + динамічна розтяжка",
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
              notes: "Повторити невдалий тест АБО легке Full Body",
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
              notes: "Повторити невдалий тест АБО легке Full Body",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Помірна вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Підтягування",
              nameEn: "Pull-Up",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Повна амплітуда",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим стоячи",
              nameEn: "Overhead Press",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Помірна вага, завершальна робота",
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
      note: "Фінальний тиждень програми! Легке тренування, розтяжка, рефлексія. Вітаю з завершенням 48-тижневої програми!",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A (Святкування)",
          duration: "60-70 хв",
          warmup: "10 хв легке кардіо + повна динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, насолоджуйся процесом",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, фокус на відчуттях",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, ідеальна техніка",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Без додаткової ваги або мінімальна",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B (Святкування)",
          duration: "60-70 хв",
          warmup: "10 хв легке кардіо + повна динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, розтяжка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення гантелей стоячи",
              nameEn: "Standing Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс",
              nameEn: "Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага, завершальна робота",
              supersetWith: null
            },
            {
              id: 7,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body C (Святкування)",
          duration: "60-70 хв",
          warmup: "10 хв легке кардіо + повна динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага, насолоджуйся",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 4,
              reps: "6",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Без додаткової ваги",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Легка вага або власна вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
              supersetWith: null
            }
          ]
        },
        {
          id: 4,
          day: "Неділя",
          type: "pool",
          note: "30-45 хв плавання / аквааеробіка, легке кардіо. Святкуй завершення 12-місячної програми!"
        }
      ]
    }
  ]
};
