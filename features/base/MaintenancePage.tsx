import { Image, View } from 'react-native';

import CustomText from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { colors } from '@/utils/constants/theme';

export const MaintenancePage = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Image source={require('@/assets/images/logo.png')} />
      <Title>Site Down for Maintenance</Title>
      <CustomText>
        The site is currently down for maintenance. Please check back later.
      </CustomText>
    </View>
  );
};
