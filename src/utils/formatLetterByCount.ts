export const formatLetterByCount = (letter: string, count: number) => {
  if (count === 1) return letter;
  if (count <= 4) return `${letter}а`;

  return `${letter}ов`;
};
