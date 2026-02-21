import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '@/utils/constants/theme';

export interface CustomTextProps {
  children: any;
  color?: string;
  style?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const CustomText = ({
  children,
  color,
  style,
  size = 'md',
}: CustomTextProps) => {
  console.log(colors.onBackground);
  const styleObj = StyleSheet.create({
    textStyle: {
      ...style,
      color: color || style?.color || colors.onBackground,
      fontSize:
        size == 'xs' ? 12 : size === 'sm' ? 14 : size === 'lg' ? 18 : 16,
    },
  });

  return <Text style={[styleObj.textStyle, style]}>{children}</Text>;
};

export default CustomText;
