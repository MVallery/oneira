import { mockSigns } from '@/mocks/mockSigns';
import { View } from 'react-native';
import { SignFilters } from './SignFilters';

export const SignAnalysisScreen = () => {
  return (
    <View>
      <SignFilters />
      {mockSigns.map((sign) => (
        <View key={sign.id}>{sign.name}</View>
      ))}
    </View>
  );
};
