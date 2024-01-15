import React, {createContext, useState, useContext} from "react";


interface IAuthContext{
    logged: boolean;
    singIn(email:string, password: string): void;
    singOut():void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ( () => {
    const [looged, setLogged] = useState<boolean>( () => {

        const isLogged = localStorage.getItem("@minha-carteira:logged");

        
        return !!isLogged;
    })


    return (
        <>
        
        </>
    )

})