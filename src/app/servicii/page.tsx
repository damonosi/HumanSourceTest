"use client";
import CardServicii from "@/components/Servicii/CardServicii";
import dateServiciiCard from "@/components/Servicii/dateServicii";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Image from "next/image";
import Link from "next/link";
import ServiciiCover from "../../../public/imagini/servicii/hero-servicii.png";

const ServiciiPage = () => {
  return (
    <section className="flex flex-col gap-16  bg-[#E5E5E5] px-4 pb-28 md:px-16">
      <Breadcrumbs
        className="mx-0 my-4 bg-transparent md:my-12"
        fullWidth
        separator=">"
      >
        <Link className="text-colors-gri-brand" href="/">
          Home
        </Link>
        <Link className="text-red-600" href="/bloguri">
          Servicii
        </Link>
      </Breadcrumbs>
      <section
        className="flex w-full flex-col-reverse items-center gap-8 md:flex-row"
        id="hero-servicii"
      >
        <div
          className="flex h-full flex-col items-start gap-12 md:w-1/2"
          id="container-text-blog"
        >
          <Typography variant="h3">
            Serviciile oferite de Human Source
          </Typography>
          <Typography className="text-colors-gri-brand" variant="h5">
            Compania noastra de resurse umane oferă servicii de atât pe partea
            de leasign de personal, recrutare, selecție cât și pe partea de
            payroll si administrare de personal.
          </Typography>
          <Typography variant="paragraph">
            Compania noastra de resurse umane oferă servicii de atât pe partea
            de leasign de personal, recrutare, selecție cât și pe partea de
            payroll si administrare de personal.
          </Typography>
          <div className="flex w-full flex-col justify-between md:flex-row">
            {" "}
            <span className=" rounded-full border bg-white py-2 px-3 ">
              <Groups2OutlinedIcon className="text-red-800" /> Leasing de
              personal
            </span>
            <span className="rounded-full border bg-white py-2 px-3">
              <AttachEmailOutlinedIcon className="text-red-800" /> Payroll si
              administrare
            </span>
            <span className="rounded-full border bg-white py-2 px-3">
              <GroupAddOutlinedIcon className="text-red-800" /> Recrutare si
              selectie
            </span>
          </div>
        </div>
        <div
          className="flex items-center justify-center md:w-1/2"
          id="container-imagine"
        >
          {" "}
          <Image alt="cover-servicii" src={ServiciiCover} />{" "}
        </div>
      </section>
      <div className="flex flex-col justify-between md:flex-row">
        {dateServiciiCard.map(({ src, titlu, descriere }) => (
          <CardServicii src={src} titlu={titlu} descriere={descriere} />
        ))}
      </div>
    </section>
  );
};

export default ServiciiPage;
