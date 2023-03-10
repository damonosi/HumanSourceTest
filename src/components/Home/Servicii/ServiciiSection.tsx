import CasetaServicii from "./CasetaServicii";
import dateServicii from "./dateServicii";

const ServiciiSection = () => {
  return (
    <section className="container flex w-full flex-col items-center text-center lg:gap-8 lg:pt-24">
      <h1 className="p-16 text-[1.25rem]  font-[700] leading-[1.875rem] text-[#383A3C] lg:text-[1.75rem] lg:leading-[2.625rem]">
        Serviciile Human Source
      </h1>
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

      <button className="  my-16 flex w-2/3 items-center justify-center rounded-[8px] bg-[#B21E23]  px-4  py-4 lg:m-24 lg:w-full lg:max-w-[215px]  lg:py-4 lg:px-4">
        <span className="text-[16px] font-[700] lowercase leading-[20px] text-white ">
          Solicita o oferta
        </span>
      </button>
    </section>
  );
};

export default ServiciiSection;
