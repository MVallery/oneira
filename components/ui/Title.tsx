import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import React from 'react';
import { Text } from 'react-native-paper';

import { isWeb } from '@/utils/constants/platform';
import { colors } from '@/utils/constants/theme';

export interface TitleProps {
  children: any;
  color?: string;
  style?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const tagMap = isWeb
  ? {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
    }
  : {
      h1: Text,
      h2: Text,
      h3: Text,
      h4: Text,
      h5: Text,
      h6: Text,
    };
const Title = ({
  children,
  color,
  style,
  size = 'md',
  element = 'h1',
}: TitleProps) => {
  const fontSizeMap = { xs: 16, sm: 20, md: 24, lg: 36 };
  const Component = tagMap[element] || H1;

  return (
    <Component
      style={[
        {
          color: color || style?.color || colors.primary,
          fontSize: fontSizeMap[size],
          margin: 0,
          fontWeight: 'bold',
        },
        style,
      ]}
    >
      {children}
    </Component>
  );
};

export default Title;
