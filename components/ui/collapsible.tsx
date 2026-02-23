import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { formatDate } from '@/utils/helpers/general';
import { Link } from 'expo-router';
import { FlexSpaceView, FlexView } from '../layout/BaseViews';
import CustomText from './Text';
import Title from './Title';

export function DateTitle({
  date,
  title,
  id,
}: {
  title: string;
  date: string;
  id;
}) {
  return (
    <FlexSpaceView style={{ flexGrow: 1 }}>
      <Link href={`/dream/view/${id}`}>
        <Title size='sm'>{title}</Title>
      </Link>
      <CustomText style={{ marginLeft: 'auto' }}>{formatDate(date)}</CustomText>
    </FlexSpaceView>
  );
}
export function Collapsible({
  children,
  collapsePreview,
  title,
  date,
  id,
}: PropsWithChildren & {
  title: string;
  date: string;
  id;
  collapsePreview?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <View>
      {/* <IconSymbol
          name='chevron.right'
          size={18}
          weight='medium'
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        /> */}
      <DateTitle date={date} title={title} id={id} />

      {/* <ThemedText type='defaultSemiBold'>{title}</ThemedText> */}
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        {collapsePreview && !isOpen && (
          <FlexView>
            {collapsePreview}
            <CustomText>{'>'}</CustomText>
          </FlexView>
        )}
        {isOpen && <View style={styles.content}>{children}</View>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
