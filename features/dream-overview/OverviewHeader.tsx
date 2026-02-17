import { CustomSelect } from '@/components/form/Select';
import Title from '@/components/ui/Title';
import { mockDreams } from '@/mocks/mockDreams';
import { View } from 'react-native';
import { DreamCountItem } from './DreamCountItem';
// TO DO: make filter work
export const OverviewHeader = () => {
  return (
    <View>
      <View>
        <Title>Dream Analysis</Title>
        <CustomSelect
          options={[
            { value: 7, label: 'Past Week' },
            { value: 30, label: 'Past 30 days' },
            { value: 365, label: 'Past Year' },
          ]}
          placeholder='Select timeframe'
          name='timeframe'
        />
      </View>
      <View>
        <DreamCountItem count={mockDreams.length} title='Logged Dreams' />
        <DreamCountItem
          count={mockDreams.filter((dream) => dream.level === 2).length}
          title='Lucid Dreams'
        />
      </View>
    </View>
  );
};
