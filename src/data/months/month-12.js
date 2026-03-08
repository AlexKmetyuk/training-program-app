export default {
  id: 12,
  name: "Місяць 12",
  phase: 4,
  phaseName: "Realization",
  phaseColor: "#1abc9c",
  description: "Реалізація: піковий місяць. Slot 1 — 5x3-5, інші 3x8-10. W3 — тест 1RM.",
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
          name: "Realization A",
          duration: "50-60 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              type: "compound",
              sets: 5,
              reps: "3-5",
              rpe: "7",
              rest: "180с",
              notes: "Піковий місяць. Фокус на максимальній силі.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Лопатки зведені, невеликий прогин. Штанга до грудей.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга з опорою на грудну клітку",
              nameEn: "Chest Supported Row",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Груди на опорі, 0 навантаження на поперек. Лопатки разом у кінцевій точці.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "60с",
              notes: "Підйом до рівня плечей, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Realization B",
          duration: "40-50 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Сідничний місток",
              nameEn: "Glute Bridge",
              category: "legs",
              type: "compound",
              sets: 5,
              reps: "3-5",
              rpe: "7",
              rest: "180с",
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
              reps: "8-10",
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
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Лавка з опорою 80-85°. Гантелі дозволяють природну траєкторію.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "60с",
              notes: "Канат, нейтральний хват. Тягнути до рівня обличчя, розводячи руки.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Realization C",
          duration: "50-60 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              type: "compound",
              sets: 5,
              reps: "3-5",
              rpe: "7",
              rest: "180с",
              notes: "Піковий місяць. Фокус на максимальній силі.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Зведення рук в тренажері (Pec Deck)",
              nameEn: "Pec Deck",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "60с",
              notes: "Контрольований рух, максимальний розтяг грудних. Зводьте руки до кінця.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку вузьким хватом",
              nameEn: "Lat Pulldown (Narrow)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Вузький хват, нейтральний. Тягнути до грудей.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга нижнього блоку широким хватом",
              nameEn: "Seated Cable Row (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Широка ручка, прямий хват ширше плечей. Тягнути до грудей.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "8-10",
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
              reps: "8-10",
              rpe: "7",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
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
          name: "Realization A",
          duration: "50-60 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              type: "compound",
              sets: 5,
              reps: "3-5",
              rpe: "8",
              rest: "180с",
              notes: "Піковий місяць. Фокус на максимальній силі.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Лопатки зведені, невеликий прогин. Штанга до грудей.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга з опорою на грудну клітку",
              nameEn: "Chest Supported Row",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Груди на опорі, 0 навантаження на поперек. Лопатки разом у кінцевій точці.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "60с",
              notes: "Підйом до рівня плечей, контрольований негатив.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Realization B",
          duration: "40-50 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Станова тяга",
              nameEn: "Deadlift",
              category: "legs",
              type: "compound",
              sets: 5,
              reps: "3-5",
              rpe: "8",
              rest: "180с",
              notes: "Піковий місяць. Фокус на максимальній силі.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Lat Pulldown (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
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
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Лавка з опорою 80-85°. Гантелі дозволяють природну траєкторію.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              type: "isolation",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "60с",
              notes: "Канат, нейтральний хват. Тягнути до рівня обличчя, розводячи руки.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Realization C",
          duration: "50-60 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              type: "compound",
              sets: 5,
              reps: "3-5",
              rpe: "8",
              rest: "180с",
              notes: "Піковий місяць. Фокус на максимальній силі.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Лавка 30-45°. Більша амплітуда та розтяг.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку вузьким хватом",
              nameEn: "Lat Pulldown (Narrow)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Вузький хват, нейтральний. Тягнути до грудей.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга нижнього блоку широким хватом",
              nameEn: "Seated Cable Row (Wide)",
              category: "pull",
              type: "compound",
              sets: 3,
              reps: "8-10",
              rpe: "8",
              rest: "120с",
              notes: "Широка ручка, прямий хват ширше плечей. Тягнути до грудей.",
              supersetWith: null
            },
            {
              id: 5,
              name: "Махи гантелями в сторони",
              nameEn: "Lateral Raise",
              category: "push",
              type: "isolation",
              sets: 3,
              reps: "8-10",
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
              reps: "8-10",
              rpe: "8",
              rest: "60с",
              notes: "Повна амплітуда, пауза в розтягнутій позиції внизу.",
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
      name: "Тест 1RM",
      rpeTarget: "max",
      note: "Фінальний тест — визнач свій справжній 1RM для присіду, станової та жиму лежачи.",
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
              reps: "1RM",
              rpe: "max",
              rest: "180с",
              notes: "Розімнись поступово: порожній гриф → 50% → 70% → 80% → 90% → 95% → 1RM спроба.",
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
          duration: "35-45 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Станова тяга",
              nameEn: "Deadlift",
              category: "legs",
              type: "compound",
              sets: 1,
              reps: "1RM",
              rpe: "max",
              rest: "180с",
              notes: "Розімнись поступово: порожній гриф → 50% → 70% → 80% → 90% → 95% → 1RM спроба.",
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
              reps: "1RM",
              rpe: "max",
              rest: "180с",
              notes: "Розімнись поступово: порожній гриф → 50% → 70% → 80% → 90% → 95% → 1RM спроба.",
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
      note: "Фінальне розвантаження програми: 2 підходи, менше вправ. Дай тілу відновитись.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Realization A (Deload)",
          duration: "25-35 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "3-5",
              rpe: "7",
              rest: "180с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
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
              name: "Тяга з опорою на грудну клітку",
              nameEn: "Chest Supported Row",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Realization B (Deload)",
          duration: "25-35 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Сідничний місток",
              nameEn: "Glute Bridge",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "3-5",
              rpe: "7",
              rest: "180с",
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
              reps: "8-10",
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
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Realization C (Deload)",
          duration: "25-35 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              type: "compound",
              sets: 2,
              reps: "3-5",
              rpe: "7",
              rest: "180с",
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
              reps: "8-10",
              rpe: "7",
              rest: "60с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку вузьким хватом",
              nameEn: "Lat Pulldown (Narrow)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга нижнього блоку широким хватом",
              nameEn: "Seated Cable Row (Wide)",
              category: "pull",
              type: "compound",
              sets: 2,
              reps: "8-10",
              rpe: "7",
              rest: "120с",
              notes: "Deload: легка вага, фокус на техніці.",
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
