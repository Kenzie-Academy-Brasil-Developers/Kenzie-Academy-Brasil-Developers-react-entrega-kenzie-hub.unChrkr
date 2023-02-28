import React from "react";
import { UserInfoProvider } from "./UserInfoContext";
import { TechContextProvider } from "./TechsContext";
import { CreateModalProvider } from "./ModalContext";


const Providers = ({ children }) => {
    return (
        <UserInfoProvider>
            <TechContextProvider>
                <CreateModalProvider>
                    {children}
                </CreateModalProvider>
            </TechContextProvider>
        </UserInfoProvider>
    )
}

export default Providers