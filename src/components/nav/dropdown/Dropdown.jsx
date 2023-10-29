import PropTypes from "prop-types";
import { StyledDropdown } from "./Dropdown.Styled";
import { images } from "../../../constants/images";
import { useState } from "react";

const Dropdown = (props) => {
  const { label, arr } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const arrowImg = isOpen ? images.iconArrowUp : images.iconArrowDown;

  return (
    <>
      <li className="toggle-dropdown" onClick={toggleDropdown}>
        {label} <img src={arrowImg} alt="toggle-drop-down" />
      </li>
      {isOpen && (
        <StyledDropdown>
          {arr.map((item) => (
            <a href="#" key={item.txt}>
              {item.img && <img src={item.img} alt={item.txt} />}
              {item.txt}
            </a>
          ))}
        </StyledDropdown>
      )}
    </>
  );
};

Dropdown.propTypes = {
  arr: PropTypes.array.isRequired,
  dropDownOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
