import { View } from 'react-native';
import { DreamSignSection } from './DreamSignSection';
import { OverviewHeader } from './OverviewHeader';

import Title from '@/components/ui/Title';
import { mockSigns } from '@/mocks/mockSigns';
import { baseStyles } from '@/utils/styles/baseStyles';

export const DreamOverviewScreen = () => {
  return (
    <View style={[baseStyles.container]}>
      <OverviewHeader />
      <Title size='sm'>Top Dream Signs</Title>
      <DreamSignSection
        title='Characters'
        signs={mockSigns.filter((sign) => sign.category === '3')}
      />
      <DreamSignSection
        title='Settings'
        signs={mockSigns.filter((sign) => sign.category === '1')}
      />
      <DreamSignSection
        title='Themes'
        signs={mockSigns.filter((sign) => sign.category === '2')}
      />
      <DreamSignSection
        title='Other'
        signs={mockSigns.filter((sign) => sign.category === '4')}
      />
    </View>
  );
};
