import React from "react";
import Select, { components } from "react-select";
import type { MultiValue, OptionProps, SingleValue } from "react-select";
import type { FieldProps } from "formik";
/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface SelectOption {
  label: string;
  value: string | number;
}

interface CustomSelectProps extends FieldProps {
  label?: string;

  options: SelectOption[];

  placeholder?: string;

  isMulti?: boolean;

  isClearable?: boolean;

  isDisabled?: boolean;

  isSearchable?: boolean;

  className?: string;

  onInputChange?: (value: string) => void;

  isLoading?: boolean;

  isApiSearch?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             Custom Option UI                               */
/* -------------------------------------------------------------------------- */

const CustomOption = (props: OptionProps<SelectOption, boolean>) => {
  const { isSelected } = props;

  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between">
        <span className="text-black">{props.children}</span>

        {isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 111.414-1.414l2.493 2.493 6.493-6.493a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </components.Option>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Select Component                                */
/* -------------------------------------------------------------------------- */

const CustomSelect: React.FC<CustomSelectProps> = ({
  field,
  form,
  label,
  options,
  placeholder = "Select...",
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  isSearchable = false,
  className = "",
  onInputChange,
  isLoading = false,
  isApiSearch = true, 
}) => {
  const { name, value } = field;

  const { setFieldValue, setFieldTouched, touched, errors } = form;

  const error = touched[name] && errors[name];

  const handleChange = (
    selected: MultiValue<SelectOption> | SingleValue<SelectOption>,
  ) => {
    setFieldValue(name, selected);
  };

  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}

      <Select
        name={name}
        options={options}
        value={value}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name, true)}
        isMulti={isMulti}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        closeMenuOnSelect={isMulti ? false : true}
        hideSelectedOptions={false}
        placeholder={placeholder}
        onInputChange={onInputChange}
        isLoading={isLoading}
        filterOption={
          isApiSearch ? null : undefined
        }
        components={{
          Option: CustomOption,
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#f3f4f6",
            primary25: "#f3f4f6",
            primary50: "#f3f4f6",
            neutral0: "#ffffff",
            neutral80: "#000000",
          },
        })}
        classNames={{
          control: (state) =>
            `
            min-h-[42px]
            border
            rounded-md
            shadow-sm
            ${
              error
                ? "border-red-500"
                : state.isFocused
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-gray-300"
            }
          `,

          valueContainer: () => "px-2 py-1",

          placeholder: () => "text-gray-400",

          menu: () =>
            `
            mt-1
            border
            border-gray-200
            rounded-md
            overflow-hidden
            shadow-lg
            bg-white
            z-50
          `,

          option: () =>
            `
            px-3
            py-2
            cursor-pointer
            transition-colors
            bg-transparent
            text-black
          `,

          multiValue: () => "bg-blue-100 rounded px-1",

          multiValueLabel: () => "text-blue-700 text-sm",

          multiValueRemove: () =>
            "hover:bg-blue-transparent active:bg-transparent rounded",
        }}
        styles={{
          multiValueRemove: (base) => ({
            ...base,
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent",
              color: "black",
            },

            ":active": {
              backgroundColor: "transparent",
            },
          }),
        }}
        noOptionsMessage={() => "No data found"}
      />

      {error && <p className="mt-1 text-sm text-red-500">{String(error)}</p>}
    </div>
  );
};

export default CustomSelect;
