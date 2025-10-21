import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");
    return (
        <div className="container flex flex-col h-screen items-center justify-center uppercase font-bold w-min">
            <h1 className="text-9xl tracking-[-5px] leading-[0.834] text-center">{t("header")}</h1>
            <div className="justify-between w-full px-20 flex text-sm">
                <p dangerouslySetInnerHTML={{ __html: t("subtitle") }}></p>
                <p>({t("year")})</p>
            </div>
        </div>
    );
}
