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
                <Ref
                    url="https://it-centrum.cz/"
                    alt="it centrum"
                    image="/it-centrum.png"
                    title="Obchodní centrum Vrchlabí"
                    subtitle="Web pro obchodní centrum Vrchlabí. Web byl realizován ve spolupráci s Effectivelab."
                    badges={["Next.js", "Tailwind", "TypeScript"]}
                />
            </div>
        </>
    );
}
