import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary} ;
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    a{
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

`;


export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
    font-size: 16px;
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