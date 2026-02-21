import { StyleSheet } from 'react-native';
// const supabase = getSupabaseClient();
import { colors } from '@/utils/constants/theme';

const LogoutButton = ({ children }: { children?: any }) => {
  // const {error, logout} = useLogout();
  const styles = StyleSheet.create({
    link: {
      color: colors.onBackground,
      padding: 20,
    },
  });

  return (
    <></>
    // <CustomButton onPress={logout} icon="logout">
    //   {children ? children : 'Logout'}
    // </CustomButton>
  );
};

export default LogoutButton;
