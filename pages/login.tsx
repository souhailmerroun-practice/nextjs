import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../src/context/AuthContext";
import AuthService from "../src/service/AuthService";

function Login() {
    const { user } = useContext(AuthContext)

    const onClickButtonLogin = () => {
        AuthService.logInWithGoogle();
    }

    return <>
        <h1>Login</h1>
        <button onClick={onClickButtonLogin}>Log in with Google</button>
    </>
}

export default Login;