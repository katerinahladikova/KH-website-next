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
        <div className="grid md:grid-cols-3 gap-5 mb-14">
            <Image src="/JSCert.png" alt="blb" width={402} height={284} onClick={() => open(0)} />
            <Image src="/ReactCert.png" alt="blb" width={402} height={284} onClick={() => open(1)} />
            <FsLightbox key={index} toggler={toggler} sources={["/JSCert.png", "/ReactCert.png"]} />
        </div>
    );
}
