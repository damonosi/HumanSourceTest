import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import ImgIntrebari from "../../../../public/imagini/intrebari/imgIntrebari.png";
import dateIntrebari from "./dateIntrebari";
import DropdownIntrebare from "./DropdownIntrebare";

const IntrebariSection = () => {
  return (
    <section className="container relative flex w-full flex-col gap-10 px-6   text-start  md:text-center  lg:flex-row lg:px-0">
      <div
        className="flex  h-full items-center justify-center  lg:w-1/2"
        id="container-imagine-intrebari"
      >
        <Image
          className=" w-full translate-y-[-8%]"
          alt="imagine-intrebari"
          src={ImgIntrebari}
        />
      </div>
      <div className="relative flex flex-col gap-8 pb-6 pt-[60px] sm:w-full lg:w-1/2   ">
        <Typography
          variant="h5"
          className=" text-start font-bold text-alb-site  md:text-2xl"
        >
          Intrebari frecvente adresate de clientii <br /> Human Source
        </Typography>

        {dateIntrebari.map(({ intrebare, raspuns, id, ultima }) => (
          <DropdownIntrebare
            key={id}
            intrebare={intrebare}
            raspuns={raspuns}
            ultimaIntrebare={ultima}
          />
        ))}
      </div>
    </section>
  );
};

export default IntrebariSection;
