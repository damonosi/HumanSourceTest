import Image from "next/image";
import imagineFemei from "../../../../public/imagini/femei.png";
const NevoiSection = () => {
  return (
    <section className="container relative flex w-full items-start justify-start bg-[#506673] pt-16 lg:pt-0  ">
      <div className="flex w-full flex-col-reverse pt-16 lg:flex-row lg:gap-[134px]">
        <div
          className="flex max-w-[606px] flex-col  gap-[60px] px-4 lg:w-full lg:pr-8"
          id="text"
        >
          <h2 className="text-[20px] leading-[30px] text-white lg:text-[28px]  lg:font-[700] lg:leading-[42px]">
            In ce situatii ai nevoie de noi?
          </h2>

          <span className="text-[16px] font-[500] leading-[30.24px] text-white  lg:text-[20px] ">
            &#x2713; &nbsp;&nbsp;&nbsp; Am o companie intr-o alta tara si am
            nevoie de specialisti romani, insa nu doresc sa imi deschid o
            filiala in romania
          </span>

          <span className=" text-[16px] font-[500]  leading-[30.24px] text-white lg:text-[20px]">
            &#x2713; &nbsp;&nbsp;&nbsp; Una dintre angajatele tale de baza intra
            in curand in concediu de maternitate. Cine ii va face treaba la fel
            de bine ?
          </span>

          <span className="text-[16px] font-[500] leading-[30.24px] text-white lg:text-[20px]">
            &#x2713; &nbsp;&nbsp;&nbsp; Cum pot angaja un numar mare de oameni,
            in perioada aceasta foarte aglomerata, daca nu am departament de HR?
          </span>
        </div>

        <div className="relative right-0 top-0 mx-2 -translate-y-32   lg:w-2/3 lg:-translate-y-32 ">
          <Image
            className="w-full rounded-xl"
            alt="imagine-femei"
            src={imagineFemei}
          />
        </div>
      </div>
    </section>
  );
};

export default NevoiSection;
