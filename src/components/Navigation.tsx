import Link from 'next/link'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../service/AuthService';

interface Props {
}

function Navigation(props: Props) {
    const { logout, user } = useContext(AuthContext)

    const onClickButtonLogout = () => {
        logout();
    }

    return <ul>
        <li>
            <Link href="/tasks">
                <a>My tasks</a>
            </Link>
        </li>
        <li>
            <Link href="/profile">
                <a>My profile {user ? `(Logged in as ` + user.displayName + ')' : null} </a>
            </Link>
        </li>
        {
            user ? <li>
                <button onClick={onClickButtonLogout}>
                    <a>Logout</a>
                </button>
            </li> : <li>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </li>
        }
    </ul>
}

export default Navigation;