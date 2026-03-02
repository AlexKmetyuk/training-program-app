export default {
  id: 5,
  name: "Липень",
  phase: 2,
  phaseName: "Full Body 3x — DUP",
  phaseColor: "#f59e0b",
  description: "DUP ротація. Rotated exercise variations.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Ротація вправ у форматі DUP — нові варіації в кожному дні. Знайди ваги для нових рухів, RPE 7.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Тримати лікті високо, корпус вертикально",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Кут лави 30-45 градусів",
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
              rest: "3-4 хв",
              notes: "Не округляти спину, тягнути до живота",
              supersetWith: null
            },
            {
              id: 4,
              name: "Армійський жим",
              nameEn: "Military Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Стоячи, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в нахилі зворотнім хватом",
              nameEn: "Reverse Grip Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Зворотній хват, акцент на нижню частину широчайших",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Повний діапазон руху, не блокувати коліна",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Контрольований негатив",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Пауза у скороченому положенні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Широка стійка, спина пряма",
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
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Нейтральний хват, без розгойдування",
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
              rest: "1.5-2 хв",
              notes: "Лікті притиснуті до корпусу",
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
          duration: "55-65 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присіди з гантелями",
              nameEn: "Dumbbell Squats",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Легка вага, високий темп",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Стабільна траєкторія, повний діапазон руху. Фокус на скороченні грудних.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Акцент на нижню частину широчайших",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "15/ніг",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Крок вперед, коліно не виходить за носок",
              supersetWith: null
            },
            {
              id: 5,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Акцент на задні дельти",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curls",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Контрольований негатив",
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
      note: "Підвищуй ваги поступово. Нові варіації можуть відчуватись інакше — слухай тіло, RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Тримати лікті високо, корпус вертикально",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Кут лави 30-45 градусів",
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
              rest: "3-4 хв",
              notes: "Не округляти спину, тягнути до живота",
              supersetWith: null
            },
            {
              id: 4,
              name: "Армійський жим",
              nameEn: "Military Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Стоячи, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в нахилі зворотнім хватом",
              nameEn: "Reverse Grip Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "8",
              rest: "3-4 хв",
              notes: "Зворотній хват, акцент на нижню частину широчайших",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Повний діапазон руху, не блокувати коліна",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Контрольований негатив",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Пауза у скороченому положенні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Широка стійка, спина пряма",
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
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Нейтральний хват, без розгойдування",
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
              rest: "1.5-2 хв",
              notes: "Лікті притиснуті до корпусу",
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
          duration: "55-65 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присіди з гантелями",
              nameEn: "Dumbbell Squats",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Легка вага, високий темп",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Стабільна траєкторія, повний діапазон руху. Фокус на скороченні грудних.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Акцент на нижню частину широчайших",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "15/ніг",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Крок вперед, коліно не виходить за носок",
              supersetWith: null
            },
            {
              id: 5,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Акцент на задні дельти",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curls",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Контрольований негатив",
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
      note: "Пік з ротованими вправами. RPE 9, порівняй силовий день з минулим місяцем — прогрес є?",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Тримати лікті високо, корпус вертикально",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Кут лави 30-45 градусів",
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
              rest: "3-4 хв",
              notes: "Не округляти спину, тягнути до живота",
              supersetWith: null
            },
            {
              id: 4,
              name: "Армійський жим",
              nameEn: "Military Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Стоячи, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в нахилі зворотнім хватом",
              nameEn: "Reverse Grip Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "9",
              rest: "3-4 хв",
              notes: "Зворотній хват, акцент на нижню частину широчайших",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "60-70 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Повний діапазон руху, не блокувати коліна",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Контрольований негатив",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Пауза у скороченому положенні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Широка стійка, спина пряма",
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
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Нейтральний хват, без розгойдування",
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
              rest: "1.5-2 хв",
              notes: "Лікті притиснуті до корпусу",
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
          duration: "55-65 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присіди з гантелями",
              nameEn: "Dumbbell Squats",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Легка вага, високий темп",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Стабільна траєкторія, повний діапазон руху. Фокус на скороченні грудних.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Акцент на нижню частину широчайших",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "15/ніг",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Крок вперед, коліно не виходить за носок",
              supersetWith: null
            },
            {
              id: 5,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Акцент на задні дельти",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curls",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Контрольований негатив",
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
      note: "Розвантаження: -40% ваги. Легкий тиждень перед фінальним піком DUP-фази.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "50-60 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Press",
              category: "push",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
              rest: "3-4 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 4,
              name: "Армійський жим",
              nameEn: "Military Press",
              category: "push",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга в нахилі зворотнім хватом",
              nameEn: "Reverse Grip Bent Over Row",
              category: "pull",
              sets: 3,
              reps: "5",
              rpe: "7",
              rest: "3-4 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            }
          ]
        },
        {
          id: 2,
          day: "Середа",
          name: "Full Body Гіпертрофія",
          duration: "50-60 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
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
              id: 4,
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curls",
              category: "pull",
              sets: 3,
              reps: "10",
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
              rest: "1.5-2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
          duration: "45-55 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Присіди з гантелями",
              nameEn: "Dumbbell Squats",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Стабільна траєкторія, повний діапазон руху. Фокус на скороченні грудних.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку зворотнім хватом",
              nameEn: "Reverse Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "15/ніг",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 5,
              name: "Батерфляй (Pec Deck)",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Максимальний розтяг грудних у відкритій позиції. Стабільна траєкторія тренажера.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей в нахилі",
              nameEn: "Bent Over Dumbbell Reverse Fly",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curls",
              category: "pull",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "45-60 сек",
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
