export type T_Allowed = string | number;

type T_SelectBaseProps<T_Value> = {
  id?: string;
  placeholder?: string;
  value: T_Value;
  onChange: (newValue: T_Value) => void;
  options: readonly T_Value[];
  mapOptionToLabel?: (option: T_Value) => T_Allowed;
  mapOptionToValue?: (option: T_Value) => T_Allowed;
};

export type T_SelectProps<T_Value> = T_Value extends T_Allowed ? T_SelectBaseProps<T_Value> : Required<T_SelectBaseProps<T_Value>>;
