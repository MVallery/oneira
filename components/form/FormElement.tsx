import { useAppTheme } from '@/state/themeContext';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { CustomTooltip } from '../ui/Tooltip';
interface FormElementProps {
  placeholder?: string;
  label?: string;
  tooltipText?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  errorMessage?: string;
}
const FormElement = ({
  placeholder,
  label,
  tooltipText,
  size = 'lg',
  children,
  errorMessage,
}: FormElementProps) => {
  const { theme, setTheme } = useAppTheme();
  const { colors, fontSize } = theme;

  const styles = StyleSheet.create({
    container: {
      marginVertical: size === 'lg' ? 10 : size === 'md' ? 8 : 6,
      width: '100%',
      // flexGrow: 1
    },
    labelWrap: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: colors.onBackground,
      paddingBottom: tooltipText ? 0 : 5,
      fontSize:
        size === 'lg' ? fontSize.md : size === 'md' ? fontSize.sm : fontSize.xs,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.labelWrap}>
        <Text style={styles.label}>{label}</Text>
        {tooltipText && <CustomTooltip tooltipText={tooltipText} />}
      </View>
      {children}
      {errorMessage && (
        <View style={{ marginTop: 5 }}>
          <Text
            style={{ color: colors.onErrorContainer, fontSize: fontSize.sm }}
          >
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FormElement;
