import React, {useMemo, useState}  from "react";
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title, MenuItemButton, ToggleMenu, ThemeToggleFooter } from "./styles";
import logoImg from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdMenu, MdClose} from 'react-icons/md'

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";
import Toggle from "../Toggle";



const Aside: React.FC = () => {

    const [toggleMenuOpened, setToggleMenuOpened] = useState<boolean>(false);

    const {toggleTheme, theme} = useTheme();

    const darkTheme = useMemo( ()=>(
        theme.title === 'dark' ? true : false
    ), [theme]);


    const handerToggleMenu = () => {
        setToggleMenuOpened(!toggleMenuOpened);
    };

    const changeTheme = () => {
        toggleTheme();
    };

    const {signOut} = useAuth();
    

    return (
        <Container menuIsOpen={toggleMenuOpened}>
            <Header >
                <ToggleMenu onClick={handerToggleMenu} >
                    {toggleMenuOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                
                <LogImg src={logoImg} alt='Logo Carteira' />
                <Title>Minha Carteira</Title>

            </Header>

            <MenuContainer>
                <MenuItemLink to='/dashboard'>
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink to='/list/entry-balance'>
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink to='/list/exit-balance'>
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuOpened}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange = {toggleTheme}
                />
            </ThemeToggleFooter>


        </Container>
    );
}

export default Aside;