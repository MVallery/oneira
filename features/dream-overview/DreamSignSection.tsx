import { FlexView } from '@/components/layout/BaseViews';
import { Tag } from '@/components/ui/Tag';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const DreamSignSection = ({ title, signs }) => {
  return (
    <View>
      <Text>{title}</Text>
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
