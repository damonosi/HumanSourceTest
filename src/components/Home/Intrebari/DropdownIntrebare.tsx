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
    setShowRaspuns(!showRaspuns);
  };
  return (
    <div className="flex flex-col">
      <button onClick={handleClick} className="z-20 ">
        <div
          className="flex items-center justify-between text-start"
          id="intrebare-sageaata"
        >
          <h2 className="text-[16px] leading-[20px] text-white lg:text-[24px] lg:font-[500] lg:leading-[36px] ">
            {intrebare}
          </h2>

          <div
            className={`flex h-6 w-6 items-center justify-center ${
              showRaspuns && "rotate-180"
            } `}
            id="sageata-container"
          >
            <SageataIntrebari
              fill="#ffff"
              className="text-white"
              alt="sageata-intrebari"
            />
          </div>
        </div>
      </button>
      <p
        className={`block px-1 pb-4 pt-10 text-start text-[16px] font-[350] leading-[24px] text-white opacity-60  lg:text-[18px] lg:leading-[26px] lg:opacity-80 ${
          !showRaspuns && "hidden"
        } `}
      >
        {raspuns}
      </p>
    </div>
  );
};

export default DropdownIntrebare;
