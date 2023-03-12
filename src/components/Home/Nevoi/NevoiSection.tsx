import Image from "next/image";
import imagineFemei from "../../../../public/imagini/femei.png";
const NevoiSection = () => {
  return (
    <section className="container relative flex w-full items-start justify-start bg-[#506673] py-16   ">
      <div className="flex w-full flex-col-reverse pt-16 lg:flex-row lg:gap-[134px]">
        <div
          className="flex max-w-[606px] flex-col  gap-[60px] px-4 lg:w-full lg:pr-8"
          id="text"
        >
          <h3 className="text-start font-bold text-white  ">
            In ce situatii ai nevoie de noi?
          </h3>

          <h5 className="text-start text-white   ">
            &#x2713; &nbsp; Am o companie intr-o alta tara si am nevoie de
            specialisti romani, insa nu doresc sa imi deschid o filiala in
            romania
          </h5>

          <h5 className="text-start  text-white ">
            &#x2713; &nbsp; Una dintre angajatele tale de baza intra in curand
            in concediu de maternitate. Cine ii va face treaba la fel de bine ?
          </h5>

          <h5 className="text-start text-white ">
            &#x2713; &nbsp; Cum pot angaja un numar mare de oameni, in perioada
            aceasta foarte aglomerata, daca nu am departament de HR?
          </h5>
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
