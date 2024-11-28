import Link from "next/link"

// components
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"

export default function Header() {
    return (
        <header className="sticky top-0 w-full z-50 flex items-center justify-between
                           px-6 py-4 shadow-md backdrop-blur-lg">
            {/* logo */}
            <div className="container mx-auto">
                <Link href="/">
                    <h1 className="text-lg font-bold">
                        Рябов Сергей <span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>

            {/* nav for desktop */}
            <div className="hidden xl:flex">
                <Navbar />
            </div>

            {/* nav for mobile */}
            <div className="xl:hidden">
                <NavbarMobile />
            </div>
        </header>
    )
};