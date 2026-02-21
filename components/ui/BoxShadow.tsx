import { ComponentProps } from 'react';
import { ShadowedView } from 'react-native-fast-shadow';
import styled from 'styled-components/native';

import { colors } from '@/utils/constants/theme';

type ShadowSize = 'sm' | 'md' | 'lg' | 'none';
type ShadowedViewProps = ComponentProps<typeof ShadowedView>;

const presets = {
  none: {},
  sm: {
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.primary,
  },
  md: {
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: '#000',
  },
  lg: {
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 5, height: 6 },
    shadowColor: '#000',
  },
} as const;

export const BoxShadow = styled(ShadowedView)<
  ShadowedViewProps & { size?: ShadowSize; shadowColor?: string }
>`
  ${({ size = 'md', shadowColor }) => ({
    ...presets[size],
    ...{ shadowColor: shadowColor || colors.primary },
  })}
`;
