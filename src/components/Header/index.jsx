import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  Row,
  Wrapper,
  MenuRight,
  UserPicture,
} from "./styles";
import Button from "../Button";
import Logo from "../../assets/logo.png";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="logo da dio" />

          {autenticado && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar ..." />
              </BuscarInputContainer>
              <Menu href="#">Live Code</Menu>
              <Menu href="#">Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
