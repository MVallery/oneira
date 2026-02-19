import CustomText from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { useAppTheme } from '@/state/themeContext';
import { Image, View } from 'react-native';

export const MaintenancePage = () => {
  const { colors } = useAppTheme();

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
