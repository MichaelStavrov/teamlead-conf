// номера вопросов для несгораемой суммы
export const safeAmounts = [3, 6];

// номер вопроса - количество коинов,
// не менять сортировку - строго от большего к меньшему
export const progressData = [
  { num: 9, count: 45 },
  { num: 8, count: 40 },
  { num: 7, count: 35 },
  { num: 6, count: 30 },
  { num: 5, count: 25 },
  { num: 4, count: 20 },
  { num: 3, count: 15 },
  { num: 2, count: 10 },
  { num: 1, count: 5 },
];

// стикеры, номер вопроса - количество стикеров
export const stickers = [
  { num: 9, count: 0 },
  { num: 8, count: 0 },
  { num: 7, count: 0 },
  { num: 6, count: 0 },
  { num: 5, count: 0 },
  { num: 4, count: 0 },
  { num: 3, count: 0 },
  { num: 2, count: 0 },
  { num: 1, count: 0 },
];

// [номер вопроса]: количество секунд для таймера обратного отсчета,
export const questionsTime: Record<string, number> = {
  9: 100,
  8: 100,
  7: 100,
  6: 80,
  5: 80,
  4: 80,
  3: 60,
  2: 60,
  1: 60,
};

// прогресс для отображения на UI
export const progressDataWithSafeAmounts = progressData.map((item, index) => ({
  ...item,
  color: safeAmounts.includes(item.num) || index === 0 ? 'orange' : undefined,
  stickers: stickers.find((sticker) => sticker.num === item.num)?.count ?? 0,
}));

// выбор тем для вопросов
export const fields = [
  { value: 'java', label: 'Java' },
  { value: 'python', label: 'Python' },
  { value: 'javascript', label: 'Javascript' },
  { value: 'scala', label: 'Scala' },
  { value: 'sql', label: 'SQL' },
  { value: 'nosql', label: 'NoSQL' },
];

// настройки таймера
export const timerProps = {
  size: 220, // ширина таймера
  strokeWidth: 10, // ширина полосы обратного отсчета
};

export const DEV = window.location.href.includes('localhost:3000');

// перменные css в файле index.scss
