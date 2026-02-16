import Autocomplete from './Autocomplete';
import { OptionValue } from './ChipSelect';

export const CustomSelect = ({
  control,
  field,
  options,
  name,
  label,
  onChangeEvent,
  value,
}: {
  control?: any;
  field?: any;
  options: OptionValue[];
  name: string;
  label: string;
  onChangeEvent?: (value: any) => void;
  value?: any;
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
    />
  );
};
