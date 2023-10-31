import PropTypes from "prop-types";
import { useState } from "react";
import { images } from "../../../../constants/images";
import { StyledDropdown } from "./Dropdown.Styled";

const Dropdown = (props) => {
  const { label, arr } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const arrowImg = isOpen ? images.iconArrowUp : images.iconArrowDown;

  const posClass =
    label === "Features" ? "features-dropdown" : "company-dropdown";

  const dropDownItems = (
    <StyledDropdown className={posClass}>
      {arr.map((item) => (
        <a href="#" key={item.txt}>
          {item.img && <img src={item.img} alt={item.txt} />}
          {item.txt}
        </a>
      ))}
    </StyledDropdown>
  );

  return (
    <li className="container-dropdown">
      <div className="toggle-dropdown menu-btn" onClick={toggleDropdown}>
        {label} <img src={arrowImg} alt="toggle-drop-down" />
      </div>
      {isOpen && dropDownItems}
    </li>
  );
};

Dropdown.propTypes = {
  arr: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
