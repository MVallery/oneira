import { useState } from 'react';

export const useSharedState = () => {
  const [sharedState1, setSharedState1] = useState<string>('Initial State 1');
  const [sharedState2, setSharedState2] = useState<number>(0);
  const [sharedState3, setSharedState3] = useState<boolean>(false);

  const updateState1 = (newValue: string) => {
    setSharedState1(newValue);
  };

  const updateState2 = (newValue: number) => {
    setSharedState2(newValue);
  };

  const updateState3 = (newValue: boolean) => {
    setSharedState3(newValue);
  };

  return { 
    sharedState1, 
    sharedState2, 
    sharedState3, 
    updateState1, 
    updateState2, 
    updateState3 
  };
};