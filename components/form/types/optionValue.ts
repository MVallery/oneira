export interface OptionValue {
  value: any;
  label: string;
  creatable?: boolean; // used for tracking creatable options
  selected?: boolean; // used for creatable options
}
