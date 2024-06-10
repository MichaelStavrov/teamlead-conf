import { DEV } from 'src/appSettings';
import { LogAnswer, Question, Rating, ResultData } from 'src/types';

const hostName = window?.location?.hostname ?? 'localhost';

const BASE_URL = `http://${hostName}:8080`;

export const service = {
  async fetchQuestions(params: string[]): Promise<Question[]> {
    if (DEV) {
      const res = await fetch('http://localhost:3001/questions');
      const data = await res.json();

      return data;
    } else {
      const res = await fetch(`${BASE_URL}/app/start?category=${params.join(',')}`);
      const data = await res.json();

      if (data === null) {
        throw new Error('/start response is null');
      }
      const questions = data['questions'];
      if (questions === null) {
        throw new Error('/start response does not contain questions array');
      }
      if (!Array.isArray(questions)) throw new Error('/start response is not an array');

      return questions;
    }
  },

  async fetchRating(): Promise<Rating[]> {
    const url = DEV ? 'http://localhost:3001/rating' : `${BASE_URL}/app/rating`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
  },

  async sendResult(data: ResultData): Promise<void> {
    await fetch(`${BASE_URL}/app/rating`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },

  async deleteUserResult(id: number): Promise<void> {
    const res = await fetch(`${BASE_URL}/app/rating/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    return data;
  },

  async logAnswer(data: LogAnswer): Promise<void> {
    await fetch(`${BASE_URL}/app/loganswer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};
