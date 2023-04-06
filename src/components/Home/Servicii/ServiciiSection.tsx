import { Typography } from "@material-tailwind/react";
import CasetaServicii from "./CasetaServicii";
import dateServicii from "./dateServicii";

const ServiciiSection = () => {
  return (
    <section className="container flex w-full flex-col items-center  px-6 text-center md:mx-0 md:gap-8  ">
      <Typography
        variant="h5"
        className="pb-[60px] font-bold text-gri-brand md:text-3xl "
      >
        Serviciile Human Source
      </Typography>
      <div className="flex w-full flex-col justify-between gap-y-16 gap-x-5 md:flex-row">
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
    </section>
  );
};

export default ServiciiSection;
