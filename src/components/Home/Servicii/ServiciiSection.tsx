import { Button, Typography } from "@material-tailwind/react";
import CasetaServicii from "./CasetaServicii";
import dateServicii from "./dateServicii";

const ServiciiSection = () => {
  return (
    <section className="container flex w-full flex-col items-center text-center lg:gap-8 lg:pt-24">
      <Typography
        variant="h5"
        className="p-16 font-bold text-gri-brand md:text-3xl "
      >
        Serviciile Human Source
      </Typography>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-24">
        {dateServicii.map(({ titlu, descriere, textButon, icon, id }) => (
          <CasetaServicii
            key={id}
            icon={icon}
            titlu={titlu}
            descriere={descriere}
            textButon={textButon}
          />
        ))}
      </div>

      <Button className="  my-16 flex w-2/3 items-center justify-center rounded-[8px] bg-rosu-butoane  px-4  py-4 lg:m-24 lg:w-full lg:max-w-[215px]  lg:py-4 lg:px-4">
        <Typography
          variant="paragraph"
          className=" font-bold capitalize  text-alb-site "
        >
          Solicita o oferta
        </Typography>
      </Button>
    </section>
  );
};

export default ServiciiSection;
