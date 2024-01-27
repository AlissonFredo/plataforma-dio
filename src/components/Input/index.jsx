import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";
const Input = ({ leftIcon, name, errorMessage, control, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText name={name} {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export default Input;
