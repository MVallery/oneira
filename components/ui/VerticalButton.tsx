import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Checkbox, Icon } from 'react-native-paper';

import { colors } from '@/utils/constants/theme';
import CustomText from './Text';

// different modes still need to be enabled, colorSaturation /mode not working right
export interface VerticalButtonProps {
  children: any;
  onPress?: any;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  direction?: 'iconTop' | 'iconBottom';
  size?: 'sm' | 'md' | 'lg';
  style?: any;
  color?: string;
  status?: boolean;
}

const VerticalButton = ({
  children,
  onPress,
  disabled,
  loading = false,
  icon,
  direction = 'iconTop',
  size = 'md',
  style,
  color,
  status,
}: VerticalButtonProps) => {
  const styles = StyleSheet.create({
    sm: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      gap: 6,
    },
    md: {
      paddingVertical: 4,
      paddingHorizontal: 6,
      gap: 8,
    },
    lg: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      gap: 10,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          alignItems: 'center',
          maxWidth: 200,
          flexDirection:
            direction === 'iconBottom' ? 'column' : 'column-reverse',
        },
        styles[size],
        style ? style : {},
      ]}
    >
      <CustomText color={colors.onSecondary} size={size}>
        {children}
      </CustomText>
      {icon === 'checkbox' ? (
        <Checkbox
          status={status ? 'checked' : 'unchecked'}
          onPress={onPress}
          color={colors.primary}
          uncheckedColor={colors.onSecondary}
        ></Checkbox>
      ) : (
        <Icon
          source={icon}
          size={size === 'sm' ? 16 : 20}
          color={color ? color : colors.onSecondary}
        ></Icon>
      )}
    </Pressable>
  );
};

export default VerticalButton;
