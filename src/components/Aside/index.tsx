import React from "react";
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from "./styles";
import logoImg from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md'
import { Link } from "react-router-dom";


const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt='Logo Carteira' />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <Link to='/dashboard'>
                    <MdDashboard/>
                    Dashboard
                </Link>

                <Link to='/list/entry-balance'>
                    <MdArrowUpward/>
                    Entradas
                </Link>

                <Link to='/list/exit-balance'>
                    <MdArrowDownward/>
                    Saídas
                </Link>

                <Link to='#'>
                    <MdExitToApp/>
                    Sair
                </Link>

            </MenuContainer>
        </Container>
    );
}

export default Aside;