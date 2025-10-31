import Hero from "../components/Hero";
import Refs from "../components/Refs";
import { getTranslations } from "next-intl/server";

export default async function Home({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
    const { locale } = await params;
    const t = await getTranslations("refs");

    return (
        <>
            <Hero locale={locale} />
            <h2 dangerouslySetInnerHTML={{ __html: t("header") }} className="h2 container"></h2>
            <Refs />
        </>
    );
}
