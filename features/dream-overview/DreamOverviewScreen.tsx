import Title from '@/components/ui/Title';
import { mockSigns } from '@/mocks/mockSigns';
import { View } from 'react-native';
import { DreamSignSection } from './DreamSignSection';
import { OverviewHeader } from './OverviewHeader';

export const DreamOverviewScreen = () => {
  return (
    <View>
      <OverviewHeader />
      <Title size='sm'>Top Dream Signs</Title>
      <DreamSignSection
        title='Characters'
        signs={mockSigns.filter((sign) => sign.categoryId === '3')}
      />
      <DreamSignSection
        title='Settings'
        signs={mockSigns.filter((sign) => sign.categoryId === '1')}
      />
      <DreamSignSection
        title='Themes'
        signs={mockSigns.filter((sign) => sign.categoryId === '2')}
      />
      <DreamSignSection
        title='Other'
        signs={mockSigns.filter((sign) => sign.categoryId === '4')}
      />
    </View>
  );
};
