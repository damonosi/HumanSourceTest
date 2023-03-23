import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

interface ICardParteneri {
  firma: string;
  descriere: string;
  src: StaticImageData;
}

const CardParteneri = ({ firma, descriere, src }: ICardParteneri) => {
  return (
    <Card className="max-w-[210px] shadow-parteneriShadow ">
      <CardHeader
        className="mt-0 bg-transparent py-6 shadow-none md:p-4"
        title="imagine-firma"
      >
        <Image alt="" src={src} />
      </CardHeader>

      <CardBody className="hidden flex-col rounded-[10px] p-4 text-center md:flex md:gap-4 ">
        <Typography variant="h5" className=" font-medium ">
          {firma}
        </Typography>
        <Typography className=" " variant="paragraph">
          {descriere}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardParteneri;
