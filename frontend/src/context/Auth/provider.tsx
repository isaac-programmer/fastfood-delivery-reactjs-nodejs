import { createContext, useEffect, useState } from "react";
import { AuthContextProps, AuthContextType } from "../../types";

const INITIAL_VALUES_AUTHCONTEXT = {
    userSigned: false,
    userRole: "",
    setUserRole: () => {},
    setUserSigned: () => {}
}

export const AuthContext = createContext<AuthContextType>(INITIAL_VALUES_AUTHCONTEXT);

export default function AuthProvider({ children }: AuthContextProps) {
    const [userRole, setUserRole] = useState<string>(INITIAL_VALUES_AUTHCONTEXT.userRole);
    const [userSigned, setUserSigned] = useState<boolean>(INITIAL_VALUES_AUTHCONTEXT.userSigned);

    // Garante que ao recarregar a página diretamente pelo navegador,
    // os estados do contexto permanecerão inalterados.
    useEffect(() => {
        if(Boolean(sessionStorage.getItem("userSigned")) === true) {
            setUserSigned(true);
        }

        if(sessionStorage.getItem("userRole")) {
            setUserRole(sessionStorage.getItem("userRole") as string);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                userRole,
                userSigned,
                setUserRole,
                setUserSigned
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}