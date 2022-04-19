import Link from 'next/link'

interface Props {
    onClickButtonLogout: () => void
}

function Navigation({ onClickButtonLogout }: Props) {
    return <ul>
        <li>
            <Link href="/tasks">
                <a>My tasks</a>
            </Link>
        </li>
        <li>
            <Link href="/profile">
                <a>My profile</a>
            </Link>
        </li>
        <li>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </li>
        <li>
            <button onClick={onClickButtonLogout}>
                <a>Logout</a>
            </button>
        </li>
    </ul>
}

export default Navigation;