import { Text, View } from 'react-native';

import { colors, fontSize } from '@/utils/constants/theme';
import Title from './Title';

export const SectionTitles = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      {title && (
        <Title
          element='h1'
          style={{
            color: colors.primary,
            fontSize: fontSize.xl,
            textAlign: 'left',
            padding: 0,
          }}
        >
          {title}
        </Title>
      )}
      {subtitle && (
        <Text style={{ color: colors.onBackground }}>{subtitle}</Text>
      )}
    </View>
  );
};
