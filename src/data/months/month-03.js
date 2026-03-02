export default {
  id: 3,
  name: "Травень",
  phase: 1,
  phaseName: "Full Body 3x — Фундамент",
  phaseColor: "#6c8cff",
  description: "Повернення до вправ М1 + прогресія. Старт з ваг тижня 3 місяця 1. 3×10-15 reps, RPE прогресія 7→8→9→8 (deload). ~10 sets/muscle/week.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Повернення базових вправ з місяця 1. Стартуй з ваг тижня Пік, але тепер 10-15 повторень. RPE 7.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A (Присід-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B (Тяга-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Прогресія: +повторення відносно М1",
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
              rest: "1-1.5 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C (Жим-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Прогресія: +повторення відносно М1",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "12",
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
      note: "Підвищ ваги на 2.5-5 кг. Діапазон 10-15 повторень потребує іншої роботи — контролюй темп. RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A (Присід-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "10-12",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B (Тяга-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
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
              rest: "1-1.5 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C (Жим-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "12",
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
      note: "Максимальне навантаження фази Фундамент. RPE 9, порівняй ваги з місяцем 1 — має бути прогрес!",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A (Присід-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальне зусилля",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "12-15",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B (Тяга-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
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
              rest: "1-1.5 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C (Жим-фокус)",
          duration: "55-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальне зусилля",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
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
      id: 4,
      name: "Розвантаження",
      rpeTarget: "7",
      note: "Останній розвантажувальний тиждень перед DUP. Зменш вагу на 40%, відпочинь — далі буде зовсім інший формат.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body A (Присід-фокус)",
          duration: "45-55 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: легший варіант",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "10-12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body B (Тяга-фокус)",
          duration: "45-55 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
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
              rest: "1-1.5 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body C (Жим-фокус)",
          duration: "45-55 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: легший варіант",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "12",
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
    }
  ]
};
