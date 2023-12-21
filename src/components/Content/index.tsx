import React from "react";
import { Container } from "./styles";

interface IChildrenProps {
    children: React.ReactNode;
}

const Content: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default Content;