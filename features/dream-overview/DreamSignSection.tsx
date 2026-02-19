import { FlexView } from '@/components/layout/BaseViews';
import { Tag } from '@/components/ui/Tag';
import CustomText from '@/components/ui/Text';
import { View } from 'react-native';

export const DreamSignSection = ({ title, signs }) => {
  console.log('Rendering DreamSignSection with signs:', signs);
  return (
    <View>
      <CustomText>{title}</CustomText>
      <FlexView>
        {signs.map((sign) => (
          <Tag
            key={sign.id}
            label={sign.name}
            count={sign.count}
            action='count'
          />
        ))}
      </FlexView>
    </View>
  );
};
