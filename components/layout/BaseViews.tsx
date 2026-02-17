import { View } from 'react-native';
import styled from 'styled-components/native';

export const FlexView = styled(View)<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || 10};
`;
