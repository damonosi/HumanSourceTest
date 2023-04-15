import { Card, CardBody, Typography } from "@material-tailwind/react";
import { GiPiggyBank, GiEarthAmerica } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import ContactsIcon from "@mui/icons-material/Contacts";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
interface ICardAvantaje {
  titlu: string;
  descriere: string;
  icon: string;
}
const CardAvantaje = ({ titlu, descriere, icon }: ICardAvantaje) => {
  return (
    <Card className="w-full  max-w-[300px] border-0 border-l-0 bg-alb-site shadow-none md:px-2   ">
      <CardBody className="flex h-fit flex-col items-center gap-2 px-0  ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center text-[#BF4546]">
            {icon === "bank" && <GiPiggyBank className="h-8 w-8" />}
            {icon === "ue" && <GiEarthAmerica className="h-8 w-8" />}
            {icon === "manageri" && <FaUserTie className="h-8 w-8" />}
            {icon === "suport" && <VscLaw className="h-8 w-8" />}
          </div>
          <div className="flex flex-col gap-2 text-gri-brand">
            <Typography variant="h6" className="font-medium  md:px-14 ">
              {titlu}
            </Typography>
            <Typography variant="paragraph" className=" opacity-50 md:px-4">
              {descriere}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardAvantaje;
