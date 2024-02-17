"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserButton from "../UserButton";

type Props = {
    navLinks: { label: string; href: string }[];
};

const Navbar = ({ navLinks }: Props) => {
    const pathname = usePathname();

    return (
        <nav className="mb-5 flex w-full max-w-[600px] items-center justify-between gap-5 overflow-auto rounded-xl border p-4 shadow-sm dark:border-none dark:bg-card">
            <div className="flex items-center gap-4">
                {navLinks.map((navLink) => (
                    <Button
                        key={navLink.label}
                        variant={pathname === navLink.href ? "default" : "outline"}
                        asChild
                    >
                        <Link href={navLink.href}>{navLink.label}</Link>
                    </Button>
                ))}
            </div>
            <UserButton />
        </nav>
    );
};

export default Navbar;
