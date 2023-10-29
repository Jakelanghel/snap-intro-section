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

  .container-menu {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: var(--backdrop);
    display: flex;
  }

  .container-sidebar {
    width: 62%;
    max-width: 400px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
  }

  .close-menu {
    width: 60px;
    padding: 1rem;
    margin-left: auto;
  }

  .container-links {
    list-style: none;
    padding-top: 2rem;
    padding-left: 2rem;
    margin-bottom: 3rem;
  }

  li,
  a {
    font-size: 1.1rem;
    text-transform: capitalize;
    color: var(--gray);
    text-decoration: none;
  }

  li {
    margin-bottom: 1.5rem;
  }

  .toggle-dropdown {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .container-account-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .action {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .register {
    padding: 0.75rem 0;
    border: solid 2px var(--gray);
    border-radius: 15px;
  }

  @media (min-width: 1280px) {
    .close-menu,
    .open-menu {
      display: none;
    }

    .container-menu {
      position: static;
      height: auto;
      width: 100%;
      background: transparent;
      border: solid 2px red;
    }

    .container-sidebar {
      width: 100%;
      max-width: none;
      margin-left: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 0;
    }

    .container-links {
      list-style: none;
      display: flex;
      align-self: center;
      padding-top: 2rem;
      padding-left: 2rem;
      margin-bottom: 0;
    }

    li,
    a {
      margin-right: 1rem;
    }
  }

  /* width: 100%;
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
  } */
`;
