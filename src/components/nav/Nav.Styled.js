import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 75px;
  }

  .container-links {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .container-dropdowns {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  .toggle-dropdown {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
