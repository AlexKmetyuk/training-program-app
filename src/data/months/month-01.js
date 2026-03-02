export default {
  id: 1,
  name: "Березень",
  phase: 1,
  phaseName: "Full Body 3x — Фундамент",
  phaseColor: "#6c8cff",
  description: "Full Body базова. 3×8-12 reps, RPE прогресія 7→8→9→8 (deload). ~10 sets/muscle/week.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Знайомство з програмою. Знайди робочі ваги для кожної вправи, тримай RPE 7 — має бути 3 повторення в запасі.",
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
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Контроль техніки, повна амплітуда",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Лопатки зведені, контрольований спуск",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Нахил 45°, тягнути до поясу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Без надмірного прогину в попереку",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування (або з гумкою)",
              nameEn: "Pull-Ups (or Band-Assisted)",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повна амплітуда, контрольований спуск",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "8-10",
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
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Спина пряма, відчуття розтягу в біцепсі стегна",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Кут лавки 30-45°",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Зводити лопатки в кінцевій точці",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Коліно не виходить за носок, тримати баланс",
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
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Без розгойдування, контрольований рух",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Лікті зафіксовані, без читінгу",
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
              reps: "12",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Стопи на ширині плечей, повна амплітуда",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Корпус стабільний, без надмірного прогину",
              supersetWith: null
            },
            {
              id: 3,
              name: "Підтягування широким хватом",
              nameEn: "Wide-Grip Pull-Up",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Акцент на широчайших м'язах",
              supersetWith: null
            },
            {
              id: 4,
              name: "Відтискання на брусах",
              nameEn: "Dips",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Невеликий нахил вперед для акценту на грудях",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single-Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "По 10 повторень на кожну руку",
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
      note: "Збільш ваги на 2.5-5 кг порівняно з минулим тижнем. RPE 8 — має бути 2 повторення в запасі.",
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
              reps: "8",
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
              reps: "10",
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
              reps: "10",
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
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування (або з гумкою)",
              nameEn: "Pull-Ups (or Band-Assisted)",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Менша гумка або додати повторення",
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
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
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
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
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
              reps: "10",
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
              reps: "12",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
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
              reps: "12",
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
              reps: "8",
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
              reps: "8",
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
              reps: "10",
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
              reps: "10",
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
      note: "Найважчий тиждень циклу. Працюй на RPE 9 — лише 1 повторення в запасі. Запиши ваги для порівняння.",
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
              reps: "8",
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
              reps: "10",
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
              reps: "10",
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
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування (або з гумкою)",
              nameEn: "Pull-Ups (or Band-Assisted)",
              category: "pull",
              sets: 3,
              reps: "8",
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
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
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
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
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
              reps: "10",
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
              reps: "12",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
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
              reps: "12",
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
              reps: "8",
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
              reps: "8",
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
              reps: "10",
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
              reps: "10",
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
              reps: "10",
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
      note: "Розвантаження: зменш вагу на 40% від тижня Пік. Зберігай техніку, дай тілу відновитись перед наступним циклом.",
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
              reps: "8",
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
              reps: "10",
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
              reps: "10",
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
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування (або з гумкою)",
              nameEn: "Pull-Ups (or Band-Assisted)",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: легша гумка або менше повторень",
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
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
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
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
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
              reps: "10",
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
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
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
              reps: "12",
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
              reps: "8",
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
              reps: "8",
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
              reps: "10",
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
              reps: "10",
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
    }
  ]
};
