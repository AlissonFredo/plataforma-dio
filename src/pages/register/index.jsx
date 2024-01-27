import Header from "../../components/Header";
import {
  Container,
  Column,
  CriarText,
  SubTitleRegister,
  Title,
  TitleRegister,
  Wrapper,
  Info,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("O campo é obrigatorio"),
    password: yup
      .string()
      .min(3, "Digite no minimo 3 caracteres")
      .required("O campo é obrigatorio"),
  })
  .required();

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Header />
      <Container>
        <Column flex={1}>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column flex={1}>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubTitleRegister>
              Crie sua conta e make the change._
            </SubTitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="name"
                placeholder="Nome completo"
                leftIcon={<BsFillPersonFill />}
                errorMessage={errors?.name?.message}
              />
              <Input
                control={control}
                name="email"
                placeholder="Email"
                leftIcon={<MdEmail />}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors?.password?.message}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Info>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Info>
            <p>
              Já tenho conta. <CriarText>Fazer login</CriarText>
            </p>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
