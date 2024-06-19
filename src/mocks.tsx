import { Question } from './types';

const allQuestions: Record<string, Question[]> = {
  1: [
    {
      id: 1,
      questionId: 'mock1.txt',
      question: 'Что из перечисленного входит в зоны ответственности тимлида?',
      answers: [
        {
          id: 1,
          text: 'Найм, онбординг, обучение',
          correct: false,
        },
        {
          id: 2,
          text: 'Постановка и контроль выполнения задач',
          correct: false,
        },
        {
          id: 3,
          text: 'Планирование, решение конфликтных ситуаций',
          correct: false,
        },
        {
          id: 4,
          text: 'Всё перечисленное',
          correct: true,
        },
      ],
    },
    {
      id: 2,
      questionId: 'mock2.txt',
      question:
        'Стиль управления людьми на основе уровня развития сотрудников и отношения к задаче называется:',
      answers: [
        {
          id: 1,
          text: 'Разделяй и властвуй',
          correct: false,
        },
        {
          id: 2,
          text: 'Неформальное лидерство',
          correct: false,
        },
        {
          id: 3,
          text: 'Ситуационное лидерство',
          correct: true,
        },
        {
          id: 4,
          text: 'Холакратия',
          correct: false,
        },
      ],
    },
  ],
  2: [
    {
      id: 3,
      questionId: 'mock3.txt',
      question: 'Инцидент в продакшене, задача менеджера организовать:',
      answers: [
        {
          id: 1,
          text: 'Исправление проблемы',
          correct: false,
        },
        {
          id: 2,
          text: 'Поиск и устранение причины',
          correct: false,
        },
        {
          id: 3,
          text: 'Подстраховаться от повторения в будущем',
          correct: false,
        },
        {
          id: 4,
          text: 'Всё вышеперечисленное',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      questionId: 'mock4.txt',
      question: 'Инцидент в продакшене, задача менеджера организовать:',
      answers: [
        {
          id: 1,
          text: 'Поиск и наказание виновных',
          correct: false,
        },
        {
          id: 2,
          text: 'Исправление проблемы, поиск и устранение причины, страховку от повторения в будущем',
          correct: true,
        },
        {
          id: 3,
          text: 'Отправку всем участникам команды сообщения об инциденте',
          correct: false,
        },
        {
          id: 4,
          text: 'Панику и суету',
          correct: false,
        },
      ],
    },
  ],
  3: [
    {
      id: 5,
      questionId: 'mock5.txt',
      question:
        'Вы - руководитель сотрудника, у которого есть запрос на развитие, что предложите ему?',
      answers: [
        {
          id: 1,
          text: 'Пусть сам разберется',
          correct: false,
        },
        {
          id: 2,
          text: 'Составим ИПР',
          correct: true,
        },
        {
          id: 3,
          text: 'Отправлю к HR BP',
          correct: false,
        },
        {
          id: 4,
          text: 'Скину ссылку на статьи на Хабре',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      questionId: 'mock6.txt',
      question:
        'Составить наиболее полную картину по компетенциям своей команды ее руководителю может помочь:',
      answers: [
        {
          id: 1,
          text: 'Матрица компетенций',
          correct: true,
        },
        {
          id: 2,
          text: 'Резюме участников команды',
          correct: false,
        },
        {
          id: 3,
          text: 'Профиль на ХабрКарьере',
          correct: false,
        },
        {
          id: 4,
          text: 'Слухи из курилки',
          correct: false,
        },
      ],
    },
  ],
  4: [
    {
      id: 7,
      questionId: 'mock7.txt',
      question: 'Уровень мотивации сотрудника в «зоне комфорта» похож на:',
      answers: [
        {
          id: 1,
          text: 'Стресс',
          correct: false,
        },
        {
          id: 2,
          text: 'Демотивация',
          correct: false,
        },
        {
          id: 3,
          text: 'Зона отчуждения',
          correct: true,
        },
        {
          id: 4,
          text: 'Ни на что не похож',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      questionId: 'mock8.txt',
      question: 'Нанимающий менеджер на собеседовании должен рассказать кандидату о:',
      answers: [
        {
          id: 1,
          text: 'Компании и его бизнесе, ценностях и процессах',
          correct: false,
        },
        {
          id: 2,
          text: 'Зоне ответственности и задачах роли',
          correct: false,
        },
        {
          id: 3,
          text: 'Ожиданиях от кандидата',
          correct: false,
        },
        {
          id: 4,
          text: 'Всё вышеперечисленное',
          correct: true,
        },
      ],
    },
  ],
  5: [
    {
      id: 9,
      questionId: 'mock9.txt',
      question:
        'В ситуационном лидерстве руководитель при работе с сотрудником обращает внимание на его:',
      answers: [
        {
          id: 1,
          text: 'Уровень мотивации',
          correct: false,
        },
        {
          id: 2,
          text: 'Уровень компетенций',
          correct: false,
        },
        {
          id: 3,
          text: 'Уровень мотивации и компетенций',
          correct: true,
        },
        {
          id: 4,
          text: 'Ни на что, он руководит, а не внимание обращает',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      questionId: 'mock10.txt',
      question:
        'Подход к постановке целей, который помогает выбрать формулировку желаемого результата называется:',
      answers: [
        {
          id: 1,
          text: 'Bottleneck',
          correct: false,
        },
        {
          id: 2,
          text: 'SMART',
          correct: true,
        },
        {
          id: 3,
          text: 'T-Shape',
          correct: false,
        },
        {
          id: 4,
          text: 'JIRA',
          correct: false,
        },
      ],
    },
  ],
  6: [
    {
      id: 11,
      questionId: 'mock11.txt',
      question: 'Авторы ситуационного лидерства?',
      answers: [
        {
          id: 1,
          text: 'Пол Херси и Кен Бланшар',
          correct: true,
        },
        {
          id: 2,
          text: 'Адам Смит и Сакити Тоёда',
          correct: false,
        },
        {
          id: 3,
          text: 'Карл Маркс и Фридрих Энгельс',
          correct: false,
        },
        {
          id: 4,
          text: 'Рудольф и Адольф Дасслер',
          correct: false,
        },
      ],
    },
    {
      id: 12,
      questionId: 'mock12.txt',
      question:
        'Процесс передачи части функций руководителя другим управляющим или сотрудникам для достижения конкретных целей организации или предприятия – это:',
      answers: [
        {
          id: 1,
          text: 'Целеполагание',
          correct: false,
        },
        {
          id: 2,
          text: 'Делегирование',
          correct: true,
        },
        {
          id: 3,
          text: 'Ретроспектива',
          correct: false,
        },
        {
          id: 4,
          text: 'Онбординг',
          correct: false,
        },
      ],
    },
  ],
  7: [
    {
      id: 13,
      questionId: 'mock13.txt',
      question:
        'Постановка задачи по алгоритму и частый контроль выполнения задачи характерен для управленческого стиля:',
      answers: [
        {
          id: 1,
          text: 'Делегирующий',
          correct: false,
        },
        {
          id: 2,
          text: 'Поддерживающий',
          correct: false,
        },
        {
          id: 3,
          text: 'Инструктирующий',
          correct: true,
        },
        {
          id: 4,
          text: 'Направляющий',
          correct: false,
        },
      ],
    },
    {
      id: 14,
      questionId: 'mock14.txt',
      question: 'Получение обратной связи по работе сотрудника – это зона ответственности:',
      answers: [
        {
          id: 1,
          text: 'Самого сотрудника',
          correct: true,
        },
        {
          id: 2,
          text: 'Его руководителя',
          correct: false,
        },
        {
          id: 3,
          text: 'Руководителя его руководителя',
          correct: false,
        },
        {
          id: 4,
          text: 'HR BP',
          correct: false,
        },
      ],
    },
  ],
  8: [
    {
      id: 15,
      questionId: 'mock15.txt',
      question:
        'Опытного программиста в соответствии с его желаниями назначили тимлидом, в управленческих вопросах с ним следует использовать:',
      answers: [
        {
          id: 1,
          text: 'Инструктирующий стиль',
          correct: false,
        },
        {
          id: 2,
          text: 'Направляющий стиль',
          correct: true,
        },
        {
          id: 3,
          text: 'Поддерживающий стиль',
          correct: false,
        },
        {
          id: 4,
          text: 'Делегирующий стиль',
          correct: false,
        },
      ],
    },
    {
      id: 16,
      questionId: 'mock16.txt',
      question: 'Онбординг должен производиться:',
      answers: [
        {
          id: 1,
          text: 'Поэтапно',
          correct: false,
        },
        {
          id: 2,
          text: 'При поддержке наставника',
          correct: false,
        },
        {
          id: 3,
          text: 'С выдачей/получением обратной связи',
          correct: false,
        },
        {
          id: 4,
          text: 'Всё вышеперечисленное верно',
          correct: true,
        },
      ],
    },
  ],
  9: [
    {
      id: 17,
      questionId: 'mock17.txt',
      question: 'Помогают объективно оценить результаты изменений в процессе работы:',
      answers: [
        {
          id: 1,
          text: 'Метрики',
          correct: true,
        },
        {
          id: 2,
          text: 'Ретроспективы',
          correct: false,
        },
        {
          id: 3,
          text: 'Тимбилдинги',
          correct: false,
        },
        {
          id: 4,
          text: 'Встречи 1:1',
          correct: false,
        },
      ],
    },
    {
      id: 18,
      questionId: 'mock18.txt',
      question:
        'Величина количества людей, внезапная потеря которых может привести к срыву проекта называется:',
      answers: [
        {
          id: 1,
          text: 'Омега',
          correct: false,
        },
        {
          id: 2,
          text: 'Фактор 2',
          correct: false,
        },
        {
          id: 3,
          text: 'Bus-фактор',
          correct: true,
        },
        {
          id: 4,
          text: 'Альфа',
          correct: false,
        },
      ],
    },
  ],
};

const getRandomNum = (min = 0, max = 1) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const makeGameQuestions = () => {
  const result: Question[] = [];

  const values = Object.values(allQuestions);

  values.forEach((questionsArr) => {
    const randNum = getRandomNum();
    const question = questionsArr[randNum];

    result.push(question);
  });

  return result;
};
