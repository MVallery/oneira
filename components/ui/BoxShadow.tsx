import { PropsWithChildren } from 'react';
// Shadowed view is causing issues with testing normally, so we'll need to test this once we do an official build
// import { ShadowedView } from 'react-native-fast-shadow';

import { colors } from '@/utils/constants/theme';
import { View } from 'react-native';

type ShadowSize = 'sm' | 'md' | 'lg' | 'none';

const presets = {
  none: {},
  sm: {
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  md: {
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 4 },
  },
  lg: {
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 5, height: 6 },
  },
} as const;

export const BoxShadow = (props: PropsWithChildren<{ size?: ShadowSize }>) => (
  <View
    style={[
      { shadowColor: colors.primary, elevation: 3 },
      presets[props.size ?? 'md'],
    ]}
  >
    {props.children}
  </View>
);
