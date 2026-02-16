import { useAppTheme } from '@/state/themeContext';
import { Text, TouchableOpacity, View } from 'react-native';

export const MyComponent = () => {
  const { theme, setTheme } = useAppTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background, padding: 16 }}>
      <Text style={{ color: theme.colors.onBackground }}>This is themed!</Text>
      <TouchableOpacity
        onPress={() =>
          setTheme({
            ...theme,
            colors: { ...theme.colors, background: 'black' },
          })
        }
      >
        <Text style={{ color: theme.colors.primary }}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};
