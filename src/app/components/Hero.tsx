import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");
    return (
        <div>
            <h1>{t("header")}</h1>
        </div>
    );
}
