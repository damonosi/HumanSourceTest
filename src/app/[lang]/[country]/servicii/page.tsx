"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ServiciiCover from "@/public/imagini/servicii/hero-servicii.png";
import ImgSec1 from "@/public/imagini/servicii/img-sec-1.png";
import ImgSec2 from "@/public/imagini/servicii/img-sec-2.png";
import { Typography } from "@material-tailwind/react";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Image from "next/image";
import Link from "next/link";


type Props = { children: JSX.Element | JSX.Element[]; text: string; };

const CardHeroServicii = ({ children, text }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-full border text-gri-brand py-2 px-3 ">
      {children}
      <span className='text-sm'>{text}</span>
    </div>
  );
};
const ButonHeroServicii = ({ children, text }: Props) => {
  return (
    <button className="rounded-full items-center flex gap-4 border border-rosu-brand  py-2 px-3 font-bold text-rosu-brand ">
      {children}
      <span className='text-sm'>{text}</span>
    </button>
  );
};

const ServiciiPage = () => {
  return (
    <section className=" bg-[#E5E5E5] px-4 pb-28  md:px-[70px] ">
      <div className="container mx-auto flex flex-col ">
        <Breadcrumbs


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
              id="container-text-servicii"
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
              <div className="flex text-sm w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
                <CardHeroServicii text=' Leasing de personal'>
                  <Groups2OutlinedIcon className="text-[15px]" />

                </CardHeroServicii>
                <CardHeroServicii text='Payroll si administrare'>
                  <AttachEmailOutlinedIcon className="text-[15px]" />

                </CardHeroServicii>
                <CardHeroServicii text='Recrutare si selectie'>
                  <GroupAddOutlinedIcon className="text-[15px]" />

                </CardHeroServicii>


              </div>
            </div>
            <div
              className="flex w-full items-center justify-center md:w-1/2"
              id="container-imagine"
            >

              <Image alt="cover-servicii" src={ServiciiCover} />{" "}
            </div>
          </section>
          <section
            className="flex w-full flex-col items-center gap-8 md:flex-row"
            id="sectiune-servicii-1"
          >
            <div
              className="flex w-full items-center justify-center md:w-1/2"
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
              <ButonHeroServicii text='Solicita oferta' >
                <Groups2OutlinedIcon className="text-xl" />

              </ButonHeroServicii>
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
              <ButonHeroServicii text='Solicita oferta'>
                <AttachEmailOutlinedIcon className="text-xl" />
              </ButonHeroServicii>
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
            className="flex w-full flex-col items-center gap-8 md:flex-row"
            id="sectiune-servicii-3"
          >
            <div
              className="flex w-full items-center justify-center md:w-1/2"
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
              <ButonHeroServicii text='Solicita oferta'>
                <GroupAddOutlinedIcon className="text-xl" />
              </ButonHeroServicii>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ServiciiPage;
