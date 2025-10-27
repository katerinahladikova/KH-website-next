import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type ProjectProps = {
    title: string;
    badges: string[];
    link: string;
};

export default function Project({ title, badges, link }: ProjectProps) {
    const t = useTranslations("portfolio");
    return (
        <div className="bg-linear-to-b from-[#bdbc9c]/80 to-transparent h-64 rounded-2xl text-center">
            <h3 className="text-3xl m-8 text-inky uppercase font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-2.5 justify-center max-w-md">
                {badges?.map((badge, index) => {
                    return (
                        <div key={index} className="shadow-md inline-block bg-white py-1 px-2 rounded-2xl text-inky text-sm font-medium">
                            {badge}
                        </div>
                    );
                })}
            </div>
            <Link
                href={link}
                target="_blank"
                className="shadow-md mx-auto mt-8 w-max  text-surface rounded-3xl h-9 flex items-center px-3 text-xs font-semibold cursor-pointer relative before:absolute before:top-0
                before:-right-5 before:bottom-0 before:-left-5 before:-skew-x-22 overflow-hidden before:transition-transform before:origin-right
                before:duration-700 hover:text-inky transition-colors duration-700 before:scale-x-215 before:bg-gradient-to-r before:from-white before:from-50% before:to-50% before:to-inky hover:before:translate-x-full"
            >
                <span className="relative z-10">{t("project-btn")}</span>
            </Link>
        </div>
    );
}
