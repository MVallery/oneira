import { Tag } from '@/components/ui/Tag';
import { mockSigns } from '@/mocks/mockSigns';
import { getCategory } from '@/utils/helpers/general';
import { View } from 'react-native';
import { SignFilters } from './SignFilters';

export const SignAnalysisScreen = () => {
  return (
    <View>
      <SignFilters />
      {mockSigns.map((sign) => (
        <Tag
          label={sign.name}
          category={getCategory(sign.category)}
          key={sign.id}
        />
      ))}
    </View>
  );
};
