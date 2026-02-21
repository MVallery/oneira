import { View, type ViewProps } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';
import { useAppTheme } from '../state/themeContext';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { theme, setTheme } = useAppTheme();
  const { colors } = theme;

  return (
    <View
      style={[{ backgroundColor: colors.secondaryContainer }, style || {}]}
      {...otherProps}
    />
  );
}
