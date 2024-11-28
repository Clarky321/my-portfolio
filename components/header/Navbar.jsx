"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

// Страницы для навигации
const links = [
    { name: "works", path: "/works" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex space-x-6">
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`capitalize font-medium hover:text-accent transition-all ${link.path === pathname
                        ? "text-accent border-accent border-b-2"
                        : ""}`
                    }>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
