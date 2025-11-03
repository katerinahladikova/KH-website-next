import { Link } from "@/i18n/navigation";
import Image from "next/image";

type RefProps = {
    url: string;
    alt: string;
    image: string;
    title: string;
    subtitle: string;
    badges?: string[];
};

export default function Ref({ url, alt, image, title, subtitle, badges }: RefProps) {
    return (
        <div>
            <Link target="_blank" href={url} className="block group rounded-3xl outline-4 outline-offset-4 outline-transparent hover:outline-[#a5a5a58f] transition-colors hover:animate-boom relative">
                <div className="absolute top-1/2 left-1/2 -translate-1/2 h-full aspect-square rounded-full bg-[#757575] group-hover:animate-blur blur-[20px] opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Image src={image} alt={alt} width={1750} height={1200} className="rounded-3xl relative z-10" />
                <div className="z-20 absolute bottom-4 right-4 left-4 flex flex-wrap gap-2 justify-end">
                    {badges?.map((badge, index) => {
                        return (
                            <div key={index} className="shadow-md inline-block bg-surface py-1 px-2 rounded-2xl text-inky text-sm font-medium">
                                {badge}
                            </div>
                        );
                    })}
                </div>
            </Link>
            <h3 className="text-inky text-xl font-semibold pl-2.5 mt-3 mb-1">{title}</h3>
            <p className="text-darkgray text-xs pl-2.5 font-bold">{subtitle}</p>
        </div>
    );
}
