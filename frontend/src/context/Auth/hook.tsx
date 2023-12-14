import { useContext } from "react";
import { AuthContext } from "./provider";

export default function useAuthContext() {
    return useContext(AuthContext);
}