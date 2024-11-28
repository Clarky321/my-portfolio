"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Страницы для навигации
const links = [
    { name: "works", path: "/works" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
];

export default function NavbarMobile() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <HiMenu className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                    <h1 className="text-2xl font-semibold"> 
                        <span className="text-accent">.</span> Рябов Сергей  
                    </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname &&
                            "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
};