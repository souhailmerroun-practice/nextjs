import Link from 'next/link'

export default function FirstPost() {
    return <>
        <h1>First post</h1>

        <Link href="/">
            <a>home</a>
        </Link>
    </>
}
