import styled, { keyframes } from "styled-components";

interface ILegendProps{
    color:string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }


    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;
    background-color: ${props=> props.theme.colors.tertiary};
    color: ${props=> props.theme.colors.white};

    border-radius: 7px;
    display: flex;

    @media(max-width:1000px){
        width: 100%;
    }

    animation: ${animate} 0.5s;

`;

export const SideLeft = styled.aside`
    padding: 30px 20px;
    
    > h2{
        margin-bottom: 20px;
    }

    @media(max-width:1000px){
        font-size: 20px;
    }

    @media(max-width:650px){
        font-size: 16px;
        padding: 30px 0 0 10px;
    }

`;

export const LegendContainer = styled.ul`
    list-style: none;
    height: 175px;
    padding-right: 15px;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.primary};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.secondary};
    }

    @media(max-width:650px){
        padding-right: 0;
    }
     
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    
    >div{
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    >span{
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;


`;

