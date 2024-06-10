import { Question, Rating } from './types';
import img from 'assets/images/test.png';

export const questions: Question[] = [
  {
    id: 1,
    questionId: 'mock1.txt',
    question: `<span>Вопрос 1 <br/><br/><img src=${img}/><br/>Назовите среднее <b>время работы</b> алгоритма быстрой сортировки для массива из n элементов Назовите среднее время работы алгоритма быстрой сортировки для массива из n</span>`,
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
    questionId: 'mock2.txt',
    question:
      'Вопрос 1 Назовите среднее время работы алгоритма быстрой сортировки для массива из n элементов',
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
    questionId: 'mock3.txt',
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
    questionId: 'mock4.txt',
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
    questionId: 'mock5.txt',
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
    questionId: 'mock6.txt',
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
    questionId: 'mock7.txt',
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
    questionId: 'mock8.txt',
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
    questionId: 'mock9.txt',
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
  {
    id: 10,
    questionId: 'mock10.txt',
    question: 'Вопрос 10',
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
export const rating: Rating[] = [
  {
    id: 1,
    name: 'Александр Иванов',
    score: 1,
    time: 4,
  },
  {
    id: 2,
    name: 'Сергей Петров',
    score: 3,
    time: 62,
  },
  {
    id: 3,
    name: 'Джейсон Стейтем',
    score: 3,
    time: 57,
  },
  {
    id: 4,
    name: 'Иван Сидоров',
    score: 6,
    time: 300,
  },

  {
    name: 'Алексей Корнеев',
    score: 5,
    id: 8,
    time: 300,
  },
  {
    name: 'Райан Гослинг',
    score: 5,
    id: 7,
    time: 2,
  },
];
