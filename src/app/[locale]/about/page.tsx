import Quote from "@/app/components/Quote";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    const t = useTranslations("about");
    return (
        <div className="container pt-40">
            <h2 className="h2 text-center">{t("header")}</h2>
            <Image src="/computer.jpg" alt="" width={1248} height={420} className="w-full object-cover object-[position:bottom_-35px_left_0] rounded-4xl block m-auto my-13 h-105" />
            <Quote text={t("quote")} />
        </div>
    );
}
