import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

const CountText = styled(Text)`
  font-size: 34px;
`;
const CountTextWrapper = styled(View)`
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DreamCountItem = ({ title, count }) => {
  return (
    <View>
      <View>{title}</View>
      <CountTextWrapper>
        <CountText>{count}</CountText>
      </CountTextWrapper>
    </View>
  );
};
