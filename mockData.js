const questions = [
  {
    id: 1,
    question:
      "Вопрос 1<br/><img src='https://media.proglib.io/posts/2020/01/06/58a6f50259efd35c2e6eba2453f9b2e8.png'/><br/> Назовите среднее время работы алгоритма быстрой сортировки для массива из n элементов Назовите среднее время работы алгоритма быстрой сортировки для массива из n элементов Назовите среднее время работы алгоритма быстрой сортировки для массива из n элементов",
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: true,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Вопрос 2',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: true,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Вопрос 3',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: true,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: 'Вопрос 4',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: 'Вопрос 5',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: 'Вопрос 6',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: 'Вопрос 7',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: 'Вопрос 8',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question: 'Вопрос 9',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
];

function createRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

module.exports = () => {
  const data = {
    questions,
    rating: [],
  };

  for (let i = 0; i < 100; i++) {
    const index = i + 1;
    const randomLetter = createRandomString(1);

    data.rating.push({
      id: index,
      name: `${randomLetter} UserUserUser UserUserUserUser ${index}`,
      score: index,
      time: index + 200,
    });
  }
  return data;
};
