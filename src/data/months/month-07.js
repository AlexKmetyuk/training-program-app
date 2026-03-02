export default {
  id: 7,
  name: "Вересень",
  phase: 3,
  phaseName: "Full Body 3x — Спеціалізація",
  phaseColor: "#10b981",
  description: "Кожен день: все тіло + фокус-група з додатковим об'ємом. ~14-16 sets/muscle/week.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Нова фаза: Full Body + додатковий об'єм на фокус-групу щодня. Знайди ваги для нових вправ, RPE 7.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
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
              notes: "Базова робота на ноги",
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
              notes: "Базова робота на груди",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус спина — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус спина — ширина",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус спина — товщина",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус біцепс",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Dumbbell Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус біцепс — брахіаліс",
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
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Базова робота на ноги/спину",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус груди — верхня частина",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус плечі — базова вправа",
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
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — середній пучок",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Базова робота на спину",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус ноги — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 2,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Фокус ноги — унілатеральна робота",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга гантелями",
              nameEn: "Dumbbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Фокус ноги — задня поверхня стегна",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус ноги — квадрицепс",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Підтримка об'єму для грудей",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Підтримка об'єму для спини",
              supersetWith: null
            },
            {
              id: 7,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Крок вперед, коліно задньої ноги майже торкається підлоги. Тримай корпус рівно.",
              supersetWith: null
            },
            {
              id: 8,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
      note: "Збільш ваги на 2.5-5 кг. Фокус-групи отримують додаткові сети — відчуй різницю. RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
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
              notes: "Базова робота на ноги",
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
              notes: "Базова робота на груди",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Фокус спина — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус спина — ширина",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус спина — товщина",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус біцепс",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Dumbbell Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус біцепс — брахіаліс",
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
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Базова робота на ноги/спину",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Фокус груди — верхня частина",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Фокус плечі — базова вправа",
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
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — середній пучок",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Базова робота на спину",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Фокус ноги — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 2,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Фокус ноги — унілатеральна робота",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга гантелями",
              nameEn: "Dumbbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "2 хв",
              notes: "Фокус ноги — задня поверхня стегна",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус ноги — квадрицепс",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Підтримка об'єму для грудей",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Підтримка об'єму для спини",
              supersetWith: null
            },
            {
              id: 7,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Крок вперед, коліно задньої ноги майже торкається підлоги. Тримай корпус рівно.",
              supersetWith: null
            },
            {
              id: 8,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
      note: "Пік спеціалізації: RPE 9, максимальний об'єм на фокус-групи. 14-16 сетів/м'яз/тиждень.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
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
              notes: "Базова робота на ноги",
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
              notes: "Базова робота на груди",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Фокус спина — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус спина — ширина",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус спина — товщина",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус біцепс",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Dumbbell Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус біцепс — брахіаліс",
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
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Базова робота на ноги/спину",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Фокус груди — верхня частина",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Фокус плечі — базова вправа",
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
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — середній пучок",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Базова робота на спину",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Фокус ноги — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 2,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Фокус ноги — унілатеральна робота",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга гантелями",
              nameEn: "Dumbbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "2 хв",
              notes: "Фокус ноги — задня поверхня стегна",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус ноги — квадрицепс",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Підтримка об'єму для грудей",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Підтримка об'єму для спини",
              supersetWith: null
            },
            {
              id: 7,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Крок вперед, коліно задньої ноги майже торкається підлоги. Тримай корпус рівно.",
              supersetWith: null
            },
            {
              id: 8,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
      note: "Розвантаження: -40% ваги, зберігай структуру тренувань. Тіло адаптується до нового об'єму.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body + Спина/Біцепс",
          duration: "50-60 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
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
              notes: "Deload — зменшити вагу на 10-15%",
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
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Dumbbell Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
          duration: "50-60 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей на похилій",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підтягування",
              nameEn: "Pull-Ups",
              category: "pull",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload — зменшити навантаження",
              supersetWith: null
            },
            {
              id: 7,
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
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
          duration: "50-60 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 4,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга гантелями",
              nameEn: "Dumbbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 5,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга гантелі в нахилі",
              nameEn: "Single Arm Dumbbell Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 7,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Крок вперед, коліно задньої ноги майже торкається підлоги. Тримай корпус рівно.",
              supersetWith: null
            },
            {
              id: 8,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
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
