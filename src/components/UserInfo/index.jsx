import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({ percentual, nome, src }) => {
  return (
    <Container>
      <UserPicture src={src} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export default UserInfo;
