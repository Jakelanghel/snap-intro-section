import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";
import { useState } from "react";

import Menu from "./menu/Menu";

const Nav = () => {
  const initial = window.innerWidth >= 1280;
  const [menuIsOpen, setMenuIsOpen] = useState(initial);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleResize = () => {
    const isOpen = window.innerWidth >= 1280;
    setMenuIsOpen(isOpen);
  };

  window.addEventListener("resize", handleResize);

  return (
    <StyledNav>
      <div className="container-img">
        <img src={images.logo} alt="snap logo" className="logo" />
      </div>

      {menuIsOpen ? <Menu toggleMenu={toggleMenu} /> : null}

      <button className="open-menu" onClick={toggleMenu}>
        <img src={images.iconMenu} alt="open menu" />
      </button>
    </StyledNav>
  );
};

export default Nav;
