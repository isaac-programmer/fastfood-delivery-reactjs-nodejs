import { createContext, useEffect, useState } from "react";
import { AuthContextProps, AuthContextType } from "../../types";

const INITIAL_VALUES_AUTHCONTEXT = {
    signed: false,
    setSigned: () => {}
}

export const AuthContext = createContext<AuthContextType>(INITIAL_VALUES_AUTHCONTEXT);

export default function AuthProvider({ children }: AuthContextProps) {
    const [signed, setSigned] = useState<boolean>(INITIAL_VALUES_AUTHCONTEXT.signed);

    useEffect(() => {
        if(Boolean(sessionStorage.getItem("signed")) === true) {
            setSigned(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signed,
                setSigned
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}