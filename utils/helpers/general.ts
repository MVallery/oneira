export const clone = <T>(obj: T): T => obj ? JSON.parse(JSON.stringify(obj) ) : obj;

export const getGrade = (n: string) => {
  switch (n) {
    case '0':
      return 'Kinder';
    case '1':
      return '1st';
    case '2':
      return '2nd';
    case '3':
      return '3rd';
    default:
      return `${n}th`;
  }
};

export const capitalize = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};


export const shuffleArray = (array: any[]) => {
  let arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return ([...arrayCopy])
  }

export const selectRand = (array: any[]) => {
  return shuffleArray(array)[0]
}