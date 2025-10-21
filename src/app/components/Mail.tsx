"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

type MailProps = {
    mail: string;
};

export default function Mail({ mail }: MailProps) {
    const [icon, setIcon] = useState("material-symbols:content-copy-outline-rounded");
    const handleClick = () => {
        navigator.clipboard.writeText(mail).then(function () {
            setIcon("material-symbols:check-rounded");
            setTimeout(function () {
                setIcon("material-symbols:content-copy-outline-rounded");
            }, 1000);
        });
    };

    return (
        <button onClick={handleClick} className="bg-white rounded-3xl h-8.5 flex items-center gap-1 px-3 text-xs font-semibold cursor-pointer">
            {mail}
            <Icon icon={icon} className="text-base opacity-50" />
        </button>
    );
}
