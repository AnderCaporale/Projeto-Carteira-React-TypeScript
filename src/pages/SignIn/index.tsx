import React from "react";
import { Container, Logo, Form, FormTitle } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from '../../assets/logo.svg'



const SignIn: React.FC = () => {
    return (
        <Container>

            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={ ()=>{}}>
                <FormTitle> Entrar </FormTitle>
                <Input required type="email" placeholder="E-mail"/>
                <Input required type="password" placeholder="Senha"/>

                <Button type="submit"> Acessar </Button>

            </Form>

        </Container>
        
    );
}

export default SignIn;