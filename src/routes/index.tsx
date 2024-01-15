import React from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { BrowserRouter } from "react-router-dom";

const Routes: React.FC = () => (
    <BrowserRouter>
        <AuthRoutes />
    </BrowserRouter>
    
);


export default Routes;