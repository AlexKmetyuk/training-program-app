export const exercises = {
  // ============================================
  // НОГИ (13 вправ)
  // ============================================
  legs: [
    {
      id: "squat",
      name: "Присід зі штангою",
      nameEn: "Barbell Back Squat",
      category: "legs",
      type: "compound",
      focus: ["quads", "glutes"],
      notes: "Глибина — стегно паралельно підлозі або нижче. Коліна в напрямку носків."
    },
    {
      id: "front-squat",
      name: "Фронтальний присід",
      nameEn: "Front Squat",
      category: "legs",
      type: "compound",
      focus: ["quads"],
      notes: "Штанга на передніх дельтах. Тримати лікті високо, корпус вертикально."
    },
    {
      id: "bulgarian-split-squat",
      name: "Болгарські спліт-присідання",
      nameEn: "Bulgarian Split Squat",
      category: "legs",
      type: "compound",
      focus: ["quads", "glutes", "balance"],
      notes: "Задня нога на лавці. Коліно передньої ноги не виходить за носок."
    },
    {
      id: "leg-press",
      name: "Жим ногами",
      nameEn: "Leg Press",
      category: "legs",
      type: "compound",
      focus: ["quads"],
      notes: "Не відривати попере від спинки. Повна амплітуда."
    },
    {
      id: "hack-squat",
      name: "Гакк-присід",
      nameEn: "Hack Squat",
      category: "legs",
      type: "compound",
      focus: ["quads"],
      notes: "Спина притиснута до опори. Повна амплітуда."
    },
    {
      id: "deadlift",
      name: "Станова тяга",
      nameEn: "Deadlift",
      category: "legs",
      type: "compound",
      focus: ["back", "hamstrings", "glutes"],
      notes: "Спина рівна, штанга вздовж ніг. НЕ поєднувати з присідом або румунською тягою в один день.",
      restrictions: ["no-spinal-load-same-day"]
    },
    {
      id: "rdl",
      name: "Румунська тяга",
      nameEn: "Romanian Deadlift",
      category: "legs",
      type: "compound",
      focus: ["hamstrings", "glutes"],
      notes: "М'які коліна, відводити таз назад. Розтяг задньої поверхні стегна."
    },
    {
      id: "glute-bridge",
      name: "Ягодичний місток",
      nameEn: "Glute Bridge",
      category: "legs",
      type: "compound",
      focus: ["glutes"],
      notes: "Пауза у верхній точці, стиснути сідниці. Спина на лавці, штанга на стегнах."
    },
    {
      id: "leg-curl",
      name: "Згинання ніг сидячи",
      nameEn: "Seated Leg Curl",
      category: "legs",
      type: "isolation",
      focus: ["hamstrings"],
      notes: "Повна амплітуда, контрольований негатив."
    },
    {
      id: "leg-extension",
      name: "Розгинання ніг в тренажері",
      nameEn: "Leg Extension",
      category: "legs",
      type: "isolation",
      focus: ["quads"],
      notes: "Повна амплітуда, пауза у верхній точці."
    },
    {
      id: "calf-raise",
      name: "Підйом на носки стоячи",
      nameEn: "Standing Calf Raise",
      category: "legs",
      type: "isolation",
      focus: ["calves"],
      notes: "Повна амплітуда, пауза в розтягнутій позиції внизу."
    },
    {
      id: "lunges",
      name: "Випади з гантелями",
      nameEn: "Dumbbell Lunges",
      category: "legs",
      type: "compound",
      focus: ["quads", "glutes", "balance"],
      notes: "Крок вперед, коліно задньої ноги майже торкається підлоги."
    },
    {
      id: "goblet-squat",
      name: "Гоблет-присід",
      nameEn: "Goblet Squat",
      category: "legs",
      type: "compound",
      focus: ["quads"],
      notes: "Гантель або гиря біля грудей. Для легких/витривалих днів."
    }
  ],

  // ============================================
  // ТЯГИ / СПИНА (12 вправ)
  // ============================================
  pull: [
    {
      id: "chest-supported-row",
      name: "Тяга з опорою на грудну клітку",
      nameEn: "Chest Supported Row",
      category: "pull",
      type: "compound",
      focus: ["mid_back", "rear_delt"],
      notes: "Хват ширше плечей, прямий. Груди на опорі, 0 навантаження на поперек."
    },
    {
      id: "seated-row-narrow",
      name: "Тяга нижнього блоку вузьким хватом",
      nameEn: "Seated Cable Row (Narrow)",
      category: "pull",
      type: "compound",
      focus: ["mid_back"],
      notes: "Вузька ручка, нейтральний хват (долоні одна на одну). Лопатки разом у кінцевій точці."
    },
    {
      id: "seated-row-wide",
      name: "Тяга нижнього блоку широким хватом",
      nameEn: "Seated Cable Row (Wide)",
      category: "pull",
      type: "compound",
      focus: ["mid_back", "rear_delt"],
      notes: "Широка ручка, прямий хват ширше плечей. Тягнути до грудей."
    },
    {
      id: "lat-pulldown-wide",
      name: "Тяга верхнього блоку широким хватом",
      nameEn: "Lat Pulldown (Wide)",
      category: "pull",
      type: "compound",
      focus: ["lats"],
      notes: "Хват ширше плечей, прямий. Тягнути до верхньої частини грудей."
    },
    {
      id: "lat-pulldown-narrow",
      name: "Тяга верхнього блоку вузьким хватом",
      nameEn: "Lat Pulldown (Narrow)",
      category: "pull",
      type: "compound",
      focus: ["lats", "biceps"],
      notes: "Вузька ручка, нейтральний хват. Тягнути до грудей, лопатки вниз."
    },
    {
      id: "pull-up",
      name: "Підтягування прямим хватом",
      nameEn: "Pull-Up (Overhand)",
      category: "pull",
      type: "compound",
      focus: ["lats"],
      notes: "Хват трохи ширше плечей. Якщо важко — використовуй гумку або гравітрон."
    },
    {
      id: "chin-up",
      name: "Підтягування зворотнім хватом",
      nameEn: "Chin-Up (Underhand)",
      category: "pull",
      type: "compound",
      focus: ["lats", "biceps"],
      notes: "Хват на ширині плечей, долоні на себе. Повна амплітуда."
    },
    {
      id: "face-pull",
      name: "Тяга до обличчя",
      nameEn: "Face Pull",
      category: "pull",
      type: "isolation",
      focus: ["rear_delt"],
      notes: "Канат, нейтральний хват. Тягнути до рівня обличчя, розводячи руки."
    },
    {
      id: "reverse-fly-machine",
      name: "Зворотні розведення в тренажері",
      nameEn: "Reverse Pec Deck",
      category: "pull",
      type: "isolation",
      focus: ["rear_delt"],
      notes: "Груди до опори, руки трохи зігнуті. Зводити лопатки."
    },
    {
      id: "ez-curl",
      name: "Підйом на біцепс з EZ-грифом",
      nameEn: "EZ-Bar Bicep Curl",
      category: "pull",
      type: "isolation",
      focus: ["biceps"],
      notes: "Лікті притиснуті до тулуба. Повна амплітуда, контрольований негатив."
    },
    {
      id: "incline-curl",
      name: "Підйом на біцепс на похилій лавці",
      nameEn: "Incline Dumbbell Curl",
      category: "pull",
      type: "isolation",
      focus: ["biceps"],
      notes: "Лавка 45°, руки вільно звисають. Максимальний розтяг біцепса внизу."
    },
    {
      id: "dumbbell-curl",
      name: "Підйом на біцепс гантелями",
      nameEn: "Dumbbell Bicep Curl",
      category: "pull",
      type: "isolation",
      focus: ["biceps"],
      notes: "Стоячи або сидячи. Супінація при підйомі."
    },
    {
      id: "hammer-curl",
      name: "Молотки з гантелями",
      nameEn: "Hammer Curl",
      category: "pull",
      type: "isolation",
      focus: ["biceps", "forearms"],
      notes: "Нейтральний хват (долоні одна на одну). Лікті нерухомі."
    }
  ],

  // ============================================
  // ЖИМИ / ГРУДИ / ПЛЕЧІ (10 вправ)
  // ============================================
  push: [
    {
      id: "bench-press",
      name: "Жим штанги лежачи",
      nameEn: "Barbell Bench Press",
      category: "push",
      type: "compound",
      focus: ["chest", "front_delt", "triceps"],
      notes: "Лопатки зведені, невеликий прогин. Штанга до грудей."
    },
    {
      id: "dumbbell-bench",
      name: "Жим гантелей лежачи",
      nameEn: "Dumbbell Bench Press",
      category: "push",
      type: "compound",
      focus: ["chest", "front_delt", "triceps"],
      notes: "Більша амплітуда ніж штанга. Лопатки зведені."
    },
    {
      id: "incline-bench",
      name: "Жим штанги на похилій",
      nameEn: "Incline Barbell Bench Press",
      category: "push",
      type: "compound",
      focus: ["upper_chest", "front_delt"],
      notes: "Лавка 30-45°. Штанга до верхньої частини грудей."
    },
    {
      id: "incline-dumbbell",
      name: "Жим гантелей на похилій",
      nameEn: "Incline Dumbbell Press",
      category: "push",
      type: "compound",
      focus: ["upper_chest", "front_delt"],
      notes: "Лавка 30-45°. Більша амплітуда та розтяг."
    },
    {
      id: "seated-dumbbell-press",
      name: "Жим гантелей сидячи",
      nameEn: "Seated Dumbbell Press",
      category: "push",
      type: "compound",
      focus: ["front_delt", "mid_delt", "triceps"],
      notes: "Лавка з опорою 80-85°. Гантелі дозволяють природну траєкторію."
    },
    {
      id: "pec-deck",
      name: "Батерфляй (Pec Deck)",
      nameEn: "Pec Deck Fly",
      category: "push",
      type: "isolation",
      focus: ["chest"],
      notes: "Руки трохи зігнуті. Пауза в розтягнутій позиції."
    },
    {
      id: "lateral-raise",
      name: "Махи гантелями в сторони",
      nameEn: "Lateral Raise",
      category: "push",
      type: "isolation",
      focus: ["mid_delt"],
      notes: "Підйом до рівня плечей, контрольований негатив. Не піднімати вище плечей."
    },
    {
      id: "tricep-pushdown",
      name: "Розгинання рук на блоці",
      nameEn: "Tricep Pushdown",
      category: "push",
      type: "isolation",
      focus: ["triceps"],
      notes: "Лікті притиснуті до тулуба. Повне розгинання внизу."
    },
    {
      id: "cable-french-press",
      name: "Французький жим на блоці",
      nameEn: "Cable Overhead Tricep Extension",
      category: "push",
      type: "isolation",
      focus: ["triceps"],
      notes: "Стоячи спиною до блоку, руки над головою. Розтяг довгої головки трицепса."
    },
    {
      id: "machine-press",
      name: "Жим в тренажері",
      nameEn: "Machine Chest Press",
      category: "push",
      type: "compound",
      focus: ["chest"],
      notes: "Для легких/витривалих днів. Тренажер фіксує траєкторію."
    }
  ],

  // ============================================
  // CORE (3 вправи)
  // ============================================
  core: [
    {
      id: "hanging-leg-raise",
      name: "Підйом ніг у висі",
      nameEn: "Hanging Leg Raise",
      category: "core",
      type: "compound",
      focus: ["lower_abs"],
      notes: "Контрольований рух, не розгойдуватись. Ноги до паралелі або вище."
    },
    {
      id: "crunches",
      name: "Скручування",
      nameEn: "Crunches",
      category: "core",
      type: "isolation",
      focus: ["upper_abs"],
      notes: "Повна амплітуда, пауза у верхній точці."
    },
    {
      id: "plank",
      name: "Планка",
      nameEn: "Plank",
      category: "core",
      type: "isolation",
      focus: ["stability"],
      notes: "Тримати корпус рівно, не прогинатись в попереку."
    }
  ],

  // ============================================
  // СПИНА / ПОПЕРЕК (1 вправа)
  // ============================================
  back: [
    {
      id: "hyperextension",
      name: "Гіперекстензія",
      nameEn: "Back Extension",
      category: "pull",
      type: "isolation",
      focus: ["lower_back", "glutes", "hamstrings"],
      notes: "Контрольований рух, не переростягувати спину у верхній точці."
    }
  ]
};

export default exercises;
