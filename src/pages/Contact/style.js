import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 15px;
  }

  @media (min-width: 768px) {
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      max-width: 560px;
    }
  }
  @media (min-width: 1245px) {
    .content {
      max-width: 840px;
    }
  }
  

`;

export const ContainerCard = styled.div`
  padding: 15px;
  background-color: var(--red);
  display: flex;
  align-items: center;
  margin: 10px 10px;

  width: 260px;
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
    border-radius: 8px;
    flex-direction: column;
    padding: 40px;
    height: 350px;
    justify-content: space-around;

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
  }
`;

export const LinkTo = styled.a`
  text-decoration: none;
  color: #0177b7;
`;
