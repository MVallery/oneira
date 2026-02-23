import CustomText from '@/components/ui/Text';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const DreamQuoteWrapper = styled(Text)`
  font-style: italic;
  text-align: center;
  line-height: 30px;
  margin-top: 12px;
`;

const QuoteText = styled(CustomText)`
  margin-vertical: 8px;
  text-align: center;
  flex: 1;
`;
const QuotationMark = styled(CustomText)<{ right?: boolean }>`
  font-size: 30px;
`;

export const DreamQuote = ({ quote, style }: { quote: string; style: any }) => {
  return (
    <DreamQuoteWrapper style={style}>
      <QuotationMark>"</QuotationMark>
      <QuoteText>{quote}</QuoteText>
      <QuotationMark right={true}>"</QuotationMark>
    </DreamQuoteWrapper>
  );
};
