"use client";

import { Link, usePathname } from "@/i18n/navigation";
import Mail from "./Mail";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export function Navigation() {
    const t = useTranslations("navigation");
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        let prevScroll = 0;

        window.addEventListener("scroll", () => {
            if (window.scrollY > prevScroll) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            prevScroll = window.scrollY;
        });
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 bg-surface/80 transition-transform backdrop-blur-md z-20 ${scrolled && !isMenuOpen ? "-translate-y-full" : "translate-y-0"}`}>
            <nav className="text-inky container pt-3.5 pb-2.5 flex gap-16 items-center max-lg:justify-between">
                <Link href="/" className="font-bold uppercase z-20">
                    Kateřina Hladíková
                </Link>
                <div className="uppercase font-bold text-sm flex justify-between gap-10 items-center max-lg:hidden">
                    <Link
                        href="/about"
                        className={`relative before:absolute before:left-1/2 before:-bottom-2 before:h-0.75 before:bg-inky before:-translate-x-1/2 before:transition-[width] before:w-0 hover:before:w-6 ${
                            pathname.includes("about") ? "before:w-6" : ""
                        }`}
                    >
                        {t("about")}
                    </Link>
                    <Link
                        href="/portfolio"
                        className={`relative before:absolute before:left-1/2 before:-bottom-2 before:h-0.75 before:bg-inky before:-translate-x-1/2 before:transition-[width] before:w-0 hover:before:w-6 ${
                            pathname.includes("portfolio") ? "before:w-6" : ""
                        }`}
                    >
                        {t("portfolio")}
                    </Link>
                </div>
                <div className="uppercase font-bold text-sm m-auto mr-0 flex justify-between gap-5 items-center max-lg:hidden">
                    <p>{t("contact")}</p>
                    <Mail mail="kat.hladikova@email.cz" />
                    <div className="flex justify-center gap-1 text-base">
                        <Link href={pathname} locale="cs">
                            CZ
                        </Link>
                        |
                        <Link href={pathname} locale="en">
                            EN
                        </Link>
                    </div>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-white rounded-3xl h-8 px-3 cursor-pointer z-20 lg:hidden">
                    <Icon icon={isMenuOpen ? "material-symbols:close" : "material-symbols:menu"} className="text-2xl" />
                </button>
                <div
                    className={`transition-all fixed lg:hidden top-0 left-0 right-0 h-screen z-10 bg-surface grid place-items-center ${
                        isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
                >
                    <div className="container flex flex-col gap-60 items-center">
                        <div className="uppercase font-bold text-sm flex flex-col gap-5 items-center">
                            <Link
                                href="/about"
                                className={`relative before:absolute before:left-1/2 before:-bottom-2 before:h-0.75 before:bg-inky before:-translate-x-1/2 before:transition-[width] before:w-0 hover:before:w-6 ${
                                    pathname.includes("about") ? "before:w-6" : ""
                                }`}
                            >
                                {t("about")}
                            </Link>
                            <Link
                                href="/portfolio"
                                className={`relative before:absolute before:left-1/2 before:-bottom-2 before:h-0.75 before:bg-inky before:-translate-x-1/2 before:transition-[width] before:w-0 hover:before:w-6 ${
                                    pathname.includes("portfolio") ? "before:w-6" : ""
                                }`}
                            >
                                {t("portfolio")}
                            </Link>
                        </div>
                        <div className="uppercase font-bold text-sm flex flex-col gap-5 items-center">
                            <p>{t("contact")}</p>
                            <Mail mail="kat.hladikova@email.cz" />
                            <div className="flex justify-center gap-1 text-base">
                                <Link href={pathname} locale="cs">
                                    CZ
                                </Link>
                                |
                                <Link href={pathname} locale="en">
                                    EN
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
