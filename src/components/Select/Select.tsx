import React, { useMemo, useRef, useState } from "react";

import $ from "./Select.module.scss";
import ChevronDown from "../../assets/icons/chevron-down.svg?react";
import useClickOutside from "../../hooks/use-click-outside";
import cx from "../../utils/classnames";

type Option = {
  value: string;
  label: string;
  showValueInOptions?: boolean;
  icon?: React.ReactNode;
};

type Props = {
  options: Option[];
  selectedValue?: string;
  onChange: (value: string) => void;
  width?: string;
};

const Select: React.FC<Props> = ({
  options,
  selectedValue,
  onChange,
  width,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(selectRef, () => setIsOpen(false));
  const selectedOption = useMemo(
    () =>
      options.find((option) => option.value === selectedValue) ?? options[0],
    [options, selectedValue]
  );

  return (
    <div ref={selectRef} className={$.container} style={{ width }}>
      <button className={$.select} onClick={() => setIsOpen(!isOpen)}>
        <div className={$.left}>
          {selectedOption.icon && (
            <div className={$.icon}>{selectedOption.icon}</div>
          )}
          <span>{selectedOption?.label}</span>
        </div>
        {/* <ChevronDown className={$.chevron} /> */}
        <ChevronDown />
      </button>

      {isOpen && (
        <div className={$.options}>
          {options.map((option) => (
            <button
              className={cx(
                $.option,
                selectedValue === option.value && $.selected
              )}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.icon && <div className={$.icon}>{option.icon}</div>}
              <span>
                {option.showValueInOptions ? option.value : option.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
