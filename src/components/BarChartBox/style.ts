import styled, { keyframes } from "styled-components";


interface ILegendProps{
    color:string;
}

const animate = keyframes`
    0%{
        transform: translateY(100px);
        opacity: 0;
    }


    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;


export const Container = styled.div`
    display: flex;
    width: 48%;
    min-height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    @media(max-width:1000px){
        width: 100%;
    }

    animation: ${animate} 0.5s;
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2{
        margin-bottom: 10px;
    }

`;

export const SideRight = styled.main`
    flex:1;
    min-height: 150px;

    display: flex;
    justify-content: center;

    padding-top: 35px;

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