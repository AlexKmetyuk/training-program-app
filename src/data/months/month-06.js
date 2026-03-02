export default {
  id: 6,
  name: "Серпень",
  phase: 2,
  phaseName: "Full Body 3x — DUP Пік",
  phaseColor: "#f59e0b",
  description: "DUP пік. Increased intensity, slightly more volume.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Піковий місяць DUP. Повертаємось до основних вправ з вищою інтенсивністю. RPE 7 для розігріву.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-75 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Важкі трійки, контроль техніки",
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
              notes: "Важкі трійки, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Не округляти спину, тягнути до живота",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Стоячи, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Ups",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Додаткова вага на поясі або жилеті",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Розтягнення задньої поверхні стегна",
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
              rest: "2 хв",
              notes: "Кут лави 30-45 градусів",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Low Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Пауза у скороченому положенні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Задня нога на лаві, контроль балансу",
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
              rest: "2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Без інерції, контрольований підйом",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Лікті фіксовані, контрольований рух",
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
              rest: "2 хв",
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
          duration: "55-65 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Гантель біля грудей, глибокий присід",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері від грудей",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Контрольований рух, повний діапазон",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Широкий хват, тягнути до грудей",
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
              notes: "Пік скорочення на 1 секунду",
              supersetWith: null
            },
            {
              id: 5,
              name: "Зведення в тренажері",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Контрольований рух, пік скорочення",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи в сторони",
              nameEn: "Lateral Raises",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Легка вага, високі повторення",
              supersetWith: null
            },
            {
              id: 7,
              name: "Суперсет: молотки + розгинання рук",
              nameEn: "Superset: Hammer Curls + Tricep Pushdown",
              category: "superset",
              sets: 3,
              reps: "15+15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Без відпочинку між вправами суперсету",
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
      note: "Агресивніше додавай ваги. Силовий день — працюй на 3-5 повторень з RPE 8-9, гіпертрофія — RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-75 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Важкі трійки, контроль техніки",
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
              notes: "Важкі трійки, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Не округляти спину, тягнути до живота",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "3",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Стоячи, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Ups",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "8",
              rest: "3-5 хв",
              notes: "Додаткова вага на поясі або жилеті",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Розтягнення задньої поверхні стегна",
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
              rest: "2 хв",
              notes: "Кут лави 30-45 градусів",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Low Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "8",
              rest: "2 хв",
              notes: "Пауза у скороченому положенні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Задня нога на лаві, контроль балансу",
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
              rest: "2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 4,
              reps: "12",
              rpe: "8",
              rest: "2 хв",
              notes: "Без інерції, контрольований підйом",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "2 хв",
              notes: "Лікті фіксовані, контрольований рух",
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
              rest: "2 хв",
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
          duration: "55-65 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Гантель біля грудей, глибокий присід",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері від грудей",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Контрольований рух, повний діапазон",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Широкий хват, тягнути до грудей",
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
              notes: "Пік скорочення на 1 секунду",
              supersetWith: null
            },
            {
              id: 5,
              name: "Зведення в тренажері",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Контрольований рух, пік скорочення",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи в сторони",
              nameEn: "Lateral Raises",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Легка вага, високі повторення",
              supersetWith: null
            },
            {
              id: 7,
              name: "Суперсет: молотки + розгинання рук",
              nameEn: "Superset: Hammer Curls + Tricep Pushdown",
              category: "superset",
              sets: 3,
              reps: "15+15",
              rpe: "8",
              rest: "45-60 сек",
              notes: "Без відпочинку між вправами суперсету",
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
      note: "Фінальний пік DUP-фази! Максимальні ваги у всіх днях. Порівняй з місяцем 4 — це кульмінація 3-місячної роботи.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Сила",
          duration: "60-75 хв",
          warmup: "10 хв кардіо + динамічна розминка, розігрів робочих м'язів",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Важкі трійки, максимальне зусилля",
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
              notes: "Важкі трійки, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Не округляти спину, тягнути до живота",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "3",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Стоячи, повний діапазон руху",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Ups",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "9",
              rest: "3-5 хв",
              notes: "Додаткова вага на поясі або жилеті",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Розтягнення задньої поверхні стегна",
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
              rest: "2 хв",
              notes: "Кут лави 30-45 градусів",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Low Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "9",
              rest: "2 хв",
              notes: "Пауза у скороченому положенні",
              supersetWith: null
            },
            {
              id: 4,
              name: "Болгарські спліт-присіди",
              nameEn: "Bulgarian Split Squats",
              category: "legs",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Задня нога на лаві, контроль балансу",
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
              rest: "2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 4,
              reps: "12",
              rpe: "9",
              rest: "2 хв",
              notes: "Без інерції, контрольований підйом",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "2 хв",
              notes: "Лікті фіксовані, контрольований рух",
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
              rest: "2 хв",
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
          duration: "55-65 хв",
          warmup: "10 хв кардіо + динамічна розминка",
          exercises: [
            {
              id: 1,
              name: "Гоблет-присід",
              nameEn: "Goblet Squat",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Гантель біля грудей, глибокий присід",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері від грудей",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Контрольований рух, повний діапазон",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Широкий хват, тягнути до грудей",
              supersetWith: null
            },
            {
              id: 4,
              name: "Розгинання ніг",
              nameEn: "Leg Extension",
              category: "legs",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Пік скорочення на 1 секунду",
              supersetWith: null
            },
            {
              id: 5,
              name: "Зведення в тренажері",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Контрольований рух, пік скорочення",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи в сторони",
              nameEn: "Lateral Raises",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Легка вага, високі повторення",
              supersetWith: null
            },
            {
              id: 7,
              name: "Суперсет: молотки + розгинання рук",
              nameEn: "Superset: Hammer Curls + Tricep Pushdown",
              category: "superset",
              sets: 3,
              reps: "15+15",
              rpe: "9",
              rest: "45-60 сек",
              notes: "Без відпочинку між вправами суперсету",
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
      note: "Розвантаження перед Спеціалізацією. -40% ваги, відновлюйся — наступна фаза додасть фокус-групи.",
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
              name: "Присід зі штангою",
              nameEn: "Barbell Back Squat",
              category: "legs",
              sets: 5,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга штанги в нахилі",
              nameEn: "Barbell Bent Over Row",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим штанги стоячи",
              nameEn: "Overhead Barbell Press",
              category: "push",
              sets: 4,
              reps: "3",
              rpe: "7",
              rest: "3-5 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 5,
              name: "Підтягування з вагою",
              nameEn: "Weighted Pull-Ups",
              category: "pull",
              sets: 4,
              reps: "5",
              rpe: "7",
              rest: "3-5 хв",
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
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
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
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Low Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 4,
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
              id: 5,
              name: "Згинання ніг сидячи",
              nameEn: "Seated Leg Curl",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Більший розтяг біцепса стегна в сидячій позиції. Повний діапазон руху.",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення гантелей стоячи",
              nameEn: "Dumbbell Lateral Raises",
              category: "push",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом на біцепс EZ-штангою",
              nameEn: "EZ-Bar Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "2 хв",
              notes: "Deload — зменшити вагу на 10-15%",
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
              rest: "2 хв",
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
          duration: "45-55 хв",
          warmup: "10 хв кардіо + динамічна розминка",
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
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим в тренажері від грудей",
              nameEn: "Machine Chest Press",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
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
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 5,
              name: "Зведення в тренажері",
              nameEn: "Pec Deck Machine",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 6,
              name: "Махи в сторони",
              nameEn: "Lateral Raises",
              category: "push",
              sets: 3,
              reps: "20",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити вагу на 10-15%",
              supersetWith: null
            },
            {
              id: 7,
              name: "Суперсет: молотки + розгинання рук",
              nameEn: "Superset: Hammer Curls + Tricep Pushdown",
              category: "superset",
              sets: 3,
              reps: "15+15",
              rpe: "7",
              rest: "45-60 сек",
              notes: "Deload — зменшити навантаження",
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
