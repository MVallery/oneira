import React, { useMemo, useState } from 'react';
import styled from 'styled-components/native';

import { categoryColors } from '@/constants/theme';
import { BoxShadow } from './BoxShadow';

type TagSize = 'sm' | 'md' | 'lg';
type IconType = 'avatar' | 'dot' | null;
type ActionType = 'close' | 'count' | null;

const Container = styled.View<{
  size: TagSize;
  category: string;
  type: string;
}>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ type, category }) =>
    type === 'transparent-glow' ? 'transparent' : categoryColors[category].bg};
  border-width: 1px;
  border-color: ${({ type, category }) =>
    type.includes('transparent')
      ? categoryColors[category].border
      : 'transparent'};
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;
  height: ${({ size }) => HEIGHT_MAP[size]}px;
  box-shadow: ${({ type }) =>
    type === 'transparent-glow' ? '0 0 7 rgba(#CED4FF, 0.44)' : 'none'};
    shadow-color:#CED4FF;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
`;

const Label = styled.Text<{ size: TagSize }>`
  font-size: ${({ size }) => FONT_MAP[size]}px;
  font-weight: 500;
  margin-right: 4px;
  color: #ced4ff;
`;

const CountContainer = styled.View`
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CountText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #667085;
`;

const CloseButton = styled.TouchableOpacity`
  margin-left: 4px;
  justify-content: center;
  align-items: center;
`;

const CloseText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const FakeCheckbox = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-width: 1px;
  border-color: #667085;
  border-radius: 3px;
  margin-right: 6px;
`;

interface TagProps {
  icon?: IconType;
  iconSrc?: string | null;
  action?: ActionType;
  count?: number | null;
  size?: TagSize;
  label: string;
  checkbox?: boolean;
  category?: 'Setting' | 'Action' | 'Emotion' | 'Character' | 'Other';
  type?: 'default' | 'transparent' | 'transparent-glow' | 'secondary';
  onPress?: () => void;
}

const HEIGHT_MAP = {
  sm: 20,
  md: 36,
  lg: 46,
};

const FONT_MAP = {
  sm: 12,
  md: 14,
  lg: 14,
};

export const Tag: React.FC<TagProps> = ({
  icon = null,
  iconSrc = null,
  action = null,
  count = null,
  size = 'md',
  label,
  checkbox = false,
  type = 'default',
  category = 'Other',
  onPress,
}) => {
  const [active, setActive] = useState(true);

  const checkboxSize = useMemo(() => {
    return size === 'sm' ? 12 : size === 'md' ? 14 : 16;
  }, [size]);

  const handleClose = () => {
    setActive(false);
    onPress?.();
  };
  console.log('cateogry....', category);
  if (!active) return null;

  return (
    <BoxShadow size='sm'>
      <Container size={size} type={type} category={category}>
        {checkbox && <FakeCheckbox size={checkboxSize} />}
        <Label size={size}>{label}</Label>

        {action === 'close' && (
          <CloseButton onPress={handleClose}>
            <CloseText>×</CloseText>
          </CloseButton>
        )}

        {action === 'count' && count !== null && (
          <CountContainer>
            <CountText>{count}</CountText>
          </CountContainer>
        )}
      </Container>
    </BoxShadow>
  );
};
