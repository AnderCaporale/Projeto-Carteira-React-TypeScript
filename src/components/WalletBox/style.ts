import styled, { keyframes } from "styled-components";

interface IContainerProps{
    color: string;
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

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 150px;
    margin: 10px 0;

    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    > img{
        height: 110%;
        position: absolute;
        top: -5px;
        right: -30px;
        opacity: 0.3;
       
    }

    > span{
        font-size: 18px;
        font-weight: 500;
    }

    > small{
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width:1000px){
        > span {
            font-size: 14px;
        }
        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            > strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width:650px){

        width: 100%;

        > h1 {
            word-wrap: break-word;
            font-size: 24px;

            > strong {
                display: inline;
                font-size: 24px;
            }
        }

        >small{
            font-size: 16px;
        }
    }

    animation: ${animate} 0.5s;

`;