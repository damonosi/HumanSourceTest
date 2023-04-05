import { Button, Typography } from "@material-tailwind/react";
import PayrollImg from "../../../../public/imagini/MuncitorIcon.svg";
import LeasingImg from "../../../../public/imagini/leasing.svg";
import RecrutareImg from "../../../../public/imagini/recrutare.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <AnimatePresence>
      <motion.div
        key="shadow"
        layout
        transition={{
          layout: {
            type: "spring",
            stiffness: 20,
            duration: 1,
          },
        }}
        className={`container  ${
          hovered && "shadow-xl"
        } flex h-[325px] w-full flex-col items-center justify-between  gap-4 rounded-[10px] bg-alb-site px-4 pb-8 text-center `}
        id="caseta-servicii"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onTouchStart={() => {
          setHovered(!hovered);
        }}
      >
        {" "}
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
        <motion.div layout>
          <Button
            className={`rounded-[8px] border border-alb-site  bg-transparent px-6 py-4 text-[#B21E23]  shadow-none hover:shadow-none ${
              hovered && "  border-rosu-brand"
            }`}
          >
            <Typography variant="paragraph" className="font-bold normal-case ">
              {textButon}
            </Typography>
          </Button>
        </motion.div>
      </motion.div>{" "}
    </AnimatePresence>
  );
};

export default CasetaServicii;
