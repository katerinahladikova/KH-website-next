import Hero from "../components/Hero";

export default async function Home({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
    const { locale } = await params;
    return (
        <>
            <Hero locale={locale} />
        </>
    );
}
