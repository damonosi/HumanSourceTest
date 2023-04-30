"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from 'next/link';



interface ICardJob {
    data: string;
    titlu: string;
    descriere: string;
    src: StaticImageData;

    salariu?: number;
    id: number;
}

const CardJob = ({ data, titlu, descriere, id, src }: ICardJob) => {



    return (
        <div
            key={id}
            className="relative   flex h-[350px]  w-full flex-col justify-end overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
        >
            <div
                        id="img-container"
                        className=" relative z-40 flex items-center w-full justify-center  "
                    >
                        <Image
                            alt="background"
                            className="w-full  object-cover"
                            src={src}
                />
                </div>
                <div
                    key="container-text"
                    className="z-20 flex  flex-col justify-end gap-2 py-2 px-4 text-start md:justify-between "
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


                        >
                            <span>Afla mai multe</span>
                            <ArrowForwardIcon className='hidden hover:flex' />
                        </Button></Link>
                </div>

       
        </div>
    );
};

export default CardJob;
