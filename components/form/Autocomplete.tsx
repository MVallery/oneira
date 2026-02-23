import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { Chip, Text, TextInput } from 'react-native-paper';
import { v4 as uuid } from 'uuid';

import { colors } from '@/utils/constants/theme';
import { clone } from '@/utils/helpers/general';
import { webClickable } from '@/utils/styles/baseStyles';
import FormElement from './FormElement';
import { FormElementType } from './types/formElement';

interface AutocompleteBaseProps extends FormElementType {
  options: OptionValue[];
  displaySelectedOptions?: boolean;
  error?: boolean;
  searchable?: boolean;
  field?: any;
  value?: any;
  isMultiSelect?: boolean;
  resetOnSelect?: boolean;
  closeOnSelect?: boolean;
  maxHeight?: number;
  onChangeEvent?: (selectedOptions: OptionValue[]) => void;
  size?: 'sm' | 'md' | 'lg';
  excludeSearchItems?: OptionValue[];
  setExcludeOptions?: any;
}

type AutocompleteProps =
  | (AutocompleteBaseProps & {
      creatable: true;
      setOptions: (options: OptionValue[]) => void;
    })
  | (AutocompleteBaseProps & {
      creatable?: false;
      setOptions?: (options: OptionValue[]) => void;
    });
export interface OptionValue {
  value: any;
  label: string;
  creatable?: boolean; // used for tracking creatable options
  selected?: boolean; // used for creatable options
}

const Autocomplete = ({
  placeholder,
  label,
  tooltipText,
  field,
  options,
  setOptions,
  control,
  searchable = true,
  name,
  displaySelectedOptions,
  error,
  value,

  isMultiSelect = true,
  closeOnSelect = true,
  maxHeight = 300,
  creatable = false,
  size = 'lg',
  excludeSearchItems = [],
  setExcludeOptions,
  onChangeEvent,
}: AutocompleteProps) => {
  const [selectedOptions, setSelectedOptions] = React.useState<OptionValue[]>(
    [],
  );
  const [isFocus, setIsFocus] = useState(false);
  const [hasStartedCreatable, setHasStartedCreatable] =
    React.useState<boolean>(false);
  const [warning, setWarning] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const styles: any = StyleSheet.create({
    input: {
      height: 50,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: colors.surface,
      color: colors.onSurface,
      width: '100%',
    },
    labelWrap: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: colors.onBackground,
    },

    disabled: {
      pointerEvents: 'none',
    },
  });

  const onHandleCreatable = (newOptions: any) => {
    // most recently added option is a creatable option (does not have a db generated number id)
    let clonedOptions = clone(options);
    if (newOptions && typeof newOptions[newOptions.length - 1] === 'string') {
      clonedOptions[0].selected = true; // mark the creatable option as selected so it wont be filtered out later.
      clonedOptions[0].label = clonedOptions[0].label.replace(
        /^Create:\s*"([\s\S]*)"$/,
        '$1',
      ); // remove the "Create: and quotation marks from the label
      // changedOptions
      let excludeOptions = clone(excludeSearchItems);
      excludeOptions.push(clonedOptions[0]);
      setExcludeOptions && setExcludeOptions(excludeOptions);

      // if they started to create an option but didn't select it, remove the creatable option
    } else if (clonedOptions[0].creatable) {
      clonedOptions.shift();
    }
    setOptions && setOptions(clonedOptions);
    setHasStartedCreatable(false);
  };

  // through testing now with using the react-native-element-dropdown this may just be an array of strings
  const onChange = (newOptions?: any[]) => {
    let changedOptions = newOptions || selectedOptions;
    // if an item is selected from the dropdown, whether or not that item was a creatable options, we still
    // want to remove the creatable option from the list to restart it.
    if (creatable) {
      onHandleCreatable(newOptions);
    }
    if (onChangeEvent) {
      onChangeEvent(changedOptions);
    }
    setSelectedOptions(changedOptions);
    setSearchText(''); // reset search text when an option is selected
  };

  const onRemoveItem = (item: OptionValue) => () => {
    const newSelectedOptions = clone(selectedOptions).filter(
      (option) => option !== item.value,
    );
    setSelectedOptions(newSelectedOptions);
    field.onChange(newSelectedOptions);
  };

  const onChangeText = (text: string) => {
    setWarning(''); // reset warning when user starts typing
    setSearchText(text);
    if (creatable) {
      addCreatableOption(text);
    }
  };

  const addCreatableOption = (text: string) => {
    const creatableOption = {
      label: `Create: "${text}"`,
      value: uuid(),
      creatable: true,
    };
    // label needs to match since value is the id
    const existingOption = options.find(
      (option) => option.label.toLowerCase() === text.toLowerCase().trim(),
    );
    const preselectedWarning = () => {
      if (!existingOption) return;
      const optionIsPreselected =
        excludeSearchItems &&
        excludeSearchItems.find(
          (option) =>
            option.label.toLowerCase() ===
            existingOption.label.toLowerCase().trim(),
        );
      if (optionIsPreselected) {
        // TO DO: this is a concept specific warning, will need to change it for other use cases.
        setWarning(
          'This concept is already in your active list. If needed you can create a more specific concept.',
        );
      }
    };
    if (text && !hasStartedCreatable && !existingOption) {
      options.unshift(creatableOption);
      setHasStartedCreatable(true);

      // if this option text already exists, or if text was deleted, dont let them create it again.
    } else if (hasStartedCreatable && (existingOption || !text)) {
      // if this is a creatable option that was not selected, remove it.
      if (!options[0].selected) {
        options.shift();
        setHasStartedCreatable(false);
      }
      if (existingOption) {
        preselectedWarning();
      }
      // hasStartedCreatable is false so no need to wipe it out and dont want it to create a new option.
      // if this option already exists and exists in the excludeSearchItems, then it's already pre-selected - give them a warning for why it wont let them create it again.
    } else if (existingOption) {
      preselectedWarning();

      // overwrite the first item.
    } else if (text) {
      options[0] = creatableOption;
      setHasStartedCreatable(true);
    }

    if (setOptions) {
      setOptions(options);
    } else {
      console.warn(
        'Cannot set new options, setOptions function is not provided to Autocomplete component.',
      );
    }
  };

  const sharedDropdownProps = {
    style: [
      {
        borderColor: error ? colors.error : colors.tertiary,
        borderWidth: 1,
        borderRadius: 5,
        padding: size === 'lg' ? 10 : 5,
        paddingHorizontal: size === 'lg' ? 15 : 8,
        backgroundColor: error ? colors.errorContainer : colors.background,
        fontSize: size === 'lg' ? 16 : size === 'md' ? 14 : 12,
      },
      isFocus && { borderColor: colors.secondaryLight },
      webClickable,
    ],
    placeholderStyle: {
      color: error ? colors.onErrorContainer : colors.onSurface,
      backgroundColor: colors.background,
    },
    // style the option container
    containerStyle: {
      maxHeight: 400,
      backgroundColor: colors.background,
      borderColor: colors.tertiary,
    },
    selectedTextStyle: {
      color: colors.onSurface,
      fontSize: size === 'lg' ? 16 : size === 'md' ? 14 : 12,
    },
    selectedStyle: {
      borderColor: colors.secondaryLight,
      borderWidth: 1,
      fontSize: size === 'lg' ? 16 : size === 'md' ? 14 : 12,
    },
    inputSearchStyle: {
      color: colors.onSurface,
      backgroundColor: colors.surface,
      borderRadius: 5,
      marginBottom: 2,
    },
    itemContainerStyle: { backgroundColor: colors.surface },
    itemTextStyle: {
      color: 'white',
      fontSize: size === 'lg' ? 16 : size === 'md' ? 14 : 12,
    },
    iconStyle: styles.iconStyle,
    maxHeight,
    name,
    activeColor: colors.secondary,
    search: searchable,
    data: options,
    placeholder: placeholder,
    labelField: 'label',
    valueField: 'value',
    searchPlaceholder: 'Search...',
    visibleSelectedItem: displaySelectedOptions,
    excludeSearchItems: clone(excludeSearchItems),
    excludeItems: clone(excludeSearchItems),
    // alwaysRenderSelectedItem: true,
    value: value ? value : field?.value,
    onFocus: () => setIsFocus(true),
    onBlur: () => setIsFocus(false),
    renderInputSearch: (onSearch: any) => (
      <TextInput
        style={{
          borderRadius: 5,
          borderColor: colors.tertiary,
          borderWidth: 1,
          borderStyle: 'solid',
          color: 'white',
        }}
        placeholderTextColor='white'
        cursorColor={colors.secondaryLight}
        value={searchText}
        onChangeText={(t) => {
          setSearchText(t);
          onSearch(t);
        }}
        placeholder='Search..'
      />
    ),
  };
  return (
    <FormElement label={label} tooltipText={tooltipText} size={size}>
      {warning ? (
        <Text
          style={{
            color: colors.onErrorContainer,
            fontSize: 14,
            marginBottom: 8,
          }}
        >
          {warning}
        </Text>
      ) : null}
      {isMultiSelect ? (
        <MultiSelect
          {...sharedDropdownProps}
          inside={true}
          onChange={(item: any) => {
            if (closeOnSelect) {
              setIsFocus(false);
            }
            field && field.onChange(item);
            onChange(item);
          }}
          onChangeText={onChangeText}
          renderSelectedItem={(item: any) => (
            <Chip
              mode='outlined'
              closeIcon='close'
              onClose={onRemoveItem(item)}
            >
              {item.label}{' '}
            </Chip>
          )}
        />
      ) : (
        <Dropdown
          {...sharedDropdownProps}
          closeModalWhenSelectedItem={true}
          // value

          onChange={(item) => {
            setIsFocus(false);
            field && field.onChange(item.value);
            onChange(item.value);
          }}
          onChangeText={onChangeText}
        />
      )}
    </FormElement>
  );
};

export default Autocomplete;
