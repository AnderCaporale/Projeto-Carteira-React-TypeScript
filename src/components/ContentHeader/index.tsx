import React from "react";
import { Container, TitleContainer, Controllers } from "./styles";

interface IContentHeaderProps{
    title: string;
    line_color: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title, line_color, children}) => {

    return (
        <Container>
            <TitleContainer line_color={line_color}>
                <h1>{title}</h1>
            </TitleContainer>
            
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;