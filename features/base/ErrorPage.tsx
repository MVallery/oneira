import { Link } from 'expo-router';
import { Image, View } from 'react-native';
import { Icon } from 'react-native-paper';

import CustomText from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { colors } from '@/utils/constants/theme';

export const ErrorPage = () => {
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
      <Title>Something went wrong</Title>
      <Icon
        source='emoticon-sad-outline'
        size={48}
        color={colors.onBackground}
      />
      <Title size='sm' style={{ marginBottom: 10 }}>
        This site is still in Beta and we're actively working on fixing issues.
      </Title>
      <CustomText style={{ marginVertical: 10 }}>
        Try refreshing the page or go back to the{' '}
        <Link
          href='/'
          style={{ textDecorationLine: 'underline', color: colors.primary }}
        >
          home page
        </Link>
      </CustomText>
      <CustomText>
        If the problem persists, please contact support at contact@edmetrix.app
      </CustomText>
    </View>
  );
};
