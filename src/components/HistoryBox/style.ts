import styled from "styled-components";


interface ILegendProps{
    color:string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 330px;
    width: 100%;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;   
    

`;

export const Header = styled.header`    
    
    display: flex;
    width: 100%;
    justify-content: space-between;

    >h2{
        margin-bottom: 20px;
        padding-left: 17px;
    }

    @media(max-width:770px){
        flex-direction: column;
    }

`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;

`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 7px;
    padding-right: 20px;
    
    >div{
        background-color: ${props => props.color};
        width: 25px;
        height: 25px;
        border-radius: 5px;
        
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    >span{
        margin-left: 5px;
    }

    @media(max-width:770px){
        margin-left: 18px;
        margin-bottom: 15px;
        >div{
            width: 20px;
            height: 20px;

        }
    }
`;