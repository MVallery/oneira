import { StyleSheet } from 'react-native';
import { isWeb } from '../constants/platform';
export const contentPadding = 20;
export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    maxWidth: 1200,
    margin: 'auto',
  },
  scrollView: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    // backgroundColor: 'red'
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: contentPadding,
    // backgroundColor: 'green'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});

export const webClickable: any = isWeb ? { cursor: 'pointer' } : {};
