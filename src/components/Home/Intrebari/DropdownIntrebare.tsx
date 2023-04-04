import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
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
    const ref = useOnclickOutside(() => {
    setShowRaspuns(false);
  });
  const handleClick = () => {
    setShowRaspuns(!showRaspuns);
  };
  return (
    <div ref={ref} className="flex flex-col" id="container-dd">
      <button
        onClick={handleClick}
        className="flex items-center justify-between text-start"
      >
        <Typography
          variant="h5"
          className=" text-start font-medium text-alb-site md:text-2xl "
        >
          {intrebare}
        </Typography>

        <div
          className="flex h-6 w-6 items-center justify-center "
          id="sageata-container"
        >
          <span className="text-alb-site opacity-50">
            {showRaspuns ? "-" : "+"}
          </span>
        </div>
      </button>
      <Typography
        variant="paragraph"
        className={` px-1 pb-4 pt-10 text-start  text-alb-site opacity-60   lg:opacity-80 ${
          !showRaspuns ? "hidden" : "block"
        } `}
      >
        {raspuns}
      </Typography>
    </div>
  );
};

export default DropdownIntrebare;
