export default {
  id: 2,
  name: "Квітень",
  phase: 1,
  phaseName: "Full Body 3x — Фундамент",
  phaseColor: "#6c8cff",
  description: "Ротація вправ. Full Body базова з новими варіаціями. 3×8-12 reps, RPE прогресія 7→8→9→8 (deload). ~10 sets/muscle/week.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Ротація вправ — нові варіації знайомих рухів. Знайди робочі ваги, тримай RPE 7.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Лікті вгору, спина вертикально",
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
              rest: "2-3 хв",
              notes: "Більша амплітуда ніж зі штангою",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Тягнути до грудей, зводити лопатки",
              supersetWith: null
            },
            {
              id: 4,
              name: "Армійський жим",
              nameEn: "Military Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Стоячи, корпус стабільний",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Акцент на біцепс та нижню частину широчайших",
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
              notes: "Контрольований рух, піднімай ноги до паралелі або вище.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
              category: "legs",
              sets: 3,
              reps: "8",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Широка стійка, носки назовні",
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
              notes: "Повний діапазон руху, контроль у нижній точці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide-Grip Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Тягнути до грудей, не відхилятись назад",
              supersetWith: null
            },
            {
              id: 4,
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Гантель біля грудей, лікті між колін",
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
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Нейтральний хват, лікті зафіксовані",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Спина щільно до спинки тренажера",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги на похилій лавці",
              nameEn: "Incline Barbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Кут 30°, лопатки зведені",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку вузьким хватом",
              nameEn: "Close-Grip Seated Cable Row",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "V-рукоятка, зводити лопатки",
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
              notes: "Контрольований рух, без ривків",
              supersetWith: null
            },
            {
              id: 5,
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Лікті притиснуті до корпусу",
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
      note: "Додай вагу на 2.5-5 кг. Відчуй різницю в нових варіаціях вправ. RPE 8.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
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
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up",
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
              notes: "Контрольований рух, піднімай ноги до паралелі або вище.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
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
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2-3 хв",
              notes: "Повний діапазон руху, контроль у нижній точці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide-Grip Lat Pulldown",
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
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
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
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Hammer Curl",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
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
              name: "Жим штанги на похилій лавці",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга горизонтального блоку вузьким хватом",
              nameEn: "Close-Grip Seated Cable Row",
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
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
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
      note: "Пікове навантаження з новими вправами. RPE 9, записуй ваги для прогресу.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
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
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up",
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
              notes: "Контрольований рух, піднімай ноги до паралелі або вище.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
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
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2-3 хв",
              notes: "Повний діапазон руху, контроль у нижній точці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide-Grip Lat Pulldown",
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
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
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
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Hammer Curl",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
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
              name: "Жим штанги на похилій лавці",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга горизонтального блоку вузьким хватом",
              nameEn: "Close-Grip Seated Cable Row",
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
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
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
      note: "Розвантаження: зменш вагу на 40%, зберігай техніку. Підготовка до повернення базових вправ у наступному місяці.",
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
              name: "Фронтальний присід",
              nameEn: "Front Squat",
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
              name: "Жим гантелей лежачи",
              nameEn: "Dumbbell Bench Press",
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
              name: "Тяга Т-грифа",
              nameEn: "T-Bar Row",
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
              name: "Армійський жим",
              nameEn: "Military Press",
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
              name: "Підтягування зворотнім хватом",
              nameEn: "Chin-Up",
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
              notes: "Контрольований рух, піднімай ноги до паралелі або вище.",
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
              name: "Тяга сумо",
              nameEn: "Sumo Deadlift",
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
              name: "Жим гантелей на похилій лавці",
              nameEn: "Incline Dumbbell Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2-3 хв",
              notes: "Повний діапазон руху, контроль у нижній точці.",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку широким хватом",
              nameEn: "Wide-Grip Lat Pulldown",
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
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
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
              name: "Тяга до обличчя",
              nameEn: "Face Pull",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Зовнішня ротація в кінцевій точці. Чудова для здоров'я плечей та задніх дельт.",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки з гантелями",
              nameEn: "Hammer Curl",
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
              name: "Гакк-присід",
              nameEn: "Hack Squat",
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
              name: "Жим штанги на похилій лавці",
              nameEn: "Incline Barbell Press",
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
              name: "Тяга горизонтального блоку вузьким хватом",
              nameEn: "Close-Grip Seated Cable Row",
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
              name: "Тяга прямими руками",
              nameEn: "Straight-Arm Pulldown",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Ізоляція широчайших. Тримай руки прямими, тягни до стегон.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розгинання рук на блоці",
              nameEn: "Cable Tricep Pushdown",
              category: "push",
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
          id: 4,
          day: "Неділя",
          type: "pool",
          note: "30-45 хв плавання / аквааеробіка, легке кардіо"
        }
      ]
    }
  ]
};
