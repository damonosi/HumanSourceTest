import { Typography } from "@material-tailwind/react";
import CasetaServicii from "./CasetaServicii";
import dateServicii from "./dateServicii";

const ServiciiSection = () => {
  return (
    <section className="container flex w-full flex-col items-center text-center md:gap-8  md:pb-32">
      <Typography
        variant="h5"
        className="p-16 font-bold text-gri-brand md:text-3xl "
      >
        Serviciile Human Source
      </Typography>
      <div className="flex w-full flex-col justify-between md:flex-row md:gap-5">
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
