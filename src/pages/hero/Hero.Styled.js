import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledHero = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .container-hero-img {
    order: 1;
    min-height: 300px;
    width: 100%;
    background-image: url(${images.imageHeroMobile});
    background-size: cover;
    margin-bottom: 3rem;
  }

  .container-hero-copy {
    order: 2;
  }

  .title {
    font-size: 2.15rem;
    margin-bottom: 1%.5;
  }

  .copy {
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1.25rem 1rem;
    color: var(--gray);
  }

  .container-clients {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .client-img {
    width: 70px;
  }

  .audiophile {
    width: 55px;
  }
`;
