import React from "react";
import { Routes, Route } from 'react-router-dom'

import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";
import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path='/' element={<SignIn/>}  />
        <Route path='/login' element={<SignIn/>}  />
    </Routes>
);

export default AuthRoutes;

