import { DreamSignSection } from './DreamSignSection';
import { OverviewHeader } from './OverviewHeader';

import { PageWrapper } from '@/components/layout/BaseViews';
import Title from '@/components/ui/Title';
import { mockSigns } from '@/mocks/mockSigns';

export const DreamOverviewScreen = () => {
  return (
    <PageWrapper>
      <OverviewHeader />
      <Title size='sm'>Top Dream Signs</Title>
      <DreamSignSection
        title='Settings'
        signs={mockSigns.filter((sign) => sign.category === '1')}
      />
      <DreamSignSection
        title='Characters'
        signs={mockSigns.filter((sign) => sign.category === '2')}
      />

      <DreamSignSection
        title='Actions'
        signs={mockSigns.filter((sign) => sign.category === '3')}
      />
      <DreamSignSection
        title='Other'
        signs={mockSigns.filter((sign) => sign.category === '4')}
      />
    </PageWrapper>
  );
};
