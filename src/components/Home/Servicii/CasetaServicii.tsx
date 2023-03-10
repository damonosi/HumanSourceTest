import LeasingImg from "../../../../public/imagini/leasing.svg";
import PayrollImg from "../../../../public/imagini/MuncitorIcon.svg";
import RecrutareImg from "../../../../public/imagini/recrutare.svg";

interface ICasetaServicii {
  titlu: string;
  descriere: string;
  textButon: string;
  icon: string;
}

const CasetaServicii = ({
  titlu,
  descriere,
  textButon,
  icon,
}: ICasetaServicii) => {
  return (
    <div className="container flex max-h-[508px] max-w-[306px] flex-col items-center justify-between gap-4 rounded-[10px] pt-12 pb-8 text-center hover:shadow-xl lg:px-4 ">
      {icon === "leasing" && (
        <LeasingImg width={34} height={34} alt="img-leasing" />
      )}
      {icon === "payroll" && (
        <PayrollImg width={34} height={34} alt="img-payroll" />
      )}
      {icon === "recrutare" && (
        <RecrutareImg width={34} height={34} alt="img-recrutare" />
      )}

      <h1 className="text-[20px] font-[500]  leading-[30px] text-[#383A3C]">
        {titlu}
      </h1>
      <p className="text-[16px] font-[350] leading-[24px] text-[#383A3C] opacity-60">
        {descriere}
      </p>
      <button className="rounded-[8px] border border-red-600 px-[18px] py-4 text-[#B21E23]  hover:bg-slate-50 ">
        <span className="text-[14px] font-[700] leading-[16.8px]">
          {textButon}
        </span>
      </button>
    </div>
  );
};

export default CasetaServicii;
