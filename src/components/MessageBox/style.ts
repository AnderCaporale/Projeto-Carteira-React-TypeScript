import styled, {keyframes} from "styled-components";

const animate = keyframes`
    0%{
        transform: translateX(-100px);
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
    background-color: ${props=>props.theme.colors.tertiary};
    color: ${props=>props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    > header img{
        width: 30px;
        margin-left: 7px;
    }

    > header p{
        font-size: 20px;
    }

    @media(max-width:1000px){
        width: 100%;
        height: 180px;

        > header p {
            font-size: 20px;
        } 
    }

    animation: ${animate} 0.5s;

`;