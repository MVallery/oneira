import { useAppTheme } from '@/state/themeContext';
import { isWeb } from '@/utils/constants/platform';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text
} from 'react-native';
import { Button } from 'react-native-paper';
// different modes still need to be enabled, colorSaturation /mode not working right
type ButtonType = 'primary' | 'secondary' | 'minimal' | 'danger';
export interface CustomButtonProps {
  children: any;
  onPress?: any;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  type?: ButtonType;
  colorSaturation?: 'light' | 'normal' | 'dark' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  style?: any;
}

const CustomButton = ({
  children,
  onPress,
  disabled,
  loading = false,
  icon,
  type = 'primary',
  size = 'md',
  colorSaturation = 'normal',
  style,
}: CustomButtonProps) => {
  const { theme, setTheme } = useAppTheme();
  const { colors, fontSize } = theme;

  const mode = getMode(colorSaturation);
  const styles = createButtonStyles(theme, disabled, type, colorSaturation);

  let buttonStyles = [styles.button, styles[size]];
  if (style) {
    buttonStyles = [...buttonStyles, style];
  }
  let color = disabled
    ? colors.tertiaryOnBackground
    : loading && isWeb
      ? 'transparent'
      : styles.button.color;
  return (
    // <View style={{ position: 'relative', alignItems: 'center', marginTop: 20, backgroundColor: 'red'}}>

    <Button
      style={buttonStyles}
      mode={mode}
      dark={colorSaturation === 'dark'}
      labelStyle={{
        fontSize: fontSize[size],
        padding: 0,
        lineHeight: fontSize[size],
      }}
      icon={icon}
      onPress={onPress}
      disabled={disabled}
      loading={isWeb ? false : loading}
      contentStyle={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
      }} // reverse icon position
      textColor={color}
    >
      <Text style={{ color, fontSize: fontSize[size], padding: 0 }}>
        {children}
      </Text>
      {/* <Icon
        source={icon}
        size={size === 'sm' ? 16 : 20}
        color={colors.onBackground}></Icon> */}
      {isWeb && (
        <ActivityIndicator
          style={{
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 10,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          animating={loading}
          size={size === 'sm' ? 12 : 16}
          color={styles.button.color}
          hidesWhenStopped={true}
        />
      )}
    </Button>
    // </View>
  );
};

export default CustomButton;

export const createButtonStyles = (
  theme: any,
  disabled: any,
  type: ButtonType,
  colorSaturation: string,
) => {
  const { colors, fontSize } = theme;
  let color =
    type === 'primary'
      ? colors.onPrimary
      : type === 'secondary'
        ? colors.onSecondary
        : type === 'danger'
          ? colors.onError
          : colors.onSurface;
  const highlightColor =
    type === 'primary'
      ? colors.primary
      : type === 'secondary'
        ? colors.secondary
        : type === 'danger'
          ? colors.error
          : colors.surface;
  if (colorSaturation === 'transparent') {
    color = highlightColor;
  }
  return StyleSheet.create({
    button: {
      // position: 'relative',
      // display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      marginTop: 20,

      // backgroundColor: bgColor,
      // color: textColor,
      backgroundColor: disabled
        ? colors.tertiary
        : colorSaturation === 'transparent'
          ? 'transparent'
          : highlightColor,
      opacity: disabled ? 0.1 : 1,
      color,
    },
    // buttonIcon: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   color: colors.onPrimary,
    //   marginLeft: 10,
    //   backgroundColor: 'blue',
    //   alignSelf: 'center',
    //   // maxHeight: 20,
    //   display: 'flex',

    //   height: 20,
    // },
    sm: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      borderRadius: 24,
    },
    md: {
      paddingVertical: 4,
      paddingHorizontal: 6,
      borderRadius: 24,
    },
    lg: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
  });
};

export const getMode = (
  colorSaturation: 'light' | 'dark' | 'normal' | 'transparent',
) => {
  switch (colorSaturation) {
    case 'light':
      return 'outlined';
    case 'dark':
      return 'contained';
    default:
      return 'contained-tonal';
  }
};
