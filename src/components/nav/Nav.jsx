import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";

const Nav = () => {
  return (
    <StyledNav>
      <div className="container-links">
        <div className="container-logo">
          <img src={images.logo} alt="snap logo" className="logo" />
        </div>

        <ul className="container-dropdowns">
          <li className="toggle-dropdown">
            features <img src={images.iconArrowDown} alt="toggle-drop-down" />
          </li>
          <li className="toggle-dropdown">
            company <img src={images.iconArrowDown} alt="toggle-drop-down" />
          </li>
          <li className="toggle-dropdown">
            careers <img src={images.iconArrowDown} alt="toggle-drop-down" />
          </li>
          <li className="toggle-dropdown">
            about <img src={images.iconArrowDown} alt="toggle-drop-down" />
          </li>
        </ul>
      </div>
      <div className="container-account-actions">
        <a href="#" className="login">
          login
        </a>
        <a href="#" className="register">
          login
        </a>
      </div>
    </StyledNav>
  );
};

export default Nav;
