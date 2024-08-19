import { useContext, useState } from "react";
import AuthContext from "../context/Auth";
import { Button,  HelperText, Input, Label, LoginBox, LoginContainer, Title } from "./Login-css";

export default function Auth(){
    const {Login} = useContext(AuthContext);
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <LoginContainer>
        <LoginBox>
          <Title>Login</Title>
          <form>
            <Label htmlFor="email">E-mail</Label>
            <Input onChange={(e:any) => setEmail(e.target.value)} type="email" id="email" placeholder="Digite seu e-mail" />
            
            <Label htmlFor="password">Senha</Label>
            <Input onChange={(e:any) => setPassword(e.target.value)} type="password" id="password" placeholder="Digite sua senha" />
            
            <Button onClick={(e:any) => Login(e,email, password)}>Entrar</Button>
          </form>
          <HelperText>Esqueceu sua senha?</HelperText>
        </LoginBox>
      </LoginContainer>
    )
}