import PageContainer from '@/components/layout/Page';
import AuthSharedScreen from '@/features/account/AuthSharedScreen';
import { useAppTheme } from '@/state/themeContext';
// import { useSignup } from './hooks/useSignup';
// import { getSupabaseClient } from './supabase/supabase';
// const supabase = getSupabaseClient();

const SignupScreen = ({ paragraph }: { paragraph: string }) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  // const { error, loading, data, signup } = useSignup();

  return (
    <PageContainer
      title='Oneira - Sign up'
      description='Sign up to Oneira now to track and analyze your student data right from the seating chart.'
    >
      <AuthSharedScreen
        title='Sign Up'
        onSubmit={signup}
        buttonText='Sign Up'
        linkText='Login'
        linkHref='/auth/login'
        // loading={loading}
        paragraph={paragraph}
      >
        {/* {error && (
          <CustomText
            color={colors.onErrorContainer}
            style={{ maxWidth: 420, paddingTop: 20, lineHeight: 25 }}
          >
            {error}
          </CustomText>
        )}
        {data && !error && (
          <CustomText
            style={{ maxWidth: 278, paddingTop: 20 }}
            color={colors.primaryExtraLight}
          >
            Please click the link in your email for account confirmation.
          </CustomText>
        )} */}
      </AuthSharedScreen>
    </PageContainer>
  );
};

export default SignupScreen;
