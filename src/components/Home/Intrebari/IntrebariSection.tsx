import Image from "next/image";
import ImgIntrebari from "../../../../public/imagini/intrebari/imgIntrebari.png";
import dateIntrebari from "./dateIntrebari";
import DropdownIntrebare from "./DropdownIntrebare";

const IntrebariSection = () => {
  return (
    <section className="container relative flex w-full flex-col gap-10  px-2 py-8 text-start  md:flex-row md:text-center">
      <div
        className="flex  items-center justify-center  md:w-1/2"
        id="container-imagine-intrebari"
      >
        <Image
          className=" lg:translate-y-[-10%]"
          alt="imagine-intrebari"
          src={ImgIntrebari}
        />
      </div>
      <div className="relative flex flex-col gap-8 sm:w-full lg:w-1/2  ">
        <h3 className=" text-start font-bold text-white">
          Intrebari frecvente adresate de clientii Human Source
        </h3>
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
