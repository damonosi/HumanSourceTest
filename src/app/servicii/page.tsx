"use client";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Image from "next/image";
import Link from "next/link";
import ServiciiCover from "../../../public/imagini/servicii/hero-servicii.png";
import ImgSec1 from "../../../public/imagini/servicii/img-sec-1.png";
import ImgSec2 from "../../../public/imagini/servicii/img-sec-2.png";

const ServiciiPage = () => {
  return (
    <section className=" bg-[#E5E5E5] px-4 pb-28  md:px-[70px] ">
      <div className="container mx-auto flex flex-col ">
        <Breadcrumbs
           className="mx-0 my-4 px-0 bg-transparent md:my-12"
          fullWidth
          separator=">"
        >
          <Link className="text-gri-brand" href="/">
            Home
          </Link>
          <Link className="text-red-600" href="/servicii">
            Servicii
          </Link>
        </Breadcrumbs>
        <div className="flex flex-col gap-32" id="sections-container">
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
              <Typography className="text-gri-brand" variant="h5">
                Compania noastra de resurse umane oferă servicii de atât pe
                partea de leasign de personal, recrutare, selecție cât și pe
                partea de payroll si administrare de personal.
              </Typography>
              <Typography variant="paragraph">
                Compania noastra de resurse umane oferă servicii de atât pe
                partea de leasign de personal, recrutare, selecție cât și pe
                partea de payroll si administrare de personal.
              </Typography>
              <div className="flex w-full flex-col justify-between md:flex-row">
                {" "}
                <span className=" rounded-full border bg-white py-2 px-3 ">
                  <Groups2OutlinedIcon className="text-red-800" /> Leasing de
                  personal
                </span>
                <span className="rounded-full border bg-white py-2 px-3">
                  <AttachEmailOutlinedIcon className="text-red-800" /> Payroll
                  si administrare
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
          <section
            className="flex w-full flex-col-reverse items-center gap-8 md:flex-row"
            id="sectiune-servicii-1"
          >
            <div
              className="flex items-center justify-center md:w-1/2"
              id="container-imagine"
            >
              {" "}
              <Image alt="cover-servicii" src={ImgSec1} />{" "}
            </div>
            <div className="flex h-full flex-col items-start gap-12 md:w-1/2">
              <Typography variant="h3">Asiguram nevoile de personal</Typography>
              <Typography variant="paragraph">
                Lorem ipsum dolor sit amet consectetur. Orci elementum lorem
                consectetur neque semper et. Urna aliquam maecenas in facilisi
                orci pulvinar aliquam in diam. Varius eu nunc elit mi volutpat
                tellus arcu. Vulputate dolor massa lectus consectetur diam.
                Lobortis sed nisl fermentum justo accumsan arcu.Gravida amet et
                nunc ipsum urna. Nisi eget elementum elementum et dui ut id
                turpis. Dui
              </Typography>
              <button className="rounded-full border border-rosu-brand bg-white py-2 px-3 font-bold text-rosu-brand ">
                <Groups2OutlinedIcon className="mr-4 text-red-800" /> Solicita
                oferta
              </button>
            </div>
          </section>
          <section
            className="flex w-full flex-col-reverse items-center gap-8 md:flex-row"
            id="sectiune-servicii-2"
          >
            <div className="flex h-full flex-col items-start gap-12 md:w-1/2">
              <Typography variant="h3">Administram documentatia</Typography>
              <Typography variant="paragraph">
                Lorem ipsum dolor sit amet consectetur. Orci elementum lorem
                consectetur neque semper et. Urna aliquam maecenas in facilisi
                orci pulvinar aliquam in diam. Varius eu nunc elit mi volutpat
                tellus arcu. Vulputate dolor massa lectus consectetur diam.
                Lobortis sed nisl fermentum justo accumsan arcu.Gravida amet et
                nunc ipsum urna. Nisi eget elementum elementum et dui ut id
                turpis. Dui
              </Typography>
              <button className="rounded-full border border-rosu-brand bg-white py-2 px-3 font-bold text-rosu-brand ">
                <AttachEmailOutlinedIcon className="mr-4 text-red-800" />{" "}
                Solicita oferta
              </button>
            </div>
            <div
              className="flex items-center justify-center md:w-1/2"
              id="container-imagine"
            >
              {" "}
              <Image alt="cover-servicii" src={ImgSec2} />{" "}
            </div>
          </section>
          <section
            className="flex w-full flex-col-reverse items-center gap-8 md:flex-row"
            id="sectiune-servicii-1"
          >
            <div
              className="flex items-center justify-center md:w-1/2"
              id="container-imagine"
            >
              {" "}
              <Image alt="cover-servicii" src={ImgSec1} />{" "}
            </div>
            <div className="flex h-full flex-col items-start gap-12 md:w-1/2">
              <Typography variant="h3">Iti construim echipa</Typography>
              <Typography variant="paragraph">
                Lorem ipsum dolor sit amet consectetur. Orci elementum lorem
                consectetur neque semper et. Urna aliquam maecenas in facilisi
                orci pulvinar aliquam in diam. Varius eu nunc elit mi volutpat
                tellus arcu. Vulputate dolor massa lectus consectetur diam.
                Lobortis sed nisl fermentum justo accumsan arcu.Gravida amet et
                nunc ipsum urna. Nisi eget elementum elementum et dui ut id
                turpis. Dui
              </Typography>
              <button className="rounded-full border border-rosu-brand bg-white py-2 px-3 font-bold text-rosu-brand ">
                <GroupAddOutlinedIcon className="mr-4 text-red-800" /> Solicita
                oferta
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ServiciiPage;
