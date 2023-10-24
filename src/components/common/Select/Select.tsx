import React from "react";
import { T_Allowed, T_SelectProps } from "./Select.types";

export const Select = <T_Value,>({
  value,
  onChange,
  options,
  mapOptionToLabel,
  mapOptionToValue,
  id,
  placeholder,
}: T_SelectProps<T_Value>) => {
  const toLabel = (option: T_Value): T_Allowed => {
    if (mapOptionToLabel) {
      return mapOptionToLabel(option);
    }
    return typeof option === "string" || typeof option === "number" ? option : String(option);
  };

  const toValue = (option: T_Value): T_Allowed => {
    if (mapOptionToValue) {
      return mapOptionToValue(option);
    }
    return typeof option === "string" || typeof option === "number" ? option : String(option);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex]);
  };

  return (
    <select value={toValue(value)} onChange={handleChange} placeholder={placeholder} id={id}>
      {options.map((value) => (
        <option value={toValue(value)} key={toValue(value)}>
          {toLabel(value)}
        </option>
      ))}
    </select>
  );
};
