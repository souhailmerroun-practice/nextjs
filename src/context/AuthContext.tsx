import { createContext, useState, useEffect } from "react"
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase.config";
import AuthService from "../service/AuthService";
import PageProtection from "../../pages/PageProtection";

export const AuthContext = createContext({})

export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = useState<User>()

    const login = () => {
        AuthService.logInWithGoogle();
    }

    const logout = () => {
        AuthService.logout();
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
            } else {
                // User is signed out
                // ...
                setUser(undefined);
            }
        });
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <PageProtection>{children}</PageProtection>
        </AuthContext.Provider >
    )
}