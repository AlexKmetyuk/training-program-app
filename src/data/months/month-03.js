export default {
  id: 3,
  name: "Місяць 3",
  phase: 1,
  phaseName: "Full Body 3x — Фундамент",
  phaseColor: "#6c8cff",
  description: "Full Body базова. 3x8-12, відпочинок 90с. RPE прогресія 7 → 8 → 9 → deload.",
  weeks: [
    {
      id: 1,
      name: "Легкий",
      rpeTarget: "7",
      note: "RPE 7 — має бути 3 повторення в запасі.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Болгарські спліт-присідання",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              type: "compound",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "120с",
              notes: "Задня нога на лавці. Коліно передньої ноги не виходить за носок.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Більша амплітуда ніж штанга. Лопатки зведені.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку широким хватом",
              nameEn: "Seated Cable Row (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Широка ручка, прямий хват ширше плечей. Тягнути до грудей.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Повна амплітуда, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Підйом до рівня плечей, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Розгинання рук на блоці",
              nameEn: "Tricep Pushdown",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "60с",
              notes: "Лікті притиснуті до тулуба. Повне розгинання внизу.",
              supersetWith: null
            },
            {
              id: 8,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              type: "compound",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "60с",
              notes: "Контрольований рух, не розгойдуватись. Ноги до паралелі або вище.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Сідничний місток",
              nameEn: "Glute Bridge",
              category: "legs",
              type: "compound",
              sets: 3,
              reps: "8-12",
              rpe: "7",
              rest: "120с",
              notes: "Стопи на ширині плечей, стискайте сідниці у верхній точці. Пауза 1-2 секунди вгорі.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Lat Pulldown (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Хват ширше плечей, прямий. Тягнути до верхньої частини грудей.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Лавка з опорою 80-85°. Гантелі дозволяють природну траєкторію.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг в тренажері",
              nameEn: "Leg Extension",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Повна амплітуда, пауза у верхній точці.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Канат, нейтральний хват. Тягнути до рівня обличчя, розводячи руки.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curl",
              category: "pull",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Стоячи або сидячи. Супінація при підйомі.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Крок вперед, коліно задньої ноги майже торкається підлоги.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Зведення рук в тренажері (Pec Deck)",
              nameEn: "Pec Deck",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "8-12",
              rpe: "7",
              rest: "60с",
              notes: "Контрольований рух, максимальний розтяг грудних. Зводьте руки до кінця.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up (Underhand)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "120с",
              notes: "Хват на ширині плечей, долоні на себе. Повна амплітуда.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга нижнього блоку вузьким хватом",
              nameEn: "Seated Cable Row (Narrow)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Вузька ручка, нейтральний хват. Лопатки разом у кінцевій точці.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Підйом до рівня плечей, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              type: "compound",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "60с",
              notes: "Контрольований рух, не розгойдуватись. Ноги до паралелі або вище.",
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
      name: "Середній",
      rpeTarget: "8",
      note: "RPE 8 — має бути 2 повторення в запасі. Додай вагу порівняно з минулим тижнем.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Болгарські спліт-присідання",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              type: "compound",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "120с",
              notes: "Задня нога на лавці. Коліно передньої ноги не виходить за носок.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Більша амплітуда ніж штанга. Лопатки зведені.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку широким хватом",
              nameEn: "Seated Cable Row (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "120с",
              notes: "Широка ручка, прямий хват ширше плечей. Тягнути до грудей.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Підйом до рівня плечей, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Розгинання рук на блоці",
              nameEn: "Tricep Pushdown",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "10-12",
              rpe: "8",
              rest: "60с",
              notes: "Лікті притиснуті до тулуба. Повне розгинання внизу.",
              supersetWith: null
            },
            {
              id: 8,
              name: "Скручування",
              nameEn: "Crunches",
              category: "core",
              type: "isolation",
              sets: 3,
              reps: "12-15",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза у верхній точці.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Станова тяга",
              nameEn: "Deadlift",
              category: "legs",
              type: "compound",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "120с",
              notes: "Спина рівна, штанга вздовж ніг.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Lat Pulldown (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "120с",
              notes: "Хват ширше плечей, прямий. Тягнути до верхньої частини грудей.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "120с",
              notes: "Лавка з опорою 80-85°. Гантелі дозволяють природну траєкторію.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг в тренажері",
              nameEn: "Leg Extension",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза у верхній точці.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Канат, нейтральний хват. Тягнути до рівня обличчя, розводячи руки.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curl",
              category: "pull",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Стоячи або сидячи. Супінація при підйомі.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "120с",
              notes: "Крок вперед, коліно задньої ноги майже торкається підлоги.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "120с",
              notes: "Лавка 30-45°. Штанга до верхньої частини грудей.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up (Underhand)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "120с",
              notes: "Хват на ширині плечей, долоні на себе. Повна амплітуда.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга нижнього блоку вузьким хватом",
              nameEn: "Seated Cable Row (Narrow)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "120с",
              notes: "Вузька ручка, нейтральний хват. Лопатки разом у кінцевій точці.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Підйом до рівня плечей, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Скручування",
              nameEn: "Crunches",
              category: "core",
              type: "isolation",
              sets: 3,
              reps: "12-15",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза у верхній точці.",
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
      name: "Тест 3RM",
      rpeTarget: "max",
      note: "Тестовий тиждень — визнач свій 3RM для присіду, станової та жиму лежачи. Estimated 1RM = вага × 1.08.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Тест: Присід",
          duration: "45-55 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              type: "compound",
              sets: 1,
              reps: "3RM",
              rpe: "max",
              rest: "180с",
              notes: "Розімнись поступово: порожній гриф → 50% → 70% → 85% → 3RM спроба.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "8",
              rpe: "7",
              rest: "120с",
              notes: "Легкий аксесуар після тесту.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 2,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Легкий аксесуар.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 2,
              reps: "15",
              rpe: "7",
              rest: "60с",
              notes: "Легкий аксесуар.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Тест: Станова тяга",
          duration: "40-50 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Станова тяга",
              nameEn: "Deadlift",
              category: "legs",
              type: "compound",
              sets: 1,
              reps: "3RM",
              rpe: "max",
              rest: "180с",
              notes: "Розімнись поступово: порожній гриф → 50% → 70% → 85% → 3RM спроба.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Lat Pulldown (Wide)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Легкий аксесуар після тесту.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              type: "isolation",
              sets: 2,
              reps: "15",
              rpe: "7",
              rest: "60с",
              notes: "Легкий аксесуар.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Тест: Жим лежачи",
          duration: "45-55 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              type: "compound",
              sets: 1,
              reps: "3RM",
              rpe: "max",
              rest: "180с",
              notes: "Розімнись поступово: порожній гриф → 50% → 70% → 85% → 3RM спроба.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Тяга нижнього блоку вузьким хватом",
              nameEn: "Seated Cable Row (Narrow)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Легкий аксесуар після тесту.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 2,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Легкий аксесуар.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 2,
              reps: "15",
              rpe: "7",
              rest: "60с",
              notes: "Легкий аксесуар.",
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
      name: "Deload",
      rpeTarget: "7",
      note: "Розвантаження: 2 підходи замість 3, менше вправ. Дай тілу відновитись.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A (Deload)",
          duration: "35-45 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Болгарські спліт-присідання",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "8",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              type: "compound",
              sets: 2,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку широким хватом",
              nameEn: "Seated Cable Row (Wide)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 2,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Deload: легка вага.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 2,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Deload: легка вага.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B (Deload)",
          duration: "30-40 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Сідничний місток",
              nameEn: "Glute Bridge",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "8-12",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Lat Pulldown (Wide)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Press",
              category: "push",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              type: "isolation",
              sets: 2,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Deload: легка вага.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C (Deload)",
          duration: "35-45 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Зведення рук в тренажері (Pec Deck)",
              nameEn: "Pec Deck",
              category: "push",
              type: "isolation",
              sets: 2,
              reps: "8-12",
              rpe: "7",
              rest: "60с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up (Underhand)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "8",
              rpe: "7",
              rest: "120с",
              notes: "Deload: менше повторень або з гумкою.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга нижнього блоку вузьким хватом",
              nameEn: "Seated Cable Row (Narrow)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 2,
              reps: "12",
              rpe: "7",
              rest: "60с",
              notes: "Deload: легка вага.",
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
