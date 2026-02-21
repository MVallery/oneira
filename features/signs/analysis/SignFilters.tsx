import { View } from 'react-native';

import CustomInput from '@/components/form/Input';
import { FlexView } from '@/components/layout/BaseViews';
import Title from '@/components/ui/Title';
// build the below item but using styled components

export const SignFilters = () => {
  return (
    <View>
      <FlexView>
        <Title>Dream Analysis</Title>
        <CustomInput placeholder='Search...' name='Search' />
      </FlexView>
      <FlexView>
        <CustomInput label='Sort by:' placeholder='Category' name='Category' />
        <CustomInput label='Display' placeholder='Past Week' name='Timeframe' />
      </FlexView>
    </View>
  );
};
