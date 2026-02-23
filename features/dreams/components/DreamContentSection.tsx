// dream title, date, description, signs
import CustomText from '@/components/ui/Text';
import { View } from 'react-native';

export const DreamContent = ({
  dream,
  editing,
}: {
  dream: any;
  editing: boolean;
}) => {
  return (
    <View>
      <CustomText>{dream.description}</CustomText>
    </View>
  );
};
