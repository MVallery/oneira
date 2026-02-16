import { useAppTheme } from '@/state/themeContext';
import React from 'react';
import { StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { CustomMenu } from '../ui/Menu';
import CustomInput from './Input';
interface FormElementProps {
  placeholder?: string;
  label?: string;
  tooltipText?: string;
  children?: React.ReactNode;
  control: any;
}
const CustomDate = ({
  placeholder,
  label,
  tooltipText,
  children,
  control,
}: FormElementProps) => {
  const { theme, setTheme } = useAppTheme();
  const { colors, fontSize } = theme;

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      width: '100%',
      // flexGrow: 1
    },
    labelWrap: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: colors.onBackground,
      paddingBottom: tooltipText ? 0 : 12,
    },
  });

  return (
    // <FormElement label="Date">
    <CustomMenu
      anchor={
        <CustomInput
          control={control}
          name='date'
          label={label || 'Date'}
          tooltipText={tooltipText || ''}
          defaultValue={new Date()}
        ></CustomInput>
      }
    >
      <CalendarPicker />
    </CustomMenu>
    // </FormElement>
  );
};

export default CustomDate;
