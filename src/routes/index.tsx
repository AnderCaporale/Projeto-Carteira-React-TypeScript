import React from "react";
import App from "../App";
import AppRoutes from "./app.routes";
import { BrowserRouter } from "react-router-dom";

const Routes: React.FC = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    
);


export default Routes;