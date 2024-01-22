import styled, { css, keyframes } from "styled-components";


interface IContainerProps {
    type: string;
}


interface ITagProps {
    color: string;
}

const animateEntry = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }


    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;

const animateExit = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }


    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;


export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover{
        opacity: 0.7;
        transform: translateX(10px);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    > div span{
        font-weight: 500;
        font-size: 20px;
    }

    ${props => props.type ==="entry-balance" && css`
        animation: ${animateEntry} 0.5s ease-out;
    `};

    ${props => props.type ==="exit-balance" && css`
        animation: ${animateExit} 0.5s ease-out;
    `};
    


`;


export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: 13px;
    height: 60%;

    position: absolute;
    left: 0;

`;


