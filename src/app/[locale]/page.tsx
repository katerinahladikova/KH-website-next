import Hero from "../components/Hero";
import Ref from "../components/Ref";
import { getTranslations } from "next-intl/server";

export default async function Home({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
    const { locale } = await params;
    const t = await getTranslations("refs");

    return (
        <>
            <Hero locale={locale} />
            <h2 dangerouslySetInnerHTML={{ __html: t("header") }} className="h2 container"></h2>
            <div className="container mb-14 grid lg:grid-cols-3 md:grid-cols-2 gap-5 gap-y-10">
                <Ref tooltip={t("tooltip")} alt="pragostoma" image="/pragostoma.jpg" title={t("t1")} subtitle={t("st1")} badges={["Next.js", "Tailwind", "TypeScript"]} />
                <Ref tooltip={t("tooltip")} url="https://it-centrum.cz/" alt="it centrum" image="/it-centrum.png" title={t("t2")} subtitle={t("st2")} badges={["Next.js", "Tailwind", "TypeScript"]} />
                <Ref tooltip={t("tooltip")} alt="sanstarling" image="/sanstarling.jpg" title={t("t3")} subtitle={t("st3")} badges={["Next.js", "Tailwind", "TypeScript", "Strapi"]} />
                <Ref
                    tooltip={t("tooltip")}
                    url="https://modulypart66.com/"
                    alt="moduly part 66"
                    image="/moduly.jpg"
                    title={t("t4")}
                    subtitle={t("st4")}
                    badges={["Next.js", "Tailwind", "TypeScript"]}
                />
            </div>
        </>
    );
}
