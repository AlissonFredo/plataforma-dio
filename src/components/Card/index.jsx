import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media.licdn.com/dms/image/D4D16AQFZFKSyInPhLA/profile-displaybackgroundimage-shrink_350_1400/0/1679025913815?e=1711584000&v=beta&t=9vBhneI0fG23vn1cNmyqxSK07a7Wzad99Gp0TXNf9Fo" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/63986587?s=400&u=83ecee1cc8b6d3e26ec89d8ff9be5be384b730dd&v=4" />
          <div>
            <h4>Pablo Henrique</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de HTML e CSS no bootcamp DIO do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
