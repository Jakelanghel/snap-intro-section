import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledHero = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .container-hero-img {
    order: 1;
    min-height: 300px;
    max-height: none;
    width: 100%;
    background-image: url(${images.imageHeroMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 1.5rem;
  }

  .container-hero-copy {
    height: 100%;
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 2.15rem;
    margin-bottom: 1%.5;
  }

  .copy {
    max-width: 350px;
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 1.5rem 0.5rem;
    color: var(--gray);
  }

  @media (min-width: 400px) {
    .title {
      font-size: 2.5rem;
      margin-bottom: 1%.5;
    }

    .copy {
      max-width: 400px;
      font-size: 1.15rem;
      line-height: 2rem;
    }
  }

  .container-clients {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
    margin-bottom: 4rem;
  }

  .client-img {
    width: 70px;
  }

  .audiophile {
    width: 55px;
  }

  @media (min-width: 400px) {
    .container-hero-img {
      min-height: 350px;
    }
  }
`;
