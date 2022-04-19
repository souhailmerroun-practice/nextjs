import { useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";
import AuthService from "../src/service/AuthService";

function Login() {
    const authContext = useContext(AuthContext)

    console.log(authContext);

    const onClickButtonLogin = () => {
        console.log('log in with google')
        AuthService.logInWithGoogle();
    }

    return <>
        <h1>Login</h1>
        <button onClick={onClickButtonLogin}>Log in with Google</button>
    </>
}

export default Login;