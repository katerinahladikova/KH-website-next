"use client";

import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

export default function Certificates() {
    const [toggler, setToggler] = useState(false);
    const [index, setIndex] = useState(0);

    const open = (i: number) => {
        setIndex(i);
        setToggler(!toggler);
    };

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-14 place-items-center" data-test="certificates-grid">
            <Image
                src="/JSCert.png"
                alt="Javascript certificate"
                width={402}
                height={284}
                onClick={() => open(0)}
                data-test="certificate-js"
            />
            <Image
                src="/ReactCert.png"
                alt="React certificate"
                width={402}
                height={284}
                onClick={() => open(1)}
                data-test="certificate-react"
            />
            <Image
                src="/TailwindCert.png"
                alt="Tailwind certificate"
                width={402}
                height={284}
                onClick={() => open(2)}
                data-test="certificate-tailwind"
            />
            <FsLightbox
                key={index}
                toggler={toggler}
                sources={["/JSCert.png", "/ReactCert.png", "/TailwindCert.png"]}
                data-test="certificates-lightbox"
            />
        </div>
    );
}
