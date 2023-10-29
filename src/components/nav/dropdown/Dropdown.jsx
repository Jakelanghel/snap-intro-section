import PropTypes from "prop-types";
import { StyledDropdown } from "./Dropdown.Styled";

const Dropdown = (props) => {
  const { arr } = props;
  const dropDown = arr.map((item) => {
    if (item.img) {
      return (
        <a href="#" key={item.txt}>
          <img src={item.img} alt={item.txt} />
          {item.txt}
        </a>
      );
    } else {
      return (
        <a href="#" key={item.txt}>
          {item.txt}
        </a>
      );
    }
  });

  return <StyledDropdown>{dropDown}</StyledDropdown>;
};

Dropdown.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default Dropdown;
