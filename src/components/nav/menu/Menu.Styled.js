import styled from "styled-components";

export const StyledMenu = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: var(--backdrop);

  .container-menu {
    height: 100%;
    width: 63%;
    background: var(--white);
    margin-left: auto;
  }

  .container-sidebar {
    width: 100%;
    height: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }

  .close-menu {
    width: 60px;
    padding: 1rem;
    margin-left: auto;
  }

  .container-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 2rem;
  }

  li,
  a {
    font-size: 1.1rem;
    text-transform: capitalize;
    color: var(--gray);
    text-decoration: none;
  }

  .menu-btn {
    padding: 1.25rem 2rem;
  }

  .toggle-dropdown {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .toggle-dropdown:hover {
    cursor: pointer;
  }

  .container-account-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin: 3.5rem 0;
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
    position: static;
    height: auto;
    width: 100%;
    background: transparent;

    .container-menu {
      position: static;
      height: auto;
      width: 100%;
      background: transparent;
    }

    .container-sidebar {
      width: 100%;
      height: auto;
      max-width: none;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-left: 0;
    }

    .container-links {
      flex-direction: row;
      margin-bottom: 0;
      padding: 0;
    }

    .toggle-dropdown {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .container-dropdown {
      position: relative;
    }

    .container-account-actions {
      flex-direction: row;
      align-items: flex-start;
      gap: 2rem;
      margin: 0;
    }

    .action {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 1rem 1.5rem;
    }

    .register {
      border: solid 2px var(--gray);
      border-radius: 15px;
    }
  }
`;
