"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

import Image from "next/image";
import { IGallaryData } from "./GallaryData";
import CloseIcon from "@mui/icons-material/Close";
interface IGallaryProps {
    imgData: IGallaryData[];
    imgBigData: IGallaryData[];
}

export const Gallery: FC<IGallaryProps> = ({ imgBigData, imgData }) => {
    const [selectedId, setSelectedId] = useState("");
    const [countBigImg, setCountBigImg] = useState(0);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center gap-3 flex-wrap">
                    {imgData.map((item, i) => (
                        <motion.div key={item.id} layoutId={item.id}>
                            <div className="relative mx-auto sm:w-full w-[70%] sm:h-full h-[70%] group">
                                <Image
                                    className=" rounded-lg relative z-10"
                                    src={item.name}
                                    alt="wrerer"
                                />
                                <div
                                    className="transition-all delay-100 rounded-full opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 py-12 px-6 cursor-pointer"
                                    onClick={() => {
                                        setSelectedId(item.id),
                                            setCountBigImg(i);
                                    }}
                                >
                                    <div className="font-medium text-white ">
                                        Смотреть
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="fixed top-0 left-0 bg-white/25 w-full h-screen z-50"
                    >
                        <motion.div className="relative flex justify-center items-center  w-full h-full">
                            <motion.div className="relative">
                                <Image
                                    loading="lazy"
                                    src={imgBigData[countBigImg].name}
                                    alt={imgBigData[countBigImg].id}
                                    className="mx-auto w-[90%] sm:w-[35rem] md:w-[44rem] h-[90%] sm:h-[35rem] md:h-[44rem] rounded-lg"
                                />
                                <motion.button
                                    className="absolute top-4 right-8 sm:right-4"
                                    onClick={() => {
                                        setSelectedId(""), setCountBigImg(0);
                                    }}
                                >
                                    <CloseIcon
                                        fontSize="medium"
                                        sx={{
                                            fill: "#fff",
                                            "&:hover": {
                                                fill: "CornflowerBlue",
                                            },
                                        }}
                                    />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
