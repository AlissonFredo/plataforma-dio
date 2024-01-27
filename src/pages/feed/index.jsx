import Header from "../../components/Header";
import { Container, Title, TitleHighLight, Column } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={35}
            nome="Douglas Alisson"
            src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4"
          />
          <UserInfo
            percentual={35}
            nome="Douglas Alisson"
            src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4"
          />
          <UserInfo
            percentual={35}
            nome="Douglas Alisson"
            src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4"
          />
          <UserInfo
            percentual={35}
            nome="Douglas Alisson"
            src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4"
          />
          <UserInfo
            percentual={35}
            nome="Douglas Alisson"
            src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
