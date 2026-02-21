import PageContainer from '@/components/layout/Page';
import CustomText from '@/components/ui/Text';
import AuthSharedScreen from '@/features/account/AuthSharedScreen';
import { colors } from '@/utils/constants/theme';
import { useEffect, useState } from 'react';
import { Linking, View } from 'react-native';

// import { getSupabaseClient } from './supabase/supabase';

import CustomLink from '@/components/ui/Link';
// const supabase = getSupabaseClient();

const PasswordResetScreen = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [passwordRecovery, setPasswordRecovery] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (acctData: any) => {
    setLoading(true);
    // const { data, error } = await supabase.auth.updateUser({
    //   password: acctData.password,
    // });
    // if (data && data.user) {
    //   router.replace('/auth/login');
    //   router.replace({
    //     pathname: '/auth/login',
    //     params: { fromReset: 'true' },
    //   });
    // }
    setLoading(false);
  };

  useEffect(() => {
    // supabase.auth.onAuthStateChange(async (event: any, session: any) => {
    //   if (event == 'PASSWORD_RECOVERY') {
    //     setPasswordRecovery(true);
    //   }
    // });

    // Handle URL parameters if they exist, it means the user used an old link to reset their password
    Linking.getInitialURL().then((url) => {
      const fragment = url?.split('#')[1];
      const params = new URLSearchParams(fragment);
      const error = params.get('error_description');
      setError(error);
      // handle/display error if needed
    });
  }, []);

  return (
    <PageContainer
      title='Oneira - Reset Password'
      description='Use Oneira now to track and analyze your student data right from the seating chart.'
    >
      <AuthSharedScreen
        title='Reset Password'
        onSubmit={onSubmit}
        hideEmail={true}
        hidePassword={!passwordRecovery}
        buttonText='Reset Password'
        loading={loading}
      >
        {error && (
          <View style={{ paddingTop: 20 }}>
            <CustomText color={colors.onErrorContainer}>{error}</CustomText>
            <CustomLink
              href='/auth/forgot_password'
              size='sm'
              colorSaturation='light'
              type='secondary'
            >
              Get a new reset link
            </CustomLink>
          </View>
        )}
        {data && (
          <CustomText
            style={{ maxWidth: 278, paddingTop: 20 }}
            color={colors.primary}
          >
            Password updated successfully! Please login with your new password.
          </CustomText>
        )}
      </AuthSharedScreen>
    </PageContainer>
  );
};

export default PasswordResetScreen;
