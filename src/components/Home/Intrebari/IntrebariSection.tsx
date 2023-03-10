import Image from "next/image";
import ImgIntrebari from "../../../../public/imagini/ImgIntrebari.png";
import dateIntrebari from "./dateIntrebari";
import DropdownIntrebare from "./DropdownIntrebare";

const IntrebariSection = () => {
  return (
    <section className="container relative flex w-full  px-2 py-8 text-start lg:text-center">
      <div
        className="flex  items-center justify-center  lg:w-1/2"
        id="container-imagine-intrebari"
      >
        <Image
          className="hidden lg:absolute lg:top-0 lg:block lg:translate-y-[-10%]"
          alt="imagine-intrebari"
          src={ImgIntrebari}
        />
      </div>
      <div className="relative flex flex-col gap-8 sm:w-full lg:w-1/2  ">
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
