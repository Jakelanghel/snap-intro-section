import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";
import { useState } from "react";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <StyledNav>
      <div className="container-img">
        <img src={images.logo} alt="snap logo" className="logo" />
      </div>

      <div className={menuIsOpen ? `container-menu open` : "container-menu"}>
        <div className="container-sidebar">
          <img
            src={images.iconCloseMenu}
            alt="close menu"
            className="close-menu"
            onClick={toggleMenu}
          />
          <ul className="container-links">
            <li className="toggle-dropdown">
              features <img src={images.iconArrowDown} alt="toggle-drop-down" />
            </li>
            <li className="toggle-dropdown">
              company <img src={images.iconArrowDown} alt="toggle-drop-down" />
            </li>
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

      <button className="open-menu" onClick={toggleMenu}>
        <img src={images.iconMenu} alt="open menu" />
      </button>
    </StyledNav>
  );
};

export default Nav;
