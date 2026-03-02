export default {
  id: 10,
  name: "Грудень",
  phase: 4,
  phaseName: "Full Body 3x — Блокова періодизація",
  phaseColor: "#ef4444",
  description: "Силовий блок. Важкі ваги, 3-6 повторень. ~14-16 сетів/м'яз/тиждень. Довгий відпочинок між підходами.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Силовий блок: 3-6 повторень, важкі ваги. Фокус на техніці з великими вагами, довгий відпочинок 3-4 хв. RPE 7.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила A",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важкий присід, контроль техніки",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важкий жим, стабільна позиція",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важка тяга, тримати спину рівно",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Армійський жим, стабілізація кора",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Додати вагу на пояс, повна амплітуда",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Сила B",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Широка стійка, тримати спину рівно",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Кут 30-45°, контрольований рух",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важка тяга, фокус на широчайших",
              supersetWith: null
            },
            {
              id: 4,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Тримати лікті високо, вертикальний торс",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важкі гантелі, стабільна позиція",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          name: "Full Body Сила C",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою (пауза)",
              nameEn: "Paused Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Пауза 2 секунди внизу",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи (пауза)",
              nameEn: "Paused Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Пауза 2 секунди на грудях",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важка тяга, контроль руху",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "З гантелями або штангою, глибокий присід",
              supersetWith: null
            },
            {
              id: 5,
              name: "Відтискання на брусах з вагою",
              nameEn: "Weighted Dips",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Додати вагу на пояс",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування зворотнім хватом з вагою",
              nameEn: "Weighted Chin-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Додати вагу, повна амплітуда",
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
      note: "Додай 2.5-5 кг до кожної вправи. Малі повторення дозволяють рости у вазі швидше. RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила A",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Додати вагу порівняно з тижнем 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 5,
              reps: "3",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу на поясі",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Сила B",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу, контроль техніки",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 4,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          name: "Full Body Сила C",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою (пауза)",
              nameEn: "Paused Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Пауза 2 секунди внизу, збільшити вагу",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи (пауза)",
              nameEn: "Paused Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Пауза 2 секунди на грудях, прогресія",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "6",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 5,
              name: "Відтискання на брусах з вагою",
              nameEn: "Weighted Dips",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Збільшити вагу на поясі",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування зворотнім хватом з вагою",
              nameEn: "Weighted Chin-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Прогресія ваги",
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
      note: "Пік силового блоку: працюй біля межі з ідеальною технікою. RPE 9, запиши ваги для порівняння з тестом.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила A",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікова вага, тримати техніку",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 5,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікова вага, стабільна позиція",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна вага з правильною технікою",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікова вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна додаткова вага",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Сила B",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікова вага, ідеальна техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікове навантаження",
              supersetWith: null
            },
            {
              id: 4,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна вага, тримати позицію",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікова вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "10-12",
              rpe: "9",
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
              rpe: "9",
              rest: "1 хв",
              notes: "Контрольований рух, піднімай ноги до паралелі або вище. Не розгойдуйся.",
              supersetWith: null
            }
          ]
        },
        {
          id: 3,
          day: "П'ятниця",
          name: "Full Body Сила C",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, ретельна розминка з поступовим збільшенням ваги",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою (пауза)",
              nameEn: "Paused Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пауза 2 секунди, максимальна вага",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи (пауза)",
              nameEn: "Paused Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пауза 2 секунди, пікова вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "6",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Відтискання на брусах з вагою",
              nameEn: "Weighted Dips",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Максимальна додаткова вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування зворотнім хватом з вагою",
              nameEn: "Weighted Chin-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Пікова додаткова вага",
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
      note: "Розвантаження: -40% ваги. Далі гіпертрофійний блок — максимальний об'єм з помірними вагами.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила A",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, легка розминка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага (60% від максимуму тижня 3), ідеальна техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, фокус на техніці",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Мінімальна або без додаткової ваги",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Сила B",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, легка розминка",
          exercises: [
            {
              id: 1,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 4,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей сидячи",
              nameEn: "Seated Dumbbell Shoulder Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          name: "Full Body Сила C",
          duration: "65-75 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, легка розминка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою (пауза)",
              nameEn: "Paused Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, пауза для техніки",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи (пауза)",
              nameEn: "Paused Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, контроль руху",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent-Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Легка вага, баланс",
              supersetWith: null
            },
            {
              id: 5,
              name: "Відтискання на брусах з вагою",
              nameEn: "Weighted Dips",
              category: "push",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Без додаткової ваги або мінімальна",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування зворотнім хватом з вагою",
              nameEn: "Weighted Chin-Up",
              category: "pull",
              sets: 3,
              reps: "6",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Без додаткової ваги, відновлення",
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
