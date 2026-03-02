export default {
  id: 8,
  name: "Жовтень",
  phase: 3,
  phaseName: "Full Body 3x — Спеціалізація",
  phaseColor: "#10b981",
  description: "Спеціалізація ротація. Advanced techniques start: tempo reps notes.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Ротація вправ + темпо-повторення. Контролюй швидкість руху, шукай робочі ваги з новим темпом. RPE 7.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Базова робота на ноги, корпус вертикально",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус спина — нижня частина широчайших",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в тренажері (chest supported row)",
              nameEn: "Chest Supported Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус спина — ізоляція без навантаження на поперек",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс гантелями сидячи",
              nameEn: "Seated Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Темпо 3-0-1-0: 3 сек негатив, без паузи, 1 сек підйом",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс на похилій лавці",
              nameEn: "Incline Dumbbell Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Лавка під 45°. Максимальний розтяг біцепса. Не розгойдуйся.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Базова робота на ноги/спину",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус груди — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 3,
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Махи гантелями в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — задній пучок дельт",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Підтримка об'єму для спини",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом гантелей через сторони сидячи",
              nameEn: "Seated Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — середній пучок, без інерції",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Фокус ноги — квадрицепс",
              supersetWith: null
            },
            {
              id: 2,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "7",
              rest: "2 хв",
              notes: "Фокус ноги — унілатеральна робота",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга зі штангою",
              nameEn: "Barbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Пауза 2 сек внизу — розтягнення задньої поверхні",
              supersetWith: null
            },
            {
              id: 4,
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
              id: 5,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
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
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
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
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              sets: 4,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Фокус ноги — литкові м'язи, повний діапазон руху",
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
      note: "Підвищ ваги з темпо-технікою. Повільний ексцентрик збільшує час під навантаженням. RPE 8.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Базова робота на ноги, корпус вертикально",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус спина — нижня частина широчайших",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в тренажері (chest supported row)",
              nameEn: "Chest Supported Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус спина — ізоляція без навантаження на поперек",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс гантелями сидячи",
              nameEn: "Seated Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Темпо 3-0-1-0: 3 сек негатив, без паузи, 1 сек підйом",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс на похилій лавці",
              nameEn: "Incline Dumbbell Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Лавка під 45°. Максимальний розтяг біцепса. Не розгойдуйся.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Базова робота на ноги/спину",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Фокус груди — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 3,
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Махи гантелями в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — задній пучок дельт",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Підтримка об'єму для спини",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом гантелей через сторони сидячи",
              nameEn: "Seated Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — середній пучок, без інерції",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Фокус ноги — квадрицепс",
              supersetWith: null
            },
            {
              id: 2,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "8",
              rest: "2 хв",
              notes: "Фокус ноги — унілатеральна робота",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга зі штангою",
              nameEn: "Barbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Пауза 2 сек внизу — розтягнення задньої поверхні",
              supersetWith: null
            },
            {
              id: 4,
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
              id: 5,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
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
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
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
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              sets: 4,
              reps: "15",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Фокус ноги — литкові м'язи, повний діапазон руху",
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
      note: "Пік з темпо та ротованими вправами. RPE 9, максимальний час під навантаженням. Записуй відчуття.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Базова робота на ноги, корпус вертикально",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус спина — нижня частина широчайших",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в тренажері (chest supported row)",
              nameEn: "Chest Supported Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус спина — ізоляція без навантаження на поперек",
              supersetWith: null
            },
            {
              id: 6,
              name: "Підйом на біцепс гантелями сидячи",
              nameEn: "Seated Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Темпо 3-0-1-0: 3 сек негатив, без паузи, 1 сек підйом",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс на похилій лавці",
              nameEn: "Incline Dumbbell Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Лавка під 45°. Максимальний розтяг біцепса. Не розгойдуйся.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Базова робота на ноги/спину",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Фокус груди — додатковий об'єм",
              supersetWith: null
            },
            {
              id: 3,
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Махи гантелями в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — задній пучок дельт",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Підтримка об'єму для спини",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом гантелей через сторони сидячи",
              nameEn: "Seated Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Фокус плечі — середній пучок, без інерції",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Фокус ноги — квадрицепс",
              supersetWith: null
            },
            {
              id: 2,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "9",
              rest: "2 хв",
              notes: "Фокус ноги — унілатеральна робота",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга зі штангою",
              nameEn: "Barbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Пауза 2 сек внизу — розтягнення задньої поверхні",
              supersetWith: null
            },
            {
              id: 4,
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
              id: 5,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
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
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
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
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              sets: 4,
              reps: "15",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Фокус ноги — литкові м'язи, повний діапазон руху",
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
      note: "Розвантаження: -40% ваги. Наступний місяць додасть дропсети та паузи — відпочинь добре.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
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
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
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
              name: "Тяга в тренажері (chest supported row)",
              nameEn: "Chest Supported Row",
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
              name: "Підйом на біцепс гантелями сидячи",
              nameEn: "Seated Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — темпо 3-0-1-0, зменшити вагу",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс на похилій лавці",
              nameEn: "Incline Dumbbell Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Лавка під 45°. Максимальний розтяг біцепса. Не розгойдуйся.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
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
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
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
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Махи гантелями в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 6,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом гантелей через сторони сидячи",
              nameEn: "Seated Dumbbell Lateral Raises",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Румунська тяга зі штангою",
              nameEn: "Barbell Romanian Deadlift",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — пауза 2 сек внизу, зменшити вагу",
              supersetWith: null
            },
            {
              id: 4,
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
              id: 5,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
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
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
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
              name: "Підйом на носки стоячи",
              nameEn: "Standing Calf Raise",
              category: "legs",
              sets: 4,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
