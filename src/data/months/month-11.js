export default {
  id: 11,
  name: "Січень",
  phase: 4,
  phaseName: "Full Body 3x — Блокова періодизація",
  phaseColor: "#ef4444",
  description: "Гіпертрофія блок. 8-12 повторень, максимальний об'єм. ~16-18 сетів/м'яз/тиждень.",
  weeks: [
    {
      id: 1,
      name: "Адаптація",
      rpeTarget: "7",
      note: "Гіпертрофійний блок: 8-12 повторень, максимальний об'єм (16-18 сетів/м'яз). Адаптуйся до об'єму, RPE 7.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Гіпертрофія A",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Контрольований темп, повна амплітуда",
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
              rest: "1.5-2 хв",
              notes: "Кут 30°, розтяжка грудних внизу",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Зводити лопатки, контрольований рух",
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
              notes: "З гантелями, глибокий присід",
              supersetWith: null
            },
            {
              id: 5,
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
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Без розгойдування",
              supersetWith: null
            },
            {
              id: 7,
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
          name: "Full Body Гіпертрофія B",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Відчувати розтяжку задньої поверхні стегна",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Контрольований темп",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Широкий хват, відчувати широчайші",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Повна амплітуда, не замикати коліна",
              supersetWith: null
            },
            {
              id: 5,
              name: "Армійський жим",
              nameEn: "Overhead Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Стабілізація кора",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення стоячи",
              nameEn: "Standing Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Контрольований рух, без інерції",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Нейтральний хват, брахіаліс",
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
              rest: "1-1.5 хв",
              notes: "Ізоляція трицепса, лікті нерухомі",
              supersetWith: null
            },
            {
              id: 9,
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body Гіпертрофія C",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Повна амплітуда, фокус на квадрицепсах",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Кут 30-45°, контрольований рух",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Вузький хват, зводити лопатки",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Крок вперед, коліно не виходить за носок",
              supersetWith: null
            },
            {
              id: 5,
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
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Почергово або одночасно",
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
      note: "Збільш ваги на 2.5-5 кг, зберігаючи високий об'єм. М'язи мають горіти. RPE 8.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Гіпертрофія A",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Додати вагу порівняно з тижнем 1",
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
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Збільшити вагу",
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
              notes: "Прогресія ваги гантелей",
              supersetWith: null
            },
            {
              id: 5,
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
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 7,
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
          name: "Full Body Гіпертрофія B",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 5,
              name: "Армійський жим",
              nameEn: "Overhead Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення стоячи",
              nameEn: "Standing Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Прогресія ваги",
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
              rest: "1-1.5 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 9,
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body Гіпертрофія C",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Збільшити вагу",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Прогресія ваги",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "8",
              rest: "1.5-2 хв",
              notes: "Збільшити вагу гантелей",
              supersetWith: null
            },
            {
              id: 5,
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
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "8",
              rest: "1-1.5 хв",
              notes: "Прогресія ваги",
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
      note: "Пік гіпертрофійного блоку: максимальний об'єм + RPE 9. Найважчий тиждень перед фінальним блоком.",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Гіпертрофія A",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага на 10 повторень",
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
              rest: "1.5-2 хв",
              notes: "Пікове навантаження",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага з правильною технікою",
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
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 5,
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
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальне навантаження",
              supersetWith: null
            },
            {
              id: 7,
              name: "Підйом ніг у висі",
              nameEn: "Hanging Leg Raise",
              category: "core",
              sets: 3,
              reps: "10-12",
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
          name: "Full Body Гіпертрофія B",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага з правильною технікою",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Пікове навантаження",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Пікове навантаження",
              supersetWith: null
            },
            {
              id: 5,
              name: "Армійський жим",
              nameEn: "Overhead Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення стоячи",
              nameEn: "Standing Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальна вага, дропсет на останньому сеті",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальне навантаження",
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
              rest: "1-1.5 хв",
              notes: "Максимальна вага, дропсет",
              supersetWith: null
            },
            {
              id: 9,
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body Гіпертрофія C",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка, розминкові підходи",
          exercises: [
            {
              id: 1,
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Пікове навантаження",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "9",
              rest: "1.5-2 хв",
              notes: "Максимальна вага гантелей",
              supersetWith: null
            },
            {
              id: 5,
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
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "9",
              rest: "1-1.5 хв",
              notes: "Максимальне навантаження",
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
      note: "Розвантаження перед фінальним піковим блоком. -40% ваги, активне відновлення. Далі — тест 3RM!",
      workouts: [
        {
          id: 1,
          day: "Понеділок",
          name: "Full Body Гіпертрофія A",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Присід зі штангою",
              nameEn: "Barbell Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага (60%), ідеальна техніка",
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
              rest: "1.5-2 хв",
              notes: "Легка вага, фокус на техніці",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга нижнього блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, відновлення",
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
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
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
              id: 6,
              name: "Підйом на біцепс штангою",
              nameEn: "Barbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 7,
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
          name: "Full Body Гіпертрофія B",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Румунська тяга",
              nameEn: "Romanian Deadlift",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, техніка",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим штанги лежачи",
              nameEn: "Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга верхнього блоку",
              nameEn: "Lat Pulldown",
              category: "pull",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 4,
              name: "Жим ногами",
              nameEn: "Leg Press",
              category: "legs",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
              name: "Армійський жим",
              nameEn: "Overhead Press",
              category: "push",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 6,
              name: "Розведення стоячи",
              nameEn: "Standing Lateral Raise",
              category: "push",
              sets: 3,
              reps: "15",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 7,
              name: "Молотки",
              nameEn: "Hammer Curl",
              category: "pull",
              sets: 3,
              reps: "12",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага",
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
              rest: "1-1.5 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 9,
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
          id: 3,
          day: "П'ятниця",
          name: "Full Body Гіпертрофія C",
          duration: "70-80 хв",
          warmup: "10 хв кардіо + динамічна розтяжка",
          exercises: [
            {
              id: 1,
              name: "Гакк-присід",
              nameEn: "Hack Squat",
              category: "legs",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 2,
              name: "Жим на похилій штанги",
              nameEn: "Incline Barbell Bench Press",
              category: "push",
              sets: 4,
              reps: "10",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 3,
              name: "Тяга горизонтального блоку",
              nameEn: "Seated Cable Row",
              category: "pull",
              sets: 4,
              reps: "12",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага, відновлення",
              supersetWith: null
            },
            {
              id: 4,
              name: "Випади з гантелями",
              nameEn: "Dumbbell Lunges",
              category: "legs",
              sets: 3,
              reps: "10/ніг",
              rpe: "7",
              rest: "1.5-2 хв",
              notes: "Легка вага",
              supersetWith: null
            },
            {
              id: 5,
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
              name: "Підйом на біцепс гантелями",
              nameEn: "Dumbbell Bicep Curl",
              category: "pull",
              sets: 3,
              reps: "10",
              rpe: "7",
              rest: "1-1.5 хв",
              notes: "Легка вага",
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
