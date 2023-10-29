import PropTypes from "prop-types";
import Dropdown from "./dropdown/Dropdown";
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
    <div className={"container-menu"}>
      <div className="container-sidebar">
        <img
          src={images.iconCloseMenu}
          alt="close menu"
          className="close-menu"
          onClick={toggleMenu}
        />
        <ul className="container-links">
          <Dropdown label="Features" arr={dropdown_1} />

          <Dropdown label="Company" arr={dropdown_2} />

          <li>
            <a href="#">careers</a>
          </li>
          <li>
            <a href="#">about</a>
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
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
