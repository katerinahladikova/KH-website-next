import { useTranslations } from "next-intl";
import Image from "next/image";
import Mail from "./Mail";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";

export default function Footer() {
    const t = useTranslations("footer");
    return (
        <footer className="bg-black">
            <div className="grid md:grid-cols-2 max-md:gap-10 pt-8 font-bold container">
                <div className="max-md:order-2">
                    <div>
                        <h3 className="text-gray uppercase text-sm font-semibold mb-5">Kateřina Hladíková</h3>
                        <p dangerouslySetInnerHTML={{ __html: t("paragraph") }} className="text-darkgray text-xs"></p>
                    </div>
                    <Image src="/memoji-hands.png" alt={t("alt")} width={250} height={250} />
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: t("connect") }} className="text-surface text-xl mb-7 font-semibold"></p>
                    <Mail mail="kat.hladikova@email.cz" />
                    <div className="mt-12">
                        <h3 className="text-darkgray uppercase text-sm font-semibold mb-5">{t("socials")}</h3>
                        <div className="flex gap-5 w-max text-surface">
                            <Link href="https://github.com/katerinahladikova" className="flex items-center gap-1.5 text-surface font-normal hover:text-[#ffffffa9] transition-colors">
                                <Icon icon={"entypo-social:github"} />
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/kate%C5%99ina-hlad%C3%ADkova-71818b336/"
                                className="flex items-center gap-1.5 text-surface font-normal hover:text-[#ffffffa9] transition-colors"
                            >
                                <Icon icon={"entypo-social:linkedin-with-circle"} />
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1e1e1e] text-darkgray text-center content-center h-12 uppercase text-xs font-semibold">© Kateřina Hladíková 2025</div>
        </footer>
    );
}
