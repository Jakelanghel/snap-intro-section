import PropTypes from "prop-types";
import Dropdown from "./dropdown/Dropdown";
import { StyledMenu } from "./Menu.Styled";
import { images } from "../../../constants/images";

const Menu = (props) => {
  const { toggleMenu } = props;

  const dropdown_1 = [
    { img: images.iconTodo, txt: "Todo List" },
    { img: images.iconCalendar, txt: "Calendar" },
    { img: images.iconReminders, txt: "Reminders" },
    { img: images.iconPlanning, txt: "Planning" },
  ];

  const dropdown_2 = [{ txt: "History" }, { txt: "Our Team" }, { txt: "Blog" }];
  return (
    <StyledMenu>
      <div className="container-menu">
        <div className="container-sidebar">
          <img
            src={images.iconCloseMenu}
            alt="close menu"
            className="close-menu"
            onClick={toggleMenu}
          />
          <ul className="container-links">
            <li>
              <Dropdown label="Features" arr={dropdown_1} />
            </li>
            <li>
              <Dropdown label="Company" arr={dropdown_2} />
            </li>

            <li>
              <a href="#" className="toggle-dropdown menu-btn">
                careers
              </a>
            </li>
            <li>
              <a href="#" className="toggle-dropdown menu-btn">
                about
              </a>
            </li>
          </ul>

          <div className="container-account-actions">
            <a href="#" className="action login">
              login
            </a>
            <a href="#" className="action register">
              register
            </a>
          </div>
        </div>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
