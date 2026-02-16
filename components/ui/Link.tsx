import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import CustomButton from './Button';
import CustomText from './Text';

export interface CustomButtonProps {
  children: any;
  replace?: boolean;
  onPress?: any;
  href: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  type?: 'primary' | 'secondary' | 'minimal';
  colorSaturation?: 'light' | 'normal' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  buttonStyle?: boolean;
  style?: any;
}

const CustomLink = ({
  replace = false,
  children,
  onPress,
  disabled,
  loading,
  icon,
  type = 'primary',
  size = 'md',
  colorSaturation = 'normal',
  href,
  buttonStyle = true,
  style,
}: CustomButtonProps) => {
  return (
    <Link replace={replace} href={href} asChild style={style}>
      {buttonStyle ? (
        <CustomButton
          icon={icon}
          type={type}
          colorSaturation={colorSaturation}
          size={size}
          disabled={disabled}
          loading={loading}
          onPress={onPress}
          style={style}
        >
          {children}
        </CustomButton>
      ) : (
        <Pressable>
          <CustomText size={size}>{children}</CustomText>
        </Pressable>
      )}
    </Link>
  );
};

export default CustomLink;
