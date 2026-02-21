import { View } from 'react-native';
import styled from 'styled-components/native';

import { FlexView } from '@/components/layout/BaseViews';
import CustomText from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { categoryColors } from '@/constants/theme';
import { mockDreams } from '@/mocks/mockDreams';
import { mockSignTextsObj } from '@/mocks/mockSignTexts';
import { getCategory } from '@/utils/helpers/general';

const Dreamed = styled.View<{
  category: string;
}>`
  background-color: ${({ category }) =>
    categoryColors[category].bg ?? 'transparent'};
  border-color: ${({ category }) =>
    categoryColors[category].border ?? 'transparent'};
`;

const DreamCountWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
const DreamCount = styled.Text`
  font-size: 32px;
  font-weight: 600;
`;

const DreamCountText = styled.Text`
  font-size: 20px;
`;

export const SignDetailsScreen = ({ sign }) => {
  const category = getCategory(sign.category);
  // const dreamText = mockSignText.filter(text => text.signs.find(textSign => textSign.id === sign.id))[0]?.text || 'No dream text available for this sign.';
  const dreamsWithSign: any = [];
  mockDreams.forEach((dream) => {
    // sign is within the highlighted text
    const textSign =
      mockSignTextsObj[dream.id].find((text) =>
        text.signs.find((textSign) => textSign.id === sign.id),
      )[0]?.text || null;

    // sign is directly tagged in the dream
    const directSign = dream.signs.find(
      (dreamSign) => dreamSign.id === sign.id,
    );
    if (!textSign && !directSign) return;

    dreamsWithSign.push(
      <View key={dream.id}>
        <FlexView>
          <Title size='sm'>{dream.title}</Title>
          <CustomText>{dream.date}</CustomText>
        </FlexView>
        <CustomText>{textSign ? '"' + textSign + '"' : ''}</CustomText>
      </View>,
    );
  });
  return (
    <View>
      <Title>{sign.name}</Title>
      <Dreamed category={category}>
        <Title>You have dreamed of this {category} in:</Title>
        <FlexView>
          <DreamCountWrapper>
            <DreamCount>{sign.count}</DreamCount>
            <DreamCountText>Dreams this week</DreamCountText>
          </DreamCountWrapper>
          <DreamCountWrapper>
            <DreamCount>{sign.count + 10}</DreamCount>
            <DreamCountText>Dreams total</DreamCountText>
          </DreamCountWrapper>
        </FlexView>
      </Dreamed>
      <Title size='md'>Dreams and Dream Text</Title>
      {dreamsWithSign}
    </View>
  );
};
