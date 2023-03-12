import CardAvantaje from "./CardAvantaje";
import dateAvantaje from "./dateAvantaje";
const AvantajeSection = () => {
  return (
    <section className="container flex flex-col items-center pb-24 text-center">
      <h1 className="mb-24 px-2 ">
        <span className="hidden md:block">
          {" "}
          Firma de recrutare strainatate -
        </span>{" "}
        Avantajele serviciilor Human Source
      </h1>

      <div className="mb-20 grid  w-full grid-cols-2 place-items-center gap-x-5 gap-y-10 2xl:grid-cols-4    ">
        {dateAvantaje.map(({ titlu, descriere, icon, id }) => (
          <CardAvantaje
            key={id}
            titlu={titlu}
            descriere={descriere}
            icon={icon}
          />
        ))}
      </div>

      <button className="mx-4  flex items-center justify-center rounded-[8px] bg-[#B21E23]  py-4 px-4 text-[14px] font-[700] leading-[20px]  text-white lg:px-9 lg:text-[16px]  ">
        Solicita serviciile HR Human Source
      </button>
    </section>
  );
};

export default AvantajeSection;
