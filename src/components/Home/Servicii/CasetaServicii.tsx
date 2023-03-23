import { Button, Typography } from "@material-tailwind/react";
import PayrollImg from "../../../../public/imagini/MuncitorIcon.svg";
import LeasingImg from "../../../../public/imagini/leasing.svg";
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
    <div className="container flex max-h-[508px] max-w-[420px] flex-col items-center justify-between gap-4 rounded-[10px] bg-alb-site px-4 pt-12 pb-8 text-center hover:shadow-xl ">
      {icon === "leasing" && (
        <LeasingImg width={34} height={34} alt="img-leasing" />
      )}
      {icon === "payroll" && (
        <PayrollImg width={34} height={34} alt="img-payroll" />
      )}
      {icon === "recrutare" && (
        <RecrutareImg width={34} height={34} alt="img-recrutare" />
      )}

      <Typography variant="h5" className=" font-normal   text-gri-brand">
        {titlu}
      </Typography>
      <Typography
        variant="paragraph"
        className=" font-light text-gri-brand opacity-60"
      >
        {descriere}
      </Typography>
      <Button className="hover:bg-slate-50 rounded-[8px] border border-red-600 bg-transparent px-[18px] py-4  text-[#B21E23] ">
        <Typography variant="paragraph" className="font-bold  capitalize ">
          {textButon}
        </Typography>
      </Button>
    </div>
  );
};

export default CasetaServicii;
