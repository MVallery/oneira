import { PageWrapper } from '@/components/layout/BaseViews';
import CustomText from '@/components/ui/Text';
import { mockDreams } from '@/mocks/mockDreams';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { DreamContent } from './components/DreamContentSection';
import { DreamSignSection } from './components/DreamSignSection';
import { DreamTitleSection } from './components/DreamTitleSection';

export const ViewDreamScreen = () => {
  const local = useLocalSearchParams();
  const { id } = local;
  const [editing, setEditing] = useState(false);
  const dream = mockDreams.find((d) => d.id === id);
  const [setting, action, character, other]: any = [[], [], [], []];

  dream?.signs?.forEach((sign) => {
    switch (sign.category) {
      case '1':
        setting.push(sign);
        break;
      case '2':
        character.push(sign);
        break;
      case '3':
        action.push(sign);
        break;
      default:
        other.push(sign);
    }
  });

  return (
    <PageWrapper>
      <CustomText>View Dream</CustomText>
      <DreamTitleSection dream={dream} editing={editing} />
      <DreamContent dream={dream} editing={editing} />
      <DreamSignSection title='Settings' signs={setting} editing={editing} />
      <DreamSignSection
        title='Characters'
        signs={character}
        editing={editing}
      />
      <DreamSignSection title='Actions' signs={action} editing={editing} />
      <DreamSignSection title='Other' signs={other} editing={editing} />
    </PageWrapper>
  );
};
