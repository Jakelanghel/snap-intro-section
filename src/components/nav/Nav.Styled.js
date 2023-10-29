import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .container-img {
    padding: 1.25rem;
  }

  .open-menu {
    background-color: transparent;
    border: none;
    padding: 1.25rem;
  }

  .open-menu:hover,
  .close-menu:hover {
    cursor: pointer;
  }

  .toggle-nav:hover {
    cursor: pointer;
  }

  @media (min-width: 1280px) {
    padding: 2rem;

    .close-menu,
    .open-menu {
      display: none;
    }
  }
`;
