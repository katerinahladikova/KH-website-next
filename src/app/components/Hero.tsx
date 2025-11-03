import { useTranslations } from "next-intl";

type HeroProps = {
    locale: string;
};

export default function Hero({ locale }: HeroProps) {
    const t = useTranslations("hero");
    return (
        <div className="container flex flex-col h-screen items-center justify-center uppercase font-bold">
            <h1
                dangerouslySetInnerHTML={{ __html: t("header") }}
                className="text-9xl max-lg:text-8xl max-md:text-6xl max-sm:text-5xl md:tracking-[-5px] tracking-[-2px] leading-[0.834] text-center w-max max-w-4xl"
            ></h1>
            <div className={`justify-between w-full md:px-20 px-6 flex md:text-sm text-[10px] ${locale === "cs" ? "max-w-4xl max-md:max-w-96" : "max-w-3xl max-md:max-w-90"}`}>
                <p dangerouslySetInnerHTML={{ __html: t("subtitle") }}></p>
                <p>({t("year")})</p>
            </div>
        </div>
    );
}
