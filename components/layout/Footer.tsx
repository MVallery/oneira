import CustomLink from '@/components/ui/Link';
import CustomText from '@/components/ui/Text';
import { useAppTheme } from '@/state/themeContext';
import { Link, usePathname } from 'expo-router';
import { View } from 'react-native';
const Footer = ({}) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const pathname = usePathname();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        width: '100%',
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          maxWidth: 700,
          margin: 'auto',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <View>
          <CustomLink
            size='sm'
            buttonStyle={false}
            href='/terms_of_service'
            style={{ color: colors.onBackground, padding: 10 }}
            replace={true}
          >
            Terms of Service
          </CustomLink>
          <CustomLink
            size='sm'
            buttonStyle={false}
            href='/privacy_policy'
            style={{ color: colors.onBackground, padding: 10 }}
            replace={true}
          >
            Privacy Policy
          </CustomLink>
        </View>
        <View>
          <CustomText>Contact us:</CustomText>
          <Link
            href='mailto:oneira.app@gmail.com'
            style={{ color: colors.onBackground, padding: 10 }}
          >
            contact@oneira.app
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Footer;
