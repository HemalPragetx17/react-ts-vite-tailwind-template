import type { FieldProps } from "formik";
import _ from 'lodash';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface CustomPhoneNumberInputProps extends FieldProps {
    label?: string;
    value?: any;
    onChange?: (value: any) => void;
    className?: string;
}

const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputProps> = ({
    field: { ...fields },
    form: { touched, errors },
    ...props
}) => {
    const { label, value, onChange, className, ...rest } = props;

    const error = Boolean(_.get(touched, fields?.name) && _.get(errors, fields?.name));

    React.useEffect(() => {
        // for tabIndex change in phone Input
        let selectedFlagDiv = document.getElementsByClassName('selected-flag')
        if(selectedFlagDiv.length > 0) {
            selectedFlagDiv[0].setAttribute("tabIndex", '1')
        }
    }, []);

    const phoneInputClasses = `react-tel-input flex flex-row-reverse gap-[10px] relative z-[9999] [&_.flag-dropdown]:[position:inherit] [&_.flag-dropdown]:w-[80px] [&_.flag-dropdown]:h-[58px] [&_.flag-dropdown]:border-none [&_.flag-dropdown]:rounded-[10px] [&_.flag-dropdown]:outline-none [&_.flag-dropdown]:bg-[#f0f0f0_!important] [&_.flag-dropdown]:flex [&_.flag-dropdown]:justify-center [&_.flag-dropdown]:items-center [&_.selected-flag]:scale-125 [&_.selected-flag]:h-[70%] [&_.selected-flag]:bg-[#f0f0f0_!important] hover:[&_.selected-flag]:rounded-[10px_!important] [&_.country-list]:top-0 [&_.country-list]:left-0 [&_.country-list]:m-0 [&_.country-list]:rounded-[15px] [&_.country-list]:p-[5px] [&_.country-list::-webkit-scrollbar]:w-[8px] [&_.country-list::-webkit-scrollbar-thumb]:bg-[#dfdfdf] [&_.country-list::-webkit-scrollbar-thumb]:rounded-[10px] hover:[&_.country-list::-webkit-scrollbar-thumb]:bg-[#c2c2c2] [&_.country-list::-webkit-scrollbar-track]:bg-transparent [&_input]:flex-grow [&_input]:rounded-[10px_!important] [&_input]:border-none_[!important] [&_input]:pl-[10px_!important] [&_input]:bg-[#f5f5f5_!important] [&_input]:h-[58px_!important] ${className || ''}`

    return (
        <div className={phoneInputClasses}>
            {label && <label>{label}</label>}
            <PhoneInput
                {...fields}
                {...rest}
                value={value}
                onChange={onChange}
            />
            {error && <span className="text-sm text-danger ms-2">{errors[fields?.name] as string}</span>}
        </div>
    );
};

export default CustomPhoneNumberInput
