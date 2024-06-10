export const secondsToTime = (time: number) => {
  const remainder = time % 60;
  const seconds = remainder.toString().length < 2 ? `0${remainder}` : remainder;
  const minutes = Math.floor(time / 60);

  if (remainder === 0) return `${minutes}:00`;

  return `${minutes}:${seconds}`;
};
