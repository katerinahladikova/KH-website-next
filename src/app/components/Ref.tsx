"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";

type RefProps = {
    url?: string;
    alt: string;
    image: string;
    title: string;
    subtitle: string;
    badges?: string[];
    tooltip: string;
};

export default function Ref({ url, alt, image, title, subtitle, badges, tooltip }: RefProps) {
    const Component = url ? Link : "div";
    const params = url ? { href: url, target: "_blank" } : {};
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (ref.current) {
                ref.current.style.transform = `translateX(${e.clientX + 30}px) translateY(${e.clientY - 10}px)`;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [ref]);

    return (
        <div data-test="ref-card">
            <div className="group" data-test="ref-media-wrapper">
                <Component
                    {...(params as any)}
                    className="block group rounded-3xl outline-4 outline-offset-4 outline-transparent hover:outline-[#a5a5a58f] transition-colors hover:animate-boom relative"
                    data-test={url ? "ref-link" : "ref-static"}
                >
                    <div
                        className="absolute top-1/2 left-1/2 -translate-1/2 h-full aspect-square rounded-full bg-[#757575] group-hover:animate-blur blur-[20px] opacity-0 transition-opacity group-hover:opacity-100"
                        data-test="ref-glow"
                    ></div>
                    <Image src={image} alt={alt} width={1750} height={1200} className="rounded-3xl relative z-10" data-test="ref-image" />
                    <div className="z-20 absolute bottom-4 right-4 left-4 flex flex-wrap gap-2 justify-end" data-test="ref-badges">
                        {badges?.map((badge, index) => {
                            return (
                                <div
                                    key={index}
                                    className="shadow-md inline-block bg-surface py-1 px-2 rounded-2xl text-inky text-sm font-medium"
                                    data-test="ref-badge"
                                >
                                    {badge}
                                </div>
                            );
                        })}
                    </div>
                </Component>
                {!url && (
                    <div
                        ref={ref}
                        className="fixed top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none shadow-md inline-block bg-[#80091B] py-1 px-2 rounded-2xl text-white text-sm font-light"
                        data-test="ref-tooltip"
                    >
                        {tooltip}
                    </div>
                )}
            </div>
            <h3 className="text-inky text-xl font-semibold pl-2.5 mt-3 mb-1" data-test="ref-title">
                {title}
            </h3>
            <p className="text-darkgray text-xs pl-2.5 font-bold" data-test="ref-subtitle">
                {subtitle}
            </p>
        </div>
    );
}
