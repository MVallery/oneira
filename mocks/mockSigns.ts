import { mockDreams } from './mockDreams';
import { signs } from './signs';
const getDreamCount = (signId: string) => {
  return mockDreams.reduce(
    (acc, dream) =>
      acc + dream.signs?.filter((sign) => sign.id === signId).length,
    0,
  );
};

export const mockSigns = signs.map((sign) => {
  return {
    ...sign,
    count: getDreamCount(sign.id),
  };
});
