import Certificates from "@/app/components/Certificates";
import Experience from "@/app/components/Experience";
import Project from "@/app/components/Project";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Portfolio() {
    const t = useTranslations("portfolio");

    return (
        <div className="container">
            <div className="pt-40 mb-20">
                <h2 dangerouslySetInnerHTML={{ __html: t("experience") }} className="h2"></h2>
                <div className="ml-[40%]">
                    <Experience title="HTML" subtitle={t("e3")} />
                    <Experience title="CSS" subtitle={t("e3")} />
                    <Experience title="Tailwind CSS" subtitle={t("e3")} />
                    <Experience title="JavaScript" subtitle={t("e2")} />
                    <Experience title="TypeScript" subtitle={t("e1")} />
                    <Experience title="React" subtitle={t("e2")} />
                    <Experience title="Next.js" subtitle={t("e1")} />
                    <Link
                        download
                        href="/CV_Hladikova.pdf"
                        className="shadow-md mt-8 w-max  text-inky rounded-3xl h-9 flex items-center px-3 text-xs font-semibold cursor-pointer relative before:absolute before:top-0
                before:-right-5 before:bottom-0 before:-left-5 before:-skew-x-22 overflow-hidden before:transition-transform before:origin-right
                before:duration-700 hover:text-white transition-colors duration-700 before:scale-x-215 before:bg-gradient-to-r before:from-inky before:from-50% before:to-50% before:to-white hover:before:translate-x-full"
                    >
                        <span className="z-10 relative">{t("button")}</span>
                    </Link>
                </div>
            </div>
            <div>
                <h2 dangerouslySetInnerHTML={{ __html: t("certs") }} className="h2"></h2>
                <Certificates />
            </div>
            <div>
                <h2 dangerouslySetInnerHTML={{ __html: t("projects") }} className="h2"></h2>
                <div className="grid grid-cols-3 mb-14 gap-6">
                    <Project title={t("p1")} link="https://pizza.katerinahladikova.cz/" badges={["HTML", "CSS", "JavaScript"]} />
                </div>
            </div>
        </div>
    );
}
