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
    <Card className="bg-transpartent max-w-[210px] shadow-none ">
      <CardHeader
        className="mt-0 bg-transparent py-6 shadow-none md:p-4"
        title="imagine-firma"
      >
        <Image alt="" src={src} />
      </CardHeader>
    </Card>
  );
};

export default CardParteneri;
