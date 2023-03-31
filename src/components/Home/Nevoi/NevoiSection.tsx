import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import imagineFemei from "../../../../public/imagini/femei.png";

const NevoiSection = () => {
  return (
    <section className="container relative flex w-full items-start justify-start bg-[#506673] pt-16   ">
      <div className="flex w-full flex-col-reverse  md:flex-row ">
        <div
          className="flex h-2/3 max-w-[606px]  flex-col gap-12  px-4 md:w-full md:pr-8 "
          id="text"
        >
          <Typography
            variant="h3"
            className="text-start font-bold text-alb-site  "
          >
            In ce situatii ai nevoie de noi?
          </Typography>

          <Typography
            variant="h5"
            className="text-start font-medium  text-alb-site "
          >
            &#x2713; &nbsp; Am o companie intr-o alta tara si am nevoie de
            specialisti romani, insa nu doresc sa imi deschid o filiala in
            romania
          </Typography>

          <Typography
            variant="h5"
            className="text-start  font-medium text-alb-site "
          >
            &#x2713; &nbsp; Una dintre angajatele tale de baza intra in curand
            in concediu de maternitate. Cine ii va face treaba la fel de bine ?
          </Typography>

          <Typography
            variant="h5"
            className="text-start font-medium text-alb-site "
          >
            &#x2713; &nbsp; Cum pot angaja un numar mare de oameni, in perioada
            aceasta foarte aglomerata, daca nu am departament de HR?
          </Typography>
        </div>

        <div className="relative right-0 top-0 mx-2 -translate-y-24 transform p-2  md:w-2/3 md:-translate-y-44 ">
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
