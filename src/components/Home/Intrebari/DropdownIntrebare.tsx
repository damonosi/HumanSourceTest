import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import SageataIntrebari from "../../../../public/imagini/SageataIntrebari.svg";
interface IDropdownInfo {
  intrebare: string;
  raspuns: string;
  ultimaIntrebare?: boolean;
}

const DropdownIntrebare = ({
  intrebare,
  raspuns,
  ultimaIntrebare,
}: IDropdownInfo) => {
  const [showRaspuns, setShowRaspuns] = useState(false);
  const handleClick = () => {
    console.log("ckicked");
    setShowRaspuns(!showRaspuns);
  };
  return (
    <div className="flex flex-col" id="container-dd">
      <button
        onClick={handleClick}
        className="flex items-center justify-between text-start"
      >
        <Typography variant="h4" className=" text-start text-white ">
          {intrebare}
        </Typography>

        <div
          className={`flex h-6 w-6 items-center justify-center ${
            showRaspuns ? "rotate-180" : ""
          } `}
          id="sageata-container"
        >
          <SageataIntrebari
            fill="#ffff"
            className="text-white"
            alt="sageata-intrebari"
          />
        </div>
      </button>
      <Typography
        variant="paragraph"
        className={` px-1 pb-4 pt-10 text-start  text-white opacity-60   lg:opacity-80 ${
          !showRaspuns ? "hidden" : "block"
        } `}
      >
        {raspuns}
      </Typography>
    </div>
  );
};

export default DropdownIntrebare;
