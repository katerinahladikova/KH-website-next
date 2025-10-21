"use client";

import { Link, usePathname } from "@/i18n/navigation";
import Mail from "./Mail";
import { useTranslations } from "next-intl";

export function Navigation() {
    const t = useTranslations("navigation");
    const pathname = usePathname();
    return (
        <nav className="text-inky container pt-3.5 pb-2.5 flex gap-16 items-center">
            <Link href="#" className="font-bold uppercase">
                Kateřina Hladíková
            </Link>
            <div className="uppercase font-bold text-sm flex justify-between gap-10 items-center">
                <Link
                    href="#"
                    className="relative before:absolute before:left-1/2 before:-bottom-2 before:h-0.75 before:bg-inky before:-translate-x-1/2 before:transition-[width] before:w-0 hover:before:w-6"
                >
                    {t("about")}
                </Link>
                <Link
                    href="#"
                    className="relative before:absolute before:left-1/2 before:-bottom-2 before:h-0.75 before:bg-inky before:-translate-x-1/2 before:transition-[width] before:w-0 hover:before:w-6"
                >
                    {t("portfolio")}
                </Link>
            </div>
            <div className="uppercase font-bold text-sm m-auto mr-0 flex justify-between gap-5 items-center">
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
        </nav>
    );
}
