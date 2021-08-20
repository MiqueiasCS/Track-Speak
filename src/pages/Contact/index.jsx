import Header from "../../components/header";
import { ContainerCard, Container, LinkTo } from "./style";
import { GrLinkedin } from "react-icons/gr";
import Miqueias from "../../assets/contact/Miqueias.jpeg";
import Joao from "../../assets/contact/joao.jpeg";
import Vilson from "../../assets/contact/vilson.jpeg";
import Guilherme from "../../assets/contact/guilherme.jpeg";
import Italo from "../../assets/contact/italo.jpeg";

const Contact = () => {
  return (
    <Container>
      <Header />

      <h1>Contacts Us</h1>

      <div className="content">
        <LinkTo
          target="_blank"
          href="https://www.linkedin.com/in/guilherme-armesto-job-a91b72204"
        >
          <ContainerCard>
            <div className="imageContainer">
              <img src={Guilherme} alt="contact" />
            </div>
            <h2>Guilherme Armesto Job</h2>
            <GrLinkedin />
          </ContainerCard>
        </LinkTo>

        <LinkTo
          target="_blank"
          href="https://www.linkedin.com/in/italo-silva-536b6111b/"
        >
          <ContainerCard>
            <div className="imageContainer">
              <img src={Italo} alt="contact" />
            </div>
            <h2>Italo Domingos</h2>
            <GrLinkedin />
          </ContainerCard>
        </LinkTo>
        <LinkTo
          target="_blank"
          href="https://www.linkedin.com/in/jo%C3%A3o-garbini-294a393a/"
        >
          <ContainerCard>
            <div className="imageContainer">
              <img src={Joao} alt="contact" />
            </div>
            <h2>João Garbini</h2>
            <GrLinkedin />
          </ContainerCard>
        </LinkTo>
        <LinkTo
          target="_blank"
          href="https://www.linkedin.com/in/miqueias-carvalho-dos-santos/"
        >
          <ContainerCard>
            <div className="imageContainer">
              <img src={Miqueias} alt="contact" />
            </div>
            <h2>Miqueias Carvalho</h2>
            <GrLinkedin />
          </ContainerCard>
        </LinkTo>
        <LinkTo
          target="_blank"
          href="https://www.linkedin.com/in/vilson-neto-40539b17b/"
        >
          <ContainerCard>
            <div className="imageContainer">
              <img src={Vilson} alt="contact" />
            </div>
            <h2>Vilson Neto</h2>
            <GrLinkedin />
          </ContainerCard>
        </LinkTo>
      </div>
    </Container>
  );
};

export default Contact;
