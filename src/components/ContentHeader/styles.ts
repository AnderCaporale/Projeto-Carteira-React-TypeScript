import styled from "styled-components";

interface ITitleContainerProps{
    line_color: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;


export const TitleContainer = styled.div<ITitleContainerProps>`
    
    > h1{
        
        color: ${props => props.theme.colors.white};

        &::after{
            content: "";
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.line_color};
        }

        @media(max-width: 390px){
            font-size: 26px;

            &::after{
                border-bottom-width: 5px;
            }
        }
    }
`;


export const Controllers = styled.div`
    display: flex;

    @media(max-width: 370px){
        flex-direction: column;
    }

`;