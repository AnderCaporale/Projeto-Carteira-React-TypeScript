import React, {useMemo, useState} from "react";
import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

import { useTheme } from "../../hooks/theme";


const MainHeader: React.FC = () => {

    const {toggleTheme, theme} = useTheme();

    const darkTheme = useMemo( ()=>(
        theme.title === 'dark' ? true : false
    ), [theme]);


    const emoji = useMemo(()=> {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange = {toggleTheme}
                />

            <Profile>
                <Welcome>Bem vindo, {emoji}</Welcome>
                <UserName> Nome </UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;