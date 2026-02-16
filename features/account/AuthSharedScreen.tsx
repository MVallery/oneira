import CustomInput from '@/components/form/Input';
import CustomButton from '@/components/ui/Button';
import CustomLink from '@/components/ui/Link';
import CustomText from '@/components/ui/Text';
import { useAuthForm } from '@/features/account/hooks/useAuth';
import { useAppTheme } from '@/state/themeContext';
import { isIOS, isWeb } from '@/utils/constants/platform';
import { Image, KeyboardAvoidingView, View } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthSharedScreenProps = {
  onSubmit: (data: { email: string; password?: string }) => void;
  buttonText: string;
  linkText?: string;
  linkHref?: string;
  children?: any;
  hidePassword?: boolean;
  hideEmail?: boolean;
  title?: string;
  loading?: boolean;
  paragraph?: string;
  type?: 'login' | 'signup';
};

const AuthSharedScreen = ({
  onSubmit,
  buttonText,
  linkText,
  linkHref,
  children,
  hidePassword,
  hideEmail,
  title,
  loading,
  paragraph,
  type,
}: AuthSharedScreenProps) => {
  const { control, handleSubmit, errors } = useAuthForm(onSubmit);
  const { theme } = useAppTheme();
  const { colors } = theme;
  // const saveEmail = async (email: string) => {
  //   await AsyncStorage.setItem("savedEmail", email);
  // };

  // const loadEmail = async () => {
  //   return await AsyncStorage.getItem("savedEmail") || "";
  // };
  // const imgSrc = '@/assets/images/logo-stack.' + (isWeb ? 'svg' : 'png');
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
      }}
      behavior={isIOS ? 'padding' : 'height'}
    >
      <Image
        style={{ width: 250, height: 163 }}
        source={require('@/assets/images/logo-stack.png')}
      />
      {title && (
        <CustomText
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            color: colors.onBackground,
            marginBottom: 10,
          }}
        >
          {title}
        </CustomText>
      )}
      {paragraph && (
        <CustomText
          style={{
            fontSize: 18,
            color: colors.onBackground,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          {paragraph}
        </CustomText>
      )}
      <View style={isWeb ? { maxWidth: 300, width: 300 } : { width: 300 }}>
        {!hideEmail && (
          <CustomInput
            control={control}
            label='Email'
            name='email'
            type='email'
            required={true}
            errorMessage={errors.email?.message}
          />
        )}
        {!hidePassword && (
          <CustomInput
            control={control}
            label='Password'
            name='password'
            type='password'
            validate={type !== 'login'}
            required={true}
            errorMessage={errors.password?.message}
          />
        )}
      </View>
      {(!hideEmail || !hidePassword) && (
        <CustomButton
          onPress={handleSubmit}
          icon='arrow-right'
          loading={loading}
        >
          {buttonText}
        </CustomButton>
      )}
      {linkHref && (
        <CustomLink
          href={linkHref}
          size='sm'
          colorSaturation='light'
          type='secondary'
        >
          {linkText}
        </CustomLink>
      )}
      {children}
    </KeyboardAvoidingView>
  );
};

export default AuthSharedScreen;
