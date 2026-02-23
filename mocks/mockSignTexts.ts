import { mockDreams } from './mockDreams';
import { mockSigns } from './mockSigns';

export const mockSignTextsObj = {
  1: [
    {
      id: '1',
      dream: mockDreams[0],
      text: ` I wish I could fly in real life too! I was flying like a bird, with my arms spread out. I could feel the wind on my face and the sun on my skin.`,
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

export const mockSignText = [
  ...mockSignTextsObj[1],
  ...mockSignTextsObj[2],
  ...mockSignTextsObj[3],
];
