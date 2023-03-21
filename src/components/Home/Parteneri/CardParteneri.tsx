import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import Dacia from "../../../../public/imagini/parteneri/dacia.png";
import Giorna from "../../../../public/imagini/parteneri/giorna.png";
import Oil from "../../../../public/imagini/parteneri/oil.png";
import Tf from "../../../../public/imagini/parteneri/tf.png";
import Uvm from "../../../../public/imagini/parteneri/uvm.png";
interface ICardParteneri {
  firma: string;
  descriere: string;
}

const CardParteneri = ({ firma, descriere }: ICardParteneri) => {
  return (
    <Card className="max-w-[210px] shadow-parteneriShadow ">
      {firma === "Giorna" && (
        <CardHeader title="imagine-firma">
          {" "}
          <Image alt="" src={Giorna} />{" "}
        </CardHeader>
      )}
      {firma === "Oil Part" && (
        <CardHeader title="imagine-firma">
          {" "}
          <Image alt="" src={Oil} />{" "}
        </CardHeader>
      )}
      {firma === "TF" && (
        <CardHeader title="imagine-firma">
          {" "}
          <Image alt="" src={Tf} />{" "}
        </CardHeader>
      )}
      {firma === "Dacia" && (
        <CardHeader className="bg-transparent" title="imagine-firma">
          <Image alt="" src={Dacia} />{" "}
        </CardHeader>
      )}
      {firma === "UVM" && (
        <CardHeader title="imagine-firma">
          {" "}
          <Image alt="" src={Uvm} />{" "}
        </CardHeader>
      )}
      <CardBody className="flex flex-col rounded-[10px] p-4 text-center md:gap-4 ">
        <Typography variant="h5" className=" font-medium md:block">
          {firma}
        </Typography>
        <Typography className="hidden md:block" variant="paragraph">
          {descriere}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardParteneri;
