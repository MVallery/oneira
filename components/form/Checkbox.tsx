// properties
// size, sm md lg
// textLocation, top, bottom, right
// color?

import CustomText from '@/components/ui/Text';
import { useAppTheme } from '@/state/themeContext';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';

export const CustomCheckbox = ({
  label = '',
  onPress,
  status,
}: {
  label?: string;
  onPress: any;
  status: boolean;
}) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const checkBox = (
    <Checkbox
      status={status ? 'checked' : 'unchecked'}
      onPress={onPress}
      color={colors.primary}
      uncheckedColor={colors.onSecondary}
    ></Checkbox>
  );
  return label ? (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {checkBox}
      <CustomText style={{ color: colors.onBackground }}>{label}</CustomText>
    </View>
  ) : (
    checkBox
  );
};
