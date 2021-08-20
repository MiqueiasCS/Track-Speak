import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 15px;
  }

  @media (min-width: 768px) {
    .content {
      display: flex;
      flex-wrap: wrap;
      max-width: 800px;
    }
  }
  @media (min-width: 1440px) {
    .content {
    }
  }
`;

export const ContainerCard = styled.div`
  padding: 15px;
  background-color: var(--red);
  display: flex;
  align-items: center;
  margin: 10px 10px;
  max-width: 700px;
  min-width: 300px;
  justify-content: space-between;

  svg {
    width: 2em;
    height: 2em;
    background-color: var(--white);
    color: var(--blue);
  }

  :hover {
    filter: brightness(0.9);
    cursor: pointer;
    transition: 0.5s;
  }

  h2 {
    font-size: 1.2rem;
    color: var(--white);
  }

  .imageContainer {
    display: none;
  }

  @media (min-width: 768px) {
    margin: 8px 10px;
    width: 20vw;
    border-radius: 8px;
    flex-direction: column;
    padding: 40px;
    height: 350px;
    justify-content: space-between;

    /* h2 {
      margin: 5px 0;
    } */

    .imageContainer {
      display: block;
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        object-fit: contain;
        border-radius: 50%;
        border: 2px solid lightgray;
        padding: 5px;
      }
    }
    svg {
      margin-right: 18px;
    }
  }
`;

export const LinkTo = styled.a`
  text-decoration: none;
  color: #0177b7;
`;
