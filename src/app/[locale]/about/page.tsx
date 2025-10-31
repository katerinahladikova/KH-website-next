import Quote from "@/app/components/Quote";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    const t = useTranslations("about");
    return (
        <div className="container pt-40">
            <h2 className="h2 text-center">{t("header")}</h2>
            <Image
                src="/computer.jpg"
                alt=""
                width={1248}
                height={500}
                className="shadow-2xl w-full object-cover md:object-[position:bottom_-35px_left_0] h-64 rounded-4xl block m-auto my-13 md:h-130"
            />
            <Quote text={t("quote")} />
            <div className="grid md:grid-cols-2 mt-20 mb-8 gap-4 md:gap-24">
                <div className="max-md:order-2 max-md:text-center">
                    <p className="mb-6 font-semibold text-inky leading-tight">{t("p1")}</p>
                    <p className="mb-6 font-semibold text-inky leading-tight">{t("p2")}</p>
                    <p className="mb-6 font-semibold text-inky leading-tight">{t("p3")}</p>
                </div>
                <div className="flex flex-col-reverse md:flex-col max-md:gap-8 max-md:items-center">
                    <h3 className="text-inky uppercase text-sm font-semibold mb-5">{t("title")}</h3>
                    <Image src="/memoji-comp.png" alt="" width={235} height={200} className="block h-50 max-w-150 border-b border-gray" />
                </div>
            </div>
        </div>
    );
}
