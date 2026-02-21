import { FlexView } from '@/components/layout/BaseViews';
import { Tag } from '@/components/ui/Tag';
import CustomText from '@/components/ui/Text';
import { categories } from '@/utils/constants/models/categories';
import styled from 'styled-components/native';

const DreamSignView = styled.View`
  padding: 10px 0;
  gap: 10px;
`;

const WrapSigns = styled(FlexView)`
  flex-wrap: wrap;
  gap: 8px;
`;

export const DreamSignSection = ({ title, signs }) => {
  console.log('Rendering DreamSignSection with signs:', signs);
  return (
    <DreamSignView>
      <CustomText>{title}</CustomText>
      <WrapSigns>
        {signs.map((sign) => (
          <Tag
            key={sign.id}
            label={sign.name}
            count={sign.count}
            category={categories[sign.category].name}
            action='count'
            type='transparent-glow'
          />
        ))}
      </WrapSigns>
    </DreamSignView>
  );
};
