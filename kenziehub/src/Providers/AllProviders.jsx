import React from "react";
import { UserInfoProvider } from "./UserInfoContext";
import { CreateUserProvider } from "./CreateTechContext";
import { CreateModalProvider } from "./ModalContext";


const Providers = ({ children }) => {
    return (
        <UserInfoProvider>
            <CreateUserProvider>
                <CreateModalProvider>
                    {children}
                </CreateModalProvider>
            </CreateUserProvider>
        </UserInfoProvider>
    )
}

export default Providers