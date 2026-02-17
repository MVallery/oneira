import Autocomplete from './Autocomplete';
import { OptionValue } from './types/optionValue';

export const CustomSelect = ({
  control,
  field,
  options,
  name,
  label,
  onChangeEvent,
  value,
  placeholder,
}: {
  control?: any;
  field?: any;
  options: OptionValue[];
  name: string;
  label?: string;
  onChangeEvent?: (value: any) => void;
  value?: any;
  placeholder?: string;
}) => {
  return (
    <Autocomplete
      control={control}
      field={field}
      creatable={false}
      searchable={false}
      name={name}
      isMultiSelect={false}
      options={options}
      label={label}
      onChangeEvent={onChangeEvent}
      value={value}
      placeholder={placeholder}
    />
  );
};
