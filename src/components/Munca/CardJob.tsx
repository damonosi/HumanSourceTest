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
            className="relative   flex h-[350px]  w-full flex-col justify-end overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] hover:cursor-pointer shadow hover:shadow-xl    md:h-[500px]  "
        >
            <div
                        id="img-container"
                className=" relative z-40 h-2/5 flex  w-full "
                    >
                        <Image
                            alt="background"
                    className="object-fill w-full "
                    placeholder="blur"
                            src={src}
                />
                </div>
                <div
                    key="container-text"
                className="z-20 flex  h-3/5 flex-col justify-center gap-5 py-2 px-4 text-start  "
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
