import React from "react";
import { Grid } from "./styles";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";


interface IChildrenProps {
    children: React.ReactNode;
}

const Layout: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                { children }
            </Content>
        </Grid>
    );
}

export default Layout;