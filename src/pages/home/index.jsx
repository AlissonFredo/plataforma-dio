import Header from "../../components/Header";
import Banner from "../../assets/image 1.png";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio proficional, evoluindo em comunidade
            com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={Banner} alt="imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
