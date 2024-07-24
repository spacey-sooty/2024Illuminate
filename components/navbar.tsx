/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JmhI3DXUhsn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <header className="flex h-14 w-full items-center justify-between border-b bg-background px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <XIcon className="h-6 w-6" />
                <span className="text-lg font-medium">Keep it Real</span>
            </Link>
            <nav className="flex items-center gap-4">
                <Link href="https://example.com" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Install
                </Link>
            </nav>
        </header>
    )
}

function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
