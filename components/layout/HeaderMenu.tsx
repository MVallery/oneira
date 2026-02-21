import { Link, router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-paper';

import { CustomMenu, CustomMenuItem } from '@/components/ui/Menu';
import { useLogout } from '@/features/account/hooks/useLogout';
import { colors } from '@/utils/constants/theme';

export const HeaderMenu = () => {
  const { error, logout } = useLogout();
  const styles = StyleSheet.create({
    classHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      backgroundColor: colors.secondaryDark,
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
  });

  const editSeatingChart = () => {};
  return (
    <View style={{ position: 'relative' }}>
      <CustomMenu
        anchor={<Icon source='account' size={24} color={colors.onSecondary} />}
        anchorPosition='bottom'
      >
        <Link href={`/account/settings`} asChild replace={true}>
          <CustomMenuItem
            title={'Settings'}
            leadingIcon='cog'
            onPress={() => router.replace(`/account/settings`)}
          />
        </Link>
        <CustomMenuItem
          title='Sign Out'
          onPress={logout}
          leadingIcon='logout'
        ></CustomMenuItem>
      </CustomMenu>
    </View>
  );
};
