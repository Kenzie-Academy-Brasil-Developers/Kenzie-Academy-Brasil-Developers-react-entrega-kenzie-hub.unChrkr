import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../Providers/UserInfoContext";

export const ProtectedRoutes = () => {

    const navigate = useNavigate()

    const { info } = useContext(UserInfoContext)

    useEffect(() => {
        if(!info){
            navigate('/')
        }

    }, [])

    return(
        <>
            {info ? <Outlet/>: null}
        </>
    )
}