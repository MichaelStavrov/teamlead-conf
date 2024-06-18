import { getValue, keys, setValue } from 'src/store/localStorageApi';
import { LsRatingData } from 'src/types';

export const checkLsRatingData = () => {
  const data = getValue<LsRatingData>(keys.results);

  if (!Array.isArray(data) && data?.version === '2.0.0') return;

  setValue(keys.results, { version: '2.0.0', data: [] });
};
