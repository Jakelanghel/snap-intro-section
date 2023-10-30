import styled from "styled-components";

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  margin-left: 2rem;

  a {
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }

  @media (min-width: 1280px) {
    position: absolute;
    top: 65px;
    padding: 1.5rem;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin: 0;
    border-radius: 15px;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;
