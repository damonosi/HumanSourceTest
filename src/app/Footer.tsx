import Image from "next/image";
import Link from "next/link";
import IcoFacebook from "../../public/imagini/facebook.png";
import IcoInstagram from "../../public/imagini/instagram.png";
import IcoTwitter from "../../public/imagini/twitter.png";

const buttonClasses =
  "py-2 px-8 border rounded-[16px] hover:bg-white hover:text-black  ";

const Footer = () => {
  return (
    <footer className="relative z-10  w-full overflow-hidden bg-gri-bg pt-4 pb-10 text-white lg:mx-auto   lg:items-center  lg:justify-center">
      <div className="  mx-auto flex w-full flex-col items-center  justify-center   pb-0">
        <nav className="container z-30 flex w-full flex-col items-center justify-between p-4 lg:items-start lg:px-36 ">
          <div className="flex w-full flex-col justify-between gap-16 py-16  lg:flex-row">
            <div
              className="flex flex-col gap-10 text-[14px] lg:flex-row "
              id="butoane-footer"
            >
              <button className={buttonClasses}>Completeaza formular</button>
            </div>
            <div
              className="z-20 flex items-center justify-center gap-[16px]  p-[4px] lg:max-w-[196px]  "
              id="social-media"
            >
              {" "}
              <button>
                <Image
                  width={52}
                  height={52}
                  src={IcoInstagram}
                  alt="instagram"
                />{" "}
              </button>{" "}
              <button>
                <Image
                  width={52}
                  height={52}
                  src={IcoFacebook}
                  alt="facebook"
                />{" "}
              </button>
              <button>
                <Image width={52} height={52} src={IcoTwitter} alt="twitter" />
              </button>
            </div>
          </div>
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
