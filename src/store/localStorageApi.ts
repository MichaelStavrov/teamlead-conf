export const getValue = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};

export const setValue = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const keys = {
  results: 'results',
} as const;
