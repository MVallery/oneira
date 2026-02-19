import { mockDreams } from './mockDreams';
const getDreamCount = (signId: string) => {
  return mockDreams.reduce(
    (acc, dream) =>
      acc + dream.signs.filter((sign) => sign.id === signId).length,
    0,
  );
};
export const signs = [
  {
    id: '1',
    user: '1',
    category: '3',
    name: 'Flying',
    color: '#FF5733',
  },
  {
    id: '2',
    user: '1',
    category: '3',
    name: 'Falling Down',
    color: '#33FF57',
  },
  {
    id: '3',
    user: '1',
    category: '3',
    name: 'Running',
    color: '#3357FF',
  },
  {
    id: '4',
    user: '1',
    category: '3',
    name: 'Swimming In Ocean',
    color: '#FF33A1',
  },
  {
    id: '5',
    user: '1',
    category: '1',
    name: 'Huge City',
    color: '#FF5733',
  },

  {
    id: '6',
    user: '1',
    category: '1',
    name: 'Beach',
    color: '#33FF57',
  },
  {
    id: '7',
    user: '1',
    category: '1',
    name: 'Foggy Forest',
    color: '#3357FF',
  },
  {
    id: '8',
    user: '1',
    category: '1',
    name: 'Mountains',
    color: '#91436d',
  },
  {
    id: '9',
    user: '1',
    category: '2',
    name: 'Christine',
    characterGroup: 'friends',
    color: '#040504',
  },
  {
    id: '10',
    user: '1',
    category: '2',
    name: 'John',
    color: '#33FF57',
  },
  {
    id: '11',
    user: '1',
    category: '2',
    name: 'Alice',
    characterGroup: 'work',
    color: '#3357FF',
  },
  {
    id: '12',
    user: '1',
    category: '2',
    name: 'Bob',
    color: '#FF33A1',
  },
  {
    id: '13',
    user: '1',
    category: '1',
    name: 'Sunset',
    color: '#FF5733',
  },
  {
    id: '14',
    user: '1',
    category: '1',
    name: 'Gathering',
    color: '#FF5733',
  },
  {
    id: '15',
    user: '1',
    category: '4',
    name: 'Food',
    color: '#FF5733',
  },
];

export const mockSigns = signs.map((sign) => {
  return {
    ...sign,
    count: getDreamCount(sign.id),
  };
});
