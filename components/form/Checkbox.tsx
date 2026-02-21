import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';

import CustomText from '@/components/ui/Text';
import { colors } from '@/utils/constants/theme';

export const CustomCheckbox = ({
  label = '',
  onPress,
  status,
}: {
  label?: string;
  onPress: any;
  status: boolean;
}) => {
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
