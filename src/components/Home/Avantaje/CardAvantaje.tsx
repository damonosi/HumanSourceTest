import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContactsIcon from "@mui/icons-material/Contacts";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { Card, CardContent } from "@mui/material";
interface ICardAvantaje {
  titlu: string;
  descriere: string;
  icon: string;
}
const CardAvantaje = ({ titlu, descriere, icon }: ICardAvantaje) => {
  return (
    <Card
      elevation={0}
      className="m-2  max-w-[300px]  border-0 border-l-0  lg:px-4 "
    >
      <CardContent className="flex h-fit flex-col items-center gap-2   lg:px-4">
        <div className="flex flex-col gap-4">
          <div className="text-[#BF4546]">
            {icon === "bank" && <AccountBalanceIcon />}
            {icon === "ue" && <ContactsIcon />}
            {icon === "manageri" && <DirectionsBoatIcon />}
            {icon === "suport" && <ImportContactsIcon />}
          </div>
          <div className="flex flex-col gap-2">
            <h6 className=" text-colors-gri-brand lg:px-6 ">{titlu}</h6>
            <p className="text-colors-gri-brand opacity-50 lg:px-4">
              {descriere}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardAvantaje;
