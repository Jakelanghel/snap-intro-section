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
    /* max-height: none; */
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
    .title {
      font-size: 2.5rem;
      margin-bottom: 1%.5;
    }

    .copy {
      max-width: 400px;
      font-size: 1.15rem;
      line-height: 2rem;
    }

    .container-hero-img {
      min-height: 350px;
    }
  }

  @media (min-width: 800px) {
    height: none;

    .container-hero-img {
      min-height: 700px;
      max-width: 800px;
      margin: 0 auto;
    }

    .title {
      font-size: 3.5rem;
    }

    .copy {
      max-width: 575px;
      font-size: 1.25rem;
      line-height: 2rem;
      padding: 2rem 0;
    }

    .container-clients {
      margin-bottom: 4rem;
      margin-top: 6rem;
    }
  }

  @media (min-width: 1280px) {
    height: 70%;
    width: auto;
    flex-direction: row;
    text-align: left;
    justify-content: center;
    gap: 5rem;

    .container-hero-copy {
      width: 45%;
      order: 1;
      height: auto;
      align-items: flex-start;
      margin-top: 5rem;
    }

    .container-hero-img {
      order: 2;
      width: 30%;
      max-width: none;
      min-height: 100%;
      max-height: none;
      background-image: url(${images.imageHeroDesktop});
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 1.5rem;

      margin: 0;
    }

    .title {
      max-width: 425px;
      font-size: 4rem;
    }

    .copy {
      padding: 2rem 0;
      margin-bottom: 2rem;
    }

    .container-clients {
      margin-bottom: 4rem;
      margin-top: 8rem;

      justify-content: space-between;
    }
  }
`;
