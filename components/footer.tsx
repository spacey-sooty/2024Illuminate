import Link from "next/link"
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Component() {
    return (
        <footer className="bg-muted py-6 w-full">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                <p className="text-sm text-muted-foreground">Copyright © 2024 Keep It Real Inc.</p>
                <div className="flex items-center space-x-4">
                    <Link href="#" aria-label="Instagram" prefetch={false}>
                        <FaInstagram className="h-5 w-5 text-muted-foreground hover:text-primary-foreground" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" prefetch={false}>
                        <FaTiktok className="h-5 w-5 text-muted-foreground hover:text-primary-foreground" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
