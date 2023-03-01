import React, { useState } from "react";
import { ArrowDown } from "../../../theme/icons/arrow.icon";
import { Button, Options, Option } from "./index.style";
const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = props.options || ["Option 1", "Option 2", "Option 3"];
  const [initialValue, setInitialValue] = useState(props.option || "छनुहोस");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setInitialValue(option);
    props.handleClick(option);
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Button onClick={toggleDropdown}>
        <p>{initialValue}</p>
        <ArrowDown />
      </Button>
      {isOpen && (
        <Options>
          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Options>
      )}
    </div>
  );
};

export default Dropdown;
