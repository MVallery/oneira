import PageContainer from '@/components/layout/Page';
import CustomText from '@/components/ui/Text';
import AuthSharedScreen from '@/features/account/AuthSharedScreen';
import { useAppTheme } from '@/state/themeContext';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSupaUser } from './state/authSlice';
import { getSupabaseClient } from './supabase/supabase';
const supabase = getSupabaseClient();

const LoginScreen = () => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { fromReset } = useLocalSearchParams();
  const onSubmit = async (acctData: any) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: acctData.email,
        password: acctData.password,
      });

      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        dispatch(setSupaUser({ id: data.user.id, email: data.user.email }));
        router.replace('/classes/all_classes');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };
  // // for testing - auto logs in
  // useEffect(() => {
  //       const data = {
  //     user: {
  //       id: 'a258ab5e-2c84-4b58-a32a-20a0a7655309',
  //       email: 'vallery.melissa+1@gmail.com'
  //     }
  //   }

  //   // setLoading(false);
  //   // console.log('Login data:', data, error);
  //   // if (error) {
  //   //   setError(error.message);
  //   // } else {
  //     dispatch(setUser({ id: data.user.id, email: data.user.email, type: 'Teacher' }));
  //     router.replace('/classes/all_classes');
  // }, [])
  const styles = StyleSheet.create({
    link: {
      color: colors.onBackground,
      padding: 20,
    },
  });

  return (
    <PageContainer
      title='Oneira - Login'
      description='Login to Oneira now to Analyze your student data from the seating chart.'
    >
      <AuthSharedScreen
        title='Login'
        onSubmit={onSubmit}
        type='login'
        buttonText='Login'
        linkText='Sign Up'
        linkHref='/auth/signup'
        loading={loading}
      >
        <Link style={styles.link} href='/auth/forgot_password' replace={true}>
          Forgot Password?
        </Link>
        {error && (
          <CustomText color={colors.onErrorContainer}>{error}</CustomText>
        )}
        {fromReset && (
          <CustomText
            style={{ maxWidth: 278, paddingTop: 20 }}
            color={colors.primaryExtraLight}
          >
            Password updated successfully! Please login with your new password.
          </CustomText>
        )}
        {/* <LogoutButton/> */}
      </AuthSharedScreen>
    </PageContainer>
  );
};

export default LoginScreen;
