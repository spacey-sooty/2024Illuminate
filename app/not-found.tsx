import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1 className="font-bold text-2xl">Error 404 Page Not Found</h1>
            <Link href="/"></Link>
        </div>
    )
}
