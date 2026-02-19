import { RootState } from '@/state/store';
import { useAppTheme } from '@/state/themeContext';
import { Link, usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { HeaderMenu } from './HeaderMenu';
const classesButtonPaths = ['/', '/privacy_policy', '/terms_of_service'];
const Header = ({}) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const pathname = usePathname();
  const [showClassesButton, setShowClassesButton] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    setShowClassesButton(classesButtonPaths.includes(pathname));
  }, [pathname]);

  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        width: '100%',
      }}
    >
      <View>
        <Link href='/' asChild replace={true}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={{ width: 100, height: 50, marginLeft: 20 }}
          />
        </Link>
        {/* <Text style={{ color: colors.onSecondary }}>Testing Header {pathname}</Text> */}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        {showClassesButton && user?.id && user.teacher?.id ? (
          <Link
            href='/'
            replace={true}
            style={{
              display: 'flex',
              color: colors.onBackground,
              gap: 8,
              paddingHorizontal: 10,
            }}
          >
            Classes
            <Icon size={20} source='account-box-multiple'></Icon>
          </Link>
        ) : null}
        {user?.id && user.teacher?.id ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 30,
              alignItems: 'center',
              paddingRight: 20,
            }}
          >
            <HeaderMenu />
          </View>
        ) : (
          <Link
            style={{
              display: 'flex',
              color: colors.onBackground,
              gap: 8,
              paddingHorizontal: 10,
            }}
            href='/auth/signup'
          >
            Sign Up<Icon size={20} source='arrow-right'></Icon>
          </Link>
        )}
      </View>
    </View>
  );
};

export default Header;
