import { mockDreams } from './mockDreams';
import { mockSigns } from './mockSigns';

export const mockSignTexts = {
  1: [
    {
      id: '1',
      dream: mockDreams[0],
      text: 'flying over a city',
      signs: [mockSigns[0]],
    },
  ],

  2: [
    {
      id: '2',
      dream: mockDreams[1],
      text: 'falling down gently',
      signs: [mockSigns[1]],
    },
    {
      id: '3',
      dream: mockDreams[1],
      text: 'clouds and the sunset',
      signs: [mockSigns[12]],
    },
  ],

  3: [
    {
      id: '4',
      dream: mockDreams[2],
      text: 'big family gathering',
      signs: [mockSigns[8], mockSigns[13]],
    },
    {
      id: '5',
      dream: mockDreams[2],
      text: 'delicious food',
      signs: [mockSigns[14]],
    },
  ],
};
