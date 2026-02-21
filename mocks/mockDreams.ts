import { signs } from './signs';

export const mockDreams = [
  // maybe they tag flying and all flying highlights
  {
    id: '1',
    user: '1',
    title: 'Flying over a city',
    description: `I was flying over a city and it felt amazing. First I was scared, but then I realized I could control 
    it and it was so much fun. The city looked beautiful from above, with all the lights and buildings. I felt free and 
    happy. I wish I could fly in real life too! I was flying like a bird, with my arms spread out. I could feel the wind 
    on my face and the sun on my skin. It was a wonderful experience. It felt so real, like I was really flying. I woke 
    up feeling happy and inspired.`,
    date: '2024-06-01T10:00:00Z',
    lastUpdated: '2024-06-01T12:00:00Z',
    favorite: false,
    signs: [signs[0], signs[5], signs[7]],
    emotions: ['calm', 'happy', 'excited'],

    level: 0,
    control: false,
    strategy: null,

    connection: false,
    connectionDetails: null,
    recurring: false,
  },
  {
    id: '2',
    user: '1',
    title: 'Falling down gently',
    description: `I was falling down gently from the sky. It was a strange sensation, but not scary at all. I felt like I was 
    floating and drifting down slowly. The world around me looked peaceful and calm. I could see the clouds and the sunset in the distance. It was a beautiful sight. I felt relaxed and at ease. I woke up feeling refreshed and calm. One
    crazy thing was that I could see the ground getting closer, but I wasn't worried at all. I felt like I could fly. It was like I knew I would land safely. I was more focused on where I was falling which was a beautiful tropical beach. I felt like I was in a dream within a dream, where I was aware that I was dreaming and could control it. It was a surreal experience.`,
    date: '2024-06-02T10:00:00Z',
    lastUpdated: '2024-06-02T12:00:00Z',
    favorite: true,
    signs: [signs[1], signs[7], signs[0]],
    emotions: ['calmn'],

    level: 1,
    control: false,
    strategy: null,
    connection: false,
    connectionDetails: null,
    recurring: false,
  },
  {
    id: '3',
    user: '1',
    title: 'Big Family Gathering',
    description: `I was at a big family gathering, surrounded by relatives I hadn\'t seen in years. The house was filled with 
    laughter and chatter, and the aroma of delicious food wafted through the air. I felt a mix of emotions - happiness to be
     reunited with loved ones, but also a tinge of sadness for those who were no longer with us. I also just felt a bit 
     overwhelmed by how many people were there and how many people I just wasn't that close with being there. I was getting
     very anxious and wanted to leave, but I also felt guilty for wanting to leave. I woke up feeling a bit conflicted about 
     the whole experience. It was a dream that made me reflect on my relationships with my family and how I feel about social 
     gatherings in general.`,
    date: '2024-06-03T10:00:00Z',
    lastUpdated: '2024-06-03T12:00:00Z',
    favorite: false,
    signs: [signs[8], signs[9], signs[10], signs[11]],
    emotions: ['anxiety', 'excited'],

    level: 2,
    control: false,
    strategy: null,
    connection: true,
    connectionDetails:
      'I have a family gathering coming up in real life in one week. So I know it has been on my mind a lot',
    recurring: true,
  },
];
