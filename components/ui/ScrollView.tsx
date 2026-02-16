import { useAppTheme } from '@/state/themeContext';
import { ScrollView } from 'react-native-gesture-handler';

type ScrollViewType = {
  style?: any;
  horizontal?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  children?: React.ReactNode;
  contentContainerStyle?: any;
};
export const CustomScrollView = ({
  style,
  horizontal,
  showsHorizontalScrollIndicator,
  children,
  contentContainerStyle,
}: ScrollViewType) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  return (
    <ScrollView
      horizontal={horizontal}
      contentContainerStyle={contentContainerStyle || {}}
      style={[
        {
          scrollbarWidth: 'thin',
          scrollbarColor: `${colors.secondaryContainer} transparent`,
        },
        ...(Array.isArray(style) ? style : [style || {}]),
      ]}
    >
      {children}
    </ScrollView>
  );
};
