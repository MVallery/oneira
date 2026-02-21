import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';

import { colors } from '@/utils/constants/theme';
import FormElement from './FormElement';

type DateTextProps = {
  placeholder?: string;
  label?: string;
  tooltipText?: string;
  name: string;
  control: any;
  onChangeEvent?: (value: string) => void;
  onSubmitEditing?: (value: string) => void;
  defaultValue?: any;
  type?: 'none' | 'password' | 'email' | 'textarea';
  required?: boolean;
  pattern?: any;
  errorMessage?: string;
  validate?: boolean;
};
export const DateText = ({
  placeholder,
  label,
  tooltipText,
  name,
  control,
  onChangeEvent,
  defaultValue,
  required,
  errorMessage,
  validate,
}: DateTextProps) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    control,
    defaultValue: defaultValue || '',
    name,
  });
  const [value, setValue] = useState('');
  const styles = StyleSheet.create({
    input: {
      height: 50,
      borderColor: invalid ? colors.error : colors.tertiary,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 15,
      fontSize: 16,
      backgroundColor: invalid ? colors.errorContainer : colors.surface,
      color: invalid ? colors.onErrorContainer : colors.onSurface,
      width: '100%',
    },
  });

  const formatDate = (text: string) => {
    // remove non-digits
    const digits = text.replace(/\D/g, '').slice(0, 8);
    const parts = [];

    if (digits.length > 0) parts.push(digits.slice(0, 2));
    if (digits.length > 2) parts.push(digits.slice(2, 4));
    if (digits.length > 4) parts.push(digits.slice(4, 8));

    return parts.join('-');
  };

  const handleChange = (text: string) => {
    const formatted = formatDate(text);
    setValue(formatted);
    field.onChange(formatted);
    onChangeEvent?.(formatted);
  };

  return (
    <FormElement
      label={label}
      tooltipText={tooltipText}
      errorMessage={errorMessage}
    >
      <TextInput
        value={field.value}
        onChangeText={handleChange}
        keyboardType='numeric'
        placeholder='MM-DD-YYYY'
        style={styles.input}
        placeholderTextColor={colors.onBackground}
      />
    </FormElement>
  );
};
