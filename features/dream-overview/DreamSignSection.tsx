import { CenterView, FlexCenterView } from '@/components/layout/BaseViews';
import { Tag } from '@/components/ui/Tag';
import Title from '@/components/ui/Title';
import { categories } from '@/utils/constants/models/categories';
import { Link } from 'expo-router';
import styled from 'styled-components/native';

const DreamSignView = styled(CenterView)`
  padding: 10px 0;
`;

const WrapSigns = styled(FlexCenterView)`
  flex-wrap: wrap;
  gap: 8px;
`;

export const DreamSignSection = ({ title, signs }) => {
  console.log('Rendering DreamSignSection with signs:', signs);
  return (
    <DreamSignView gap={10}>
      <Title size='sm'>{title}</Title>
      <WrapSigns>
        {signs.map((sign) => (
          <Link key={sign.id} href={`/sign_details/${sign.id}`}>
            <Tag
              key={sign.id}
              label={sign.name}
              count={sign.count}
              category={categories[sign.category].name}
              action='count'
              type='transparent-glow'
            />
          </Link>
        ))}
      </WrapSigns>
    </DreamSignView>
  );
};
