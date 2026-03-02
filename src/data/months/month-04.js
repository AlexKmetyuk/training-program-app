export default {
  id: 4,
  name: "Червень",
  phase: 2,
  phaseName: "Full Body 3x — DUP",
  phaseColor: "#f59e0b",
  description: "DUP (Daily Undulating Periodization): Пн=Сила (4×3-5, RPE 8), Ср=Гіпертрофія (3×8-12, RPE 8), Пт=Метаболічний (3×15-20, RPE 7). ~12-14 sets/muscle/week.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7-8",
      note: "Новий формат DUP: Пн — сила (4×3-5), Ср — гіпертрофія (3×8-12), Пт — витривалість (3×15-20). Знайди робочі ваги для кожного дня.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-75 хв",
          warmup: "10 хв кардіо + розминочні підходи з легкою вагою",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Силовий день: важкі ваги, довгий відпочинок",
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
              rest: "3-4 хв",
              notes: "Силовий день: контроль ексцентрики",
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
              rest: "3-4 хв",
              notes: "Силовий день: важкі ваги",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Силовий день: стабільний корпус",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Додати вагу на пояс або жилет",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "55-70 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Гіпертрофія: контрольований темп",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Гіпертрофія: повна амплітуда",
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
              notes: "Гіпертрофія: пауза в скороченні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Гіпертрофія: відчуття розтягу",
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
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Гіпертрофія: контрольований рух",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Гіпертрофія: повільна негативна фаза",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
              supersetWith: null
            },
            {
              id: 9,
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
          name: "Full Body Витривалість",
          duration: "50-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: легка вага, високі повторення",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: безперервний темп",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: контрольований рух",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: пампінг",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення в тренажері (груди)",
              nameEn: "Machine Chest Fly",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: пампінг грудних",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи гантелями в сторони",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: легкі гантелі",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Метаболічний: без паузи вгорі",
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
      note: "Додай 2.5-5 кг у силовий день, збільш RPE в гіпертрофійному. Відчуй як DUP працює через різні стимули.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-75 хв",
          warmup: "10 хв кардіо + розминочні підходи з легкою вагою",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Додати вагу відносно тижня 1",
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
              rest: "3-4 хв",
              notes: "Додати вагу відносно тижня 1",
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
              rest: "3-4 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "55-70 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
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
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
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
              rest: "1.5-2 хв",
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
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
              supersetWith: null
            },
            {
              id: 9,
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
          name: "Full Body Витривалість",
          duration: "50-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення в тренажері (груди)",
              nameEn: "Machine Chest Fly",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи гантелями в сторони",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Додати вагу відносно тижня 1",
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
      note: "Пік DUP-циклу: максимальні ваги в силовий день, RPE 9 в гіпертрофійному. Запиши результати для порівняння.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-75 хв",
          warmup: "10 хв кардіо + розминочні підходи з легкою вагою",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Максимальна робоча вага тижня",
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
              rest: "3-4 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Максимальне зусилля",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "55-70 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
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
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
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
              rest: "1.5-2 хв",
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
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна робоча вага тижня",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
              supersetWith: null
            },
            {
              id: 9,
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
          name: "Full Body Витривалість",
          duration: "50-65 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення в тренажері (груди)",
              nameEn: "Machine Chest Fly",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи гантелями в сторони",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальне зусилля на витривалість",
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
      note: "Розвантаження: зменш ваги на 40% в усіх трьох днях. Зберігай формат DUP, але працюй легко.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "50-60 хв",
          warmup: "10 хв кардіо + розминочні підходи з легкою вагою",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload: ~60% від ваги тижня 3",
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
              rest: "3-4 хв",
              notes: "Deload: ~60% від ваги тижня 3",
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
              rest: "3-4 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Up",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload: менша додаткова вага",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "45-60 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
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
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
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
              rest: "1.5-2 хв",
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
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 8,
              name: "Розгинання рук з гантеллю над головою",
              nameEn: "Overhead Dumbbell Tricep Extension",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Максимальний розтяг трицепса у нижній точці. Повільна негативна фаза.",
              supersetWith: null
            },
            {
              id: 9,
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
          name: "Full Body Витривалість",
          duration: "40-55 хв",
          warmup: "5-10 хв легке кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 5,
              name: "Розведення в тренажері (груди)",
              nameEn: "Machine Chest Fly",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи гантелями в сторони",
              nameEn: "Dumbbell Lateral Raise",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "6",
              rest: "45-60 сек",
              notes: "Deload: ~60% від ваги тижня 3",
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
