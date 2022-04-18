import Link from 'next/link'

export default function FirstPost() {
    return <>
        <h1 className="bg-slate-800">First post</h1>

        <Link href="/">
            <a>home</a>
        </Link>
    </>
}
