import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import ImgIntrebari from "../../../../public/imagini/intrebari/imgIntrebari.png";
import dateIntrebari from "./dateIntrebari";
import DropdownIntrebare from "./DropdownIntrebare";

const IntrebariSection = () => {
  return (
    <section className="container relative flex w-full flex-col gap-10  px-2 text-start  md:flex-row  md:px-0 md:text-center">
      <div
        className="flex  items-center justify-center  md:w-1/2"
        id="container-imagine-intrebari"
      >
        <Image
          className="h-[85%] w-full translate-y-[-15%]"
          alt="imagine-intrebari"
          src={ImgIntrebari}
        />
      </div>
      <div className="relative flex flex-col  gap-8 sm:w-full md:w-1/2  ">
        <Typography
          variant="h5"
          className=" text-start font-bold text-alb-site md:pt-[60px] md:text-2xl"
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
