import { useAppTheme } from '@/state/themeContext';
import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import FormElement from './FormElement';
type CustomInputProps = {
  placeholder?: string;
  label?: string;
  tooltipText?: string;
  name: string;
  // either pass in control for react hook form or manage state manually with value
  control?: any;
  value?: any;
  onChangeEvent?: (value: string) => void;
  onBlur?: (value: any) => void;
  onSubmitEditing?: (value: string) => void;
  defaultValue?: any;
  type?: 'none' | 'password' | 'email' | 'textarea';
  required?: boolean;
  pattern?: any;
  errorMessage?: string;
  validate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  height?: number | string; // for controlling height for textarea
};
const CustomInput = forwardRef<TextInput, CustomInputProps>(
  (
    {
      placeholder,
      label,
      tooltipText,
      name,
      control,
      value,
      size,
      height,
      onChangeEvent,
      onBlur,
      onSubmitEditing,
      defaultValue,
      type = 'none',
      required = false,
      pattern,
      errorMessage,
      validate = true,
    },
    ref,
  ) => {
    const { theme, setTheme } = useAppTheme();
    const { colors, fontSize } = theme;

    // Define validation rules
    const rules: any = {
      required,
    };
    const passWordPattern = {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{8,}$/, // REquires special character -> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/,
      message:
        'Password must be at least 8 characters, contain at least one uppercase & lowercase letter, and one number.',
    };
    const emailPattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address.',
    };
    if ((type === 'password' || type === 'email') && validate) {
      rules.pattern =
        type === 'password'
          ? passWordPattern
          : type === 'email'
            ? emailPattern
            : pattern;
    }

    const {
      field,
      fieldState: { invalid, isTouched, isDirty },
    } = useController({
      control,
      defaultValue: defaultValue || '',
      name,
      rules,
    });
    // : { fieldState: {} };

    const styles = StyleSheet.create({
      input: {
        height: height || (50 as any),
        borderColor: invalid ? colors.error : colors.tertiary,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: size === 'lg' ? 15 : size === 'md' ? 12 : 10,
        paddingTop: type === 'textarea' ? 3 : 0,
        fontSize: 16,
        backgroundColor: invalid ? colors.errorContainer : colors.surface,
        color: invalid ? colors.onErrorContainer : colors.onSurface,
        width: '100%',
      },
    });

    return (
      <FormElement
        label={label}
        tooltipText={tooltipText}
        errorMessage={errorMessage}
        size={size}
      >
        <TextInput
          ref={ref}
          multiline={type === 'textarea'}
          numberOfLines={type === 'textarea' ? 5 : 1}
          secureTextEntry={type === 'password'}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={invalid ? colors.onErrorContainer : '#888'}
          keyboardType='default'
          onSubmitEditing={(e) =>
            onSubmitEditing && onSubmitEditing(e.nativeEvent.text)
          }
          value={value ?? (!control ? undefined : defaultValue) ?? field?.value}
          onChangeText={(e) => {
            if (onChangeEvent) onChangeEvent(e);
            field?.onChange(e);
          }}
          onBlur={(e) => onBlur && onBlur(e)}
        />
      </FormElement>
    );
  },
);

export default CustomInput;
