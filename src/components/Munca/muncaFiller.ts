import ImgFillerTransport from "../../../public/imagini/munca/transport.png";
import ImgFillerConstructii from "../../../public/imagini/munca/constructii.png";
import ImgFillerMedical from "../../../public/imagini/munca/medical.png";
import { StaticImageData } from "next/image";
interface IdataJoburi {
  id: number;
  data: string;
  titlu: string;
  src: StaticImageData;

  descriere: string;

  categorie: string;
  salariu: number;
}
export type Idate = IdataJoburi[];

const muncaFiller: Idate = [
  {
    id: 1,
    data: "Luni, 24 Septembrie 2019",
    src: ImgFillerMedical,

    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    titlu: "medic Italia-Romania",
    categorie: "medical",
    salariu: 1000,
  },
  {
    id: 2,
    data: "Luni, 24 Septembrie 2020",

    src: ImgFillerMedical,
    titlu: "medic de tir Italia-Romania",
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    categorie: "medical",
    salariu: 1000,
  },
  {
    id: 3,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerMedical,
    titlu: "medic de tir Italia-Romania",

    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    categorie: "medical",
    salariu: 1000,
  },
  {
    id: 4,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerConstructii,
    titlu: "Inginer Italia-Romania",
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",

    categorie: "constructii",
    salariu: 1000,
  },
  {
    id: 5,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerConstructii,
    titlu: "Inginer Italia-Romania",
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    categorie: "constructii",

    salariu: 1000,
  },
  {
    id: 6,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerConstructii,
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    categorie: "constructii",
    titlu: "Inginer Italia-Romania",

    salariu: 1000,
  },
  {
    id: 7,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerTransport,
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    categorie: "transport",
    titlu: "Sofer de tir Italia-Romania",

    salariu: 1000,
  },
  {
    id: 8,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerTransport,
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    titlu: "Sofer de tir Italia-Romania",
    categorie: "transport",

    salariu: 1000,
  },
  {
    id: 9,
    data: "Luni, 24 Septembrie 2030",
    src: ImgFillerTransport,
    descriere:
      "Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
    titlu: "Sofer de tir Italia-Romania",
    categorie: "transport",

    salariu: 1000,
  },
];

export default muncaFiller;
