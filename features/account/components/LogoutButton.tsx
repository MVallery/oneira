import { useAppTheme } from '@/state/context/themeContext';
import { StyleSheet } from 'react-native';
import { getSupabaseClient } from '../supabase/supabase';
const supabase = getSupabaseClient();
import CustomButton from '@/components/ui/Button';
import { useLogout } from '../hooks/useLogout';

const LogoutButton = ({ children }: { children?: any }) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const {error, logout} = useLogout();
  const styles = StyleSheet.create({
    link: {
      color: colors.onBackground,
      padding: 20
    }
  });

  return (
    <CustomButton onPress={logout} icon="logout">
      {children ? children : 'Logout'}
    </CustomButton>
  );
};

export default LogoutButton;
