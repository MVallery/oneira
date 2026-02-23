import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

import { SCREEN_WIDTH } from '@/utils/constants/sizes';
import { styleVars } from '@/utils/constants/theme';

export const fullWidthView = css`
  width: ${SCREEN_WIDTH + styleVars.mainPadding * 2}px;
  margin-left: -${styleVars.mainPadding}px;
  padding-horizontal: ${styleVars.mainPadding}px;
`;

export const FlexView = styled(View)<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || 10};
`;

export const FlexSpaceView = styled(FlexView)`
  justify-content: space-between;
`;

export const FlexCenterView = styled(FlexView)<{ gap?: number }>`
  align-items: center;
  justify-content: center;
`;

export const CenterView = styled(View)<{ gap?: number }>`
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || 10};
`;

export const PageWrapper = styled.View`
  padding: ${styleVars.mainPadding}px;
  flex: 1;
  width: 100%;
`;
