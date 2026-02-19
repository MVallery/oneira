import PageContainer from '@/components/layout/Page';
import CustomText from '@/components/ui/Text';
import AuthSharedScreen from '@/features/account/AuthSharedScreen';
import { useAppTheme } from '@/state/themeContext';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getSupabaseClient } from './supabase/supabase';
// const supabase = getSupabaseClient();

const ForgotPasswordScreen = () => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [resetRecovery, setResetRecovery] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (acctData: any) => {
    // setLoading(true);
    // const { data, error } = await supabase.auth.resetPasswordForEmail(
    //   acctData.email,
    //   {
    //     redirectTo:
    //       (isWeb
    //         ? process.env.EXPO_PUBLIC_URL
    //         : process.env.EXPO_PUBLIC_URL_MOBILE) + '/auth/reset_password',
    //   },
    // );
    // if (error) {
    //   // console.error('Error signing up:', error);
    //   setError(error.message);
    // } else if (data) {
    //   // console.log('Sign up successful:', data);
    //   setData(data);
    // }
    // setLoading(false);
  };

  useEffect(() => {
    // supabase.auth.onAuthStateChange(async (event: any, session: any) => {
    //   if (event == 'PASSWORD_RECOVERY') {
    //     setResetRecovery(true);
    //   }
    // });
  }, []);
  return (
    <PageContainer
      title='Oneira - Forgot Password'
      description='Use Oneira now to track and analyze your dreams, gain insights, and unlock the mysteries of your subconscious mind. Sign up today and start your journey of self-discovery through your dreams.'
    >
      <AuthSharedScreen
        title='Forgot Password?'
        loading={loading}
        onSubmit={onSubmit}
        buttonText='Reset Password'
        hidePassword={true}
        linkText='Login'
        linkHref='/auth/login'
      >
        {error && (
          <CustomText color={colors.onErrorContainer}>{error}</CustomText>
        )}
        {data && (
          <CustomText
            style={{ maxWidth: 278, paddingTop: 20 }}
            color={colors.primaryExtraLight}
          >
            A password reset link has been sent to your email. Please check your
            inbox.
          </CustomText>
        )}
      </AuthSharedScreen>
    </PageContainer>
  );
};

export default ForgotPasswordScreen;
