import { useContext } from "react";
import AuthContext from "../context/Auth";
import { Button,  HelperText, Input, Label, LoginBox, LoginContainer, Title } from "./Login-css";

export default function Auth(){
    const {Login} = useContext(AuthContext);
    return(
        <LoginContainer>
        <LoginBox>
          <Title>Login</Title>
          <form>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
            
            <Label htmlFor="password">Senha</Label>
            <Input type="password" id="password" placeholder="Digite sua senha" />
            
            <Button onClick={(e:any) => Login(e,'stenio', 'stenio')}>Entrar</Button>
          </form>
          <HelperText>Esqueceu sua senha?</HelperText>
        </LoginBox>
      </LoginContainer>
    )
}