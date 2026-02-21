import React from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';

import { colors } from '@/utils/constants/theme';
import FormElement from './FormElement';
import { FormElementType } from './types/formElement';
import { OptionValue } from './types/optionValue';

interface ChipSelectProps extends FormElementType {
  options: OptionValue[];
  openOnFocus?: boolean;
  isMultiSelect?: boolean;
  onChangeEvent: (selectedOptions: OptionValue[]) => void;
}
// export interface OptionValue {
//   value: string;
//   label: string;
//   selected?: boolean;
// }
const ChipSelect = ({
  placeholder,
  name,
  control,
  label,
  tooltipText,
  options,
  isMultiSelect = true,
  onChangeEvent,
}: ChipSelectProps) => {
  // removed a condiditional here
  const { field } = useController({ control, defaultValue: '', name });

  const [selectedOptions, setSelectedOptions] = React.useState<OptionValue[]>(
    [],
  );
  const [unselectedOptions, setUnselectedOptions] =
    React.useState<OptionValue[]>(options);
  const [displayOptions, setDisplayOptions] =
    React.useState<OptionValue[]>(options);

  const styles: any = StyleSheet.create({
    chipWrapper: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 1,
      gap: 10,
      // padding: 10,
      paddingTop: 10,
      paddingBottom: 20,
      alignItems: 'flex-start',
    },
    chip: {
      alignSelf: 'flex-start',
      maxHeight: 33,
      maxWidth: 100,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    selectedChip: {
      backgroundColor: colors.primary,
      color: colors.onPrimary,
      // alignContent: 'center',
      // alignItems: 'center',
      // justifyContent: 'center'
    },
  });

  const selectOption = (option: OptionValue, idx: number): void => {
    const newOptions = [...options];
    // newOptions[idx].selected = true;
    if (isMultiSelect) {
      newOptions[idx].selected = true;
      // console.log('newOptions', newOptions);
    } else {
      newOptions.forEach((o) => {
        o.selected = false;
      });
      newOptions[idx].selected = true;
    }
    setDisplayOptions(newOptions);
    const selectedOptions = newOptions.filter((o) => o.selected);
    // console.log('selectedOptions', selectedOptions);
    onChange(selectedOptions);
    // const newUnselectedOptions = [...unselectedOptions].filter(
    //   (o) => o.value !== option.value
    // );

    // if (!isMultiSelect) {
    //   // if not multi, put previously selected option back into unselected & set new option as only selected
    //   if (selectedOptions.length > 0) {
    //     unselectedOptions.push(selectedOptions[0]);
    //   }
    //   setSelectedOptions([option]);
    //   setUnselectedOptions(unselectedOptions);
    //   onChange([option]);

    //   // multi select, add to selected options, and remove from unselected
    // } else {
    //   const newSelectedOptions = [...selectedOptions, option];
    //   setSelectedOptions(newSelectedOptions);
    //   setUnselectedOptions(newUnselectedOptions);
    //   onChange(newSelectedOptions);
    // }
  };

  const removeOption = (option: OptionValue, idx: number): void => {
    const newOptions = [...options];

    newOptions[idx].selected = false;
    setDisplayOptions(newOptions);

    const selectedOptions = newOptions.filter((o) => o.selected);
    onChange(selectedOptions);
  };

  const renderChips = () => {
    return displayOptions.map((option, index) => {
      const style = option.selected
        ? [styles.chip, styles.selectedChip]
        : styles.chip;
      return option.selected ? (
        <Chip
          key={index}
          style={style}
          onClose={() => removeOption(option, index)}
          onPress={() => removeOption(option, index)}
          theme={{ colors: colors }}
        >
          {option.label}
        </Chip>
      ) : (
        <Chip
          key={index}
          style={style}
          onPress={() => selectOption(option, index)}
          theme={{ colors: colors }}
        >
          {option.label}
        </Chip>
      );
    });
  };

  const onChange = (options?: OptionValue[]) => {
    onChangeEvent(options || selectedOptions);
    field && field.onChange(options || selectedOptions);
  };

  return (
    <FormElement label={label} tooltipText={tooltipText}>
      <View style={styles.chipWrapper}>
        {renderChips()}
        {/* {renderUnselectedChips()} */}
      </View>
    </FormElement>
  );
};

export default ChipSelect;
