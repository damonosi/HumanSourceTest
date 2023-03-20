"use client";
import CardCategorieMunca from "@/components/Munca/CardCategorieMunca";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Link from "next/link";

import ImgConstructii from "../../../public/imagini/munca/constructii.png";
import ImgMedical from "../../../public/imagini/munca/medical.png";
import ImgTransport from "../../../public/imagini/munca/transport.png";

const CategorieJoburi = () => {
  return (
    <section className="grid grid-cols-1 gap-16 bg-[#E5E5E5] px-5 pb-16 lg:px-20">
      <Breadcrumbs
        className="mx-0 my-4 bg-transparent md:my-12"
        fullWidth
        separator=">"
      >
        <Link className="text-gri-brand" href="/">
          Home
        </Link>
        <Link className="text-red-600" href="/locuri-de-munca">
          Locuri de munca
        </Link>
      </Breadcrumbs>
      <Typography variant="h3" className="text-bold text-center">
        {" "}
        Alege domeniul in care iti cauti un loc de munca
      </Typography>
      <div className="flex flex-col justify-between md:flex-row">
        <CardCategorieMunca src={ImgTransport} domeniu="Transport" />
        <CardCategorieMunca src={ImgMedical} domeniu="Medical" />
        <CardCategorieMunca src={ImgConstructii} domeniu="Constructii" />
      </div>
    </section>
  );
};

export default CategorieJoburi;
