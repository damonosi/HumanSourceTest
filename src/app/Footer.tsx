import Image from "next/image";
import Link from "next/link";
import IcoFacebook from "../../public/imagini/facebook.png";
import IcoInstagram from "../../public/imagini/instagram.png";
import IcoTwitter from "../../public/imagini/twitter.png";

const buttonClasses =
  "py-2 px-8 border rounded-[16px] hover:bg-white hover:text-black  ";

const Footer = () => {
  return (
    <footer className="relative z-10  w-full overflow-hidden bg-gri-bg pt-12 pb-10 text-white md:mx-auto   md:items-center  md:justify-center">
      <div className="mx-auto  flex w-full flex-col items-center justify-center  pb-0   md:px-[70px]">
        <nav className="container z-30 flex w-full flex-col items-center justify-between  md:items-start  ">
          <div className=" flex w-full  flex-col items-start justify-between gap-8 p-4 lg:flex-row ">
            <div className="flex flex-col gap-6">
              <h6 className=" text-[16px]   leading-[20px]">HUMAN SOURCE</h6>
              <hr className="h-2 w-full" />
              <div className="flex flex-col gap-8 text-[16px]  font-[350] leading-[24px]">
                <Link href="/despre-noi">Despre noi </Link>
                <Link href="/despre-noi">Angajatori </Link>
                <Link href="/blog">Candidati</Link>
                <Link href="/munca">Locuri de munca</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="">SERVICII</h6>

              <hr className="h-2 w-full" />
              <div className="flex flex-col gap-8">
                <Link href="/locuri-de-munca">Leasing de personal</Link>
                <Link href="/plasare">Recrutare si selectie</Link>
                <Link href="/cerere-oferta">Payroll si administrare</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="">CONTACT</h6>
              <hr className="h-2 w-full" />
              <div className="flex flex-col gap-8">
                <p>
                  Nr. de ordine in registrul comertului : <br /> J40/17607/20
                </p>
                <p>Cod unic de identificare : 38366948</p>
                <p>Telefon : 0040743096465 </p>
                <p>Email : office@humansource.ro</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="font-[500]">INFORMATII</h6>
              <hr className="h-2 w-full" />
              <div className="flex flex-col gap-8">
                <Link href="/despre-noi">Politica si confidentialitate</Link>
                <Link href="/blog">Termeni si conditii de utilizare</Link>
                <Link href="/contact">Politica privind Cookie-urile</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
