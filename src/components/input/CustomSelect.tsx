import React from "react";
import Select, { components } from "react-select";
import type { MultiValue, OptionProps, SingleValue } from "react-select";
import type { FieldProps } from "formik";
import CustomCheckbox from "./CustomCheckbox";
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

  showCheckbox?: boolean;

  onInputChange?: (value: string) => void;

  isLoading?: boolean;

  isApiSearch?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             Custom Option UI                               */
/* -------------------------------------------------------------------------- */

const CustomOption = (props: OptionProps<SelectOption, boolean>) => {
  const { isSelected } = props;
  const showCheckbox = !!((props.selectProps as any)?.showCheckbox);

  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between w-full gap-2">
        <div className="min-w-0 flex items-center gap-2 overflow-hidden">
          {showCheckbox && (
            <CustomCheckbox
              checked={isSelected}
              onChange={() => {}}
              className="pointer-events-none"
              containerClassName="m-0 p-0"
              label=""
            />
          )}
          <span className="whitespace-nowrap text-black">{props.children}</span>
        </div>

        {!showCheckbox && isSelected && (
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
  showCheckbox = false,
}) => {
  const { name, value } = field;

  const { setFieldValue, setFieldTouched, touched, errors } = form;

  const error = touched[name] && errors[name];

  const normalizedValue = isMulti
    ? options.filter(option => Array.isArray(value) && value.includes(option.value))
    : options.find(option => option.value === value) || null;

  const handleChange = (
    selected: MultiValue<SelectOption> | SingleValue<SelectOption>,
  ) => {
    if (isMulti) {
      const values = selected ? (selected as MultiValue<SelectOption>).map(s => s.value) : [];
      setFieldValue(name, values);
    } else {
      const val = selected ? (selected as SingleValue<SelectOption>)?.value : null;
      setFieldValue(name, val);
    }
  };

  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}

      <Select
        {...({ showCheckbox } as any)}
        name={name}
        options={options}
        value={normalizedValue}
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
            border-gray-300
            rounded-md
            shadow-sm
            hover:border-gray-300
            ${
              state.menuIsOpen
                ? "border-gray-300"
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
          control: (base) => ({
            ...base,
            borderColor: "#d1d5db",
            boxShadow: "none",
          
            ":hover": {
              borderColor: "#d1d5db",
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
