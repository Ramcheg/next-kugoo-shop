"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

import gallary1 from "@/public/ServicePage/ServiceGallary/gallary1.png";
import gallarybig from "@/public/ServicePage/ServiceGallary/gallaryBig.jpg";
import Image, { StaticImageData } from "next/image";
const frr: { name: StaticImageData; id: string }[] = [
    { name: gallary1, id: "efirtfwf" },
    { name: gallary1, id: "efirt4fwf" },
    { name: gallary1, id: "efir6tfwf" },
    { name: gallary1, id: "efir7tfwf" },
];

export const Gallery: FC = () => {
    const [selectedId, setSelectedId] = useState("");

    return (
        <>
            {frr.map((item) => (
                <motion.div
                    key={item.id}
                    layoutId={item.id}
                    onClick={() => setSelectedId(item.id)}
                >
                    <Image src={item.name} alt="wrerer" />
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="fixed top-0 left-0 bg-white/25 w-full h-screen z-50"
                    >
                        <div className="relative flex justify-center items-center  w-full h-full">
                            <Image
                                src={gallarybig}
                                alt="554"
                                className="w-[44rem] h-[44rem]"
                            />
                            <motion.button onClick={() => setSelectedId("")}>
                                Click me
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
