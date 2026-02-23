import { View } from 'react-native';

import { CustomSelect } from '@/components/form/Select';
import { FlexCenterView } from '@/components/layout/BaseViews';
import Title from '@/components/ui/Title';
import { mockDreams } from '@/mocks/mockDreams';
import styled from 'styled-components/native';
import { DreamCountItem } from './DreamCountItem';
// TO DO: make filter work
const OverviewHeaderView = styled(View)`
  justify-content: space-between;
`;
export const OverviewHeader = () => {
  return (
    <OverviewHeaderView>
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
      <FlexCenterView>
        <DreamCountItem count={mockDreams.length} title='Logged Dreams' />
        <DreamCountItem
          count={mockDreams.filter((dream) => dream.level === 2).length}
          title='Lucid Dreams'
        />
      </FlexCenterView>
    </OverviewHeaderView>
  );
};
