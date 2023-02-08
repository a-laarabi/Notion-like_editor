import React, { useState } from "react";
import { FaAngleDown } from 'react-icons/fa'
function DropdownMenu() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Publish Space");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDisplayMenu(false);
  };

  return (
    <div className="dropdown" style={containerStyles}>
      <div onClick={() => setDisplayMenu(!displayMenu)} style={buttonStyles}>
        {selectedOption} {' '}<FaAngleDown />
      </div>
      {displayMenu ? (
        <ul style={menuStyles}>
          <li onClick={() => handleOptionClick("Home")}>Home</li>
          <li onClick={() => handleOptionClick("Publish Space")}>Publish Space</li>
        </ul>
      ) : null}
    </div>
  );
}

const containerStyles = {
  display: "inline-block",
  position: "relative",
  minWidth: "120px"
};

const buttonStyles = {
  cursor: "pointer",
  display: "flex",
  alignItems: "flex-end",
  gap: "5px",
  color: '#3565a9',
};

const menuStyles = {
  display: "block",
  position: "absolute",
  top: "100%",
  left: 0,
  listStyle: "none",
  color: '#3565a9',
  cursor: "pointer",
  marginTop: "5px"
};

export default DropdownMenu;
