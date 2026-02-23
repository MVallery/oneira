import { FlexSpaceView, FlexView } from '@/components/layout/BaseViews';
import CustomText from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { formatDate } from '@/utils/helpers/general';
import { View } from 'react-native';
import styled from 'styled-components/native';

const FavoriteIcon = styled(View)`
  width: 24px;
  height: 24px;
  background-color: white;
`;
export const DreamTitleSection = ({
  dream,
  editing,
}: {
  dream: any;
  editing: boolean;
}) => {
  return (
    <FlexSpaceView>
      <Title>{dream.title}</Title>
      <FlexView>
        <FavoriteIcon></FavoriteIcon>
        <CustomText>{formatDate(dream.date)}</CustomText>
      </FlexView>
    </FlexSpaceView>
  );
};
