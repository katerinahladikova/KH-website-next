import { useTranslations } from "next-intl";

type HeroProps = {
    locale: string;
};

export default function Hero({ locale }: HeroProps) {
    const t = useTranslations("hero");
    return (
        <div className="container flex flex-col h-screen items-center justify-center uppercase font-bold">
            <h1 className="text-9xl tracking-[-5px] leading-[0.834] text-center w-max max-w-4xl">{t("header")}</h1>
            <div className={`justify-between w-full px-20 flex text-sm ${locale === "cs" ? "max-w-4xl" : "max-w-3xl"}`}>
                <p dangerouslySetInnerHTML={{ __html: t("subtitle") }}></p>
                <p>({t("year")})</p>
            </div>
        </div>
    );
}
