import styled, {css} from "styled-components";
import { Link } from 'react-router-dom';

interface IContainerProps{
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps{
    menuIsOpen: boolean;
}


export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary} ;
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    a {
        color: ${props => props.theme.colors.info};
        text-decoration: none;
        margin: 7px 0;
        display: flex;
        align-items: center;

        transition: 0.3s;

        &:hover{
            opacity: 0.7;
        }

        > svg {
            font-size: 18px;
            margin-right: 5px;
        }
    }

    position: relative;

    @media (max-width:650px){
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props=>props.theme.colors.gray};
        `};
    }

`;


export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;

`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media (max-width:650px){
        display: none;
    }


`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media (max-width:650px){
       display: none;

    }

`;

export const MenuContainer = styled.nav`
    display: flex;
    font-size: 20px;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 10px;
`;


export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity ease .3s;
    display: flex;
    align-items: center;
 
    margin: 7px 0;
 
    &:hover {
        opacity: .7;
    }
 
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    color: ${props => props.theme.colors.info};
    font-size: 20px;
    border: none;
    background: none;

    transition: opacity ease .3s;
    display: flex;
    align-items: center;
 
    margin: 7px 0;
 
    &:hover {
        opacity: .7;
    }
 
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props=>props.theme.colors.warning};
    color: ${props=>props.theme.colors.white};

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;   
    }

    display: none;

    @media(max-width: 650px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
`;


export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media (max-width:650px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
    
`;