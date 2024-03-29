import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../Providers/UserInfoContext";

export const ProtectedRoutes = () => {

    const { info } = useContext(UserInfoContext)

    return (
        <>
            {info ? <Outlet /> : <Navigate to ={'/'} />}
        </>
    )
}