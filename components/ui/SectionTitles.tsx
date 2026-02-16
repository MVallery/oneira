import { Text, View } from 'react-native';

import { useAppTheme } from '@/state/themeContext';
import Title from './Title';

export const SectionTitles = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  const { theme, setTheme } = useAppTheme();
  const { colors, fontSize } = theme;

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
