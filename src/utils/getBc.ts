export const getBc = (showBc: boolean, id: number, correct: boolean, userAnswerId?: number) => {
  if (!showBc) return '';

  if (correct) return 'var(--success)';

  if (userAnswerId === id && !correct) {
    return 'var(--danger)';
  }

  if (userAnswerId !== id && !correct) {
    return 'linear-gradient(#304a5d, #02111c)';
  }
};
