import { router, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import styled from 'styled-components/native';

import {
  FlexSpaceView,
  fullWidthView,
  PageWrapper,
} from '@/components/layout/BaseViews';
import { Collapsible, DateTitle } from '@/components/ui/collapsible';
import Title from '@/components/ui/Title';
import { categoryColors } from '@/constants/theme';
import { mockDreams } from '@/mocks/mockDreams';
import { mockSigns } from '@/mocks/mockSigns';
import { mockSignTextsObj } from '@/mocks/mockSignTexts';
import { colors } from '@/utils/constants/theme';
import { getCategory } from '@/utils/helpers/general';
import { DreamCountItem } from '../../dream-overview/DreamCountItem';
import { DreamQuote } from './DreamQuote';

const Dreamed = styled.View<{
  category: string;
}>`
  ${fullWidthView}
  background-color: ${({ category }) =>
    categoryColors[category].bg
      ? categoryColors[category].border + '33'
      : 'transparent'};
  border-color: ${({ category }) =>
    categoryColors[category].border ?? 'transparent'};
  border-top-width: 1px;
  border-bottom-width: 1px;
  padding-vertical: 8px;
  margin-top: 20px;
`;

const DreamWithSignView = styled.View`
  border-top-width: 1px;
  border-color: ${colors.primary}40;
  padding-vertical: 12px;
`;

export const SignDetailsScreen = () => {
  const local = useLocalSearchParams();
  const { id } = local;
  const sign = mockSigns.find((s) => s.id === id);
  if (!sign) {
    router.push('/');
    return null;
  }
  const category = getCategory(sign.category);
  // const dreamText = mockSignText.filter(text => text.signs.find(textSign => textSign.id === sign.id))[0]?.text || 'No dream text available for this sign.';
  const dreamsWithSign: any = [];
  mockDreams.forEach((dream) => {
    // sign is within the highlighted text
    const signQuote =
      (mockSignTextsObj[dream.id] ?? []).find((text) =>
        text.signs?.some((textSign) => textSign.id === sign.id),
      )?.text || null;
    // sign is directly tagged in the dream
    const directSign = dream.signs?.find(
      (dreamSign) => dreamSign.id === sign.id,
    );
    console.log('textsign', signQuote, directSign);
    if (!signQuote && !directSign) return;
    let collapseText = '';
    if (signQuote && signQuote.length > 50) {
      collapseText = signQuote.slice(0, 50) + '...';
    }
    console.log('collapse............', dream.title, dream.date, collapseText);
    dreamsWithSign.push(
      <DreamWithSignView key={dream.id}>
        {collapseText ? (
          <View>
            <Collapsible
              title={dream.title}
              date={dream.date}
              id={dream.id}
              collapsePreview={
                <DreamQuote quote={collapseText} style={{ marginLeft: 10 }} />
              }
            >
              <DreamQuote quote={signQuote} style={{ marginLeft: 10 }} />
            </Collapsible>
          </View>
        ) : (
          <View>
            <DateTitle title={dream.title} date={dream.date} id={dream.id} />
            {signQuote && (
              <DreamQuote quote={signQuote} style={{ marginLeft: 10 }} />
            )}
          </View>
        )}
      </DreamWithSignView>,
    );
  });
  return (
    <PageWrapper>
      <Title>{sign.name}</Title>
      <Dreamed category={category}>
        <Title size='sm'>You have dreamed of this {category} in:</Title>
      </Dreamed>

      <FlexSpaceView
        style={{ width: 300, marginHorizontal: 'auto', marginBottom: 20 }}
      >
        <DreamCountItem
          title='Dreams this week'
          count={sign.count}
          reverse={true}
        />
        <DreamCountItem
          title='Dreams total'
          count={sign.count + 10}
          reverse={true}
        />
      </FlexSpaceView>
      <Title size='sm'>Dreams</Title>
      {dreamsWithSign}
    </PageWrapper>
  );
};
