"use client";
import { useState } from "react";

import { Button, Typography } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import  Link  from 'next/link';



interface ICardJob {
    data: string;
    titlu: string;
    descriere: string;
    src: StaticImageData;

    salariu: number;
    id: number;
}

const CardJob = ({ data, titlu, descriere, id, src, salariu }: ICardJob) => {

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            key={id}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchEnd={() => {
                setHovered(!hovered);
            }}
            className="relative   flex h-[350px]  w-full flex-col justify-end overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
        >
            <AnimatePresence>
                {!hovered ? (
                    <motion.div
                        key="imagine"
                        layout
                        transition={{
                            layout: {
                                type: "spring",
                                stiffness: 30,
                                duration: 1,
                            },
                        }}
                        id="img-container"
                        className=" relative z-40 flex items-center w-full justify-center  "
                    >
                        <Image
                            alt="background"
                            className="w-full  object-cover"
                            src={src}
                        />
                        <motion.div
                            key="mask"
                            transition={{
                                type: "spring",
                                stiffness: 40,
                                duration: 1,
                                delay: 500,
                            }}
                            className="hidden"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="imagine"
                        layout
                        transition={{
                            layout: { type: "spring", stiffness: 30, duration: 1 },
                        }}
                        id="img-container"
                        className="absolute top-0 bottom-0 left-0 right-0 object-fill"
                    >
                        <Image
                            alt="background"
                            className="relative h-full w-full  transform object-fill"
                            src={src}
                        />{" "}
                        <motion.div
                            key="mask"
                            transition={{
                                type: "spring",
                                stiffness: 40,
                                duration: 1,
                                delay: 500,
                            }}
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-2xl bg-black bg-fixed opacity-20"
                        />
                    </motion.div>
                )}

                <motion.div
                    key="container-text"
                    style={{
                        height: hovered ? "40vh" : "100vh",
                    }}
                    layout
                    transition={{
                        layout: { type: "spring", stiffness: 40 },
                    }}
                    className={`z-20 flex  flex-col justify-end gap-2 py-2 px-4 text-start md:justify-between ${hovered ? "text-alb-site " : "text-gri-brand"
                        } `}
                    id="container-text-bloguri"
                >
                    <Typography
                        variant="paragraph"
                        className="z-20 text-[18px] font-[350]  opacity-50 "
                    >
                        {data}
                    </Typography>
                    <Typography variant="h4" className="font-medium ">
                        {titlu}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className=" text-[18px] font-[400] leading-[22px]"
                    >
                        {descriere}
                    </Typography>
                    <Link href={`/locuri-de-munca/${id.toString()}`}>
                        <Button
                            className={`mt-4 bg-transparent text-start text-gri-deschis-bg shadow-none hover:scale-105 hover:shadow-none ${hovered && "text-alb-site"
                                }`}

                        >
                            <span>Afla mai multe</span>
                            {hovered && <ArrowForwardIcon />}
                        </Button></Link>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default CardJob;
