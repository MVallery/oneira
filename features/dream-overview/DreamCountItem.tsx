import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

import { CenterView } from '@/components/layout/BaseViews';
import CustomText from '@/components/ui/Text';

const CountText = styled(Text)`
  font-size: 34px;
`;

const CountTextWrapper = styled.View<{
  reverse: boolean;
}>`
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  elevation: 3;
  background-color: #a2adfc25;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: ${({ reverse }) => (reverse ? 0 : '24px')};
`;

export const DreamCountItem = ({ title, count, reverse = true }) => {
  return (
    <CenterView
      style={{
        marginTop: 10,
        flexDirection: reverse ? 'column-reverse' : 'column',
      }}
    >
      <CustomText size='sm'>{title}</CustomText>
      <CountTextWrapper reverse={reverse}>
        <CountText>{count}</CountText>
      </CountTextWrapper>
    </CenterView>
  );
};
