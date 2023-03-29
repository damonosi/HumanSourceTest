"use client";
import {
  Breadcrumbs,
  Checkbox,
  Input,
  Textarea,
} from "@material-tailwind/react";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import imgContact from "../../../public/imagini/contact/imgContact.png";

type Inputs = {
  nume: string;
  dataNastere: string;
  email: string;
  telefon: string;
  mesaj: string;
  privacy: boolean;
};
const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <section className="  bg-[#E5E5E5] px-4 md:px-[70px]">
      <div className="container mx-auto flex flex-col ">
        <Breadcrumbs
          className="mx-0 my-4 bg-transparent px-0 md:my-12"
          fullWidth
          separator=">"
        >
          <Link className="text-gri-brand" href="/">
            Home
          </Link>
          <Link className="text-red-600" href="/contact">
            Contact
          </Link>
        </Breadcrumbs>
        <div className="flex flex-col-reverse gap-14 py-4 md:flex-row ">
          <div className="flex w-full flex-col justify-between gap-4 md:w-1/2 md:gap-0">
            <div className="flex flex-col gap-8 md:pr-12">
              <h3 className="text-start font-bold">Contacteaza-ne!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Cras felis tristique
                pharetra magna. Orci quis dui viverra mi lacus amet pulvinar
                quis. Eu auctor ullamcorper imperdiet ultricies amet elementum
                quam. T
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:flex-row">
              <span className="rounded-2xl border bg-white py-2 px-3">
                <EmailIcon /> office@humansource.com
              </span>
              <span className="rounded-2xl border bg-white py-2 px-3">
                {" "}
                <PhoneIcon /> +40209764893
              </span>
            </div>
            <div className="flex rounded-2xl bg-[#D0D0D0] p-4 md:p-16">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input
                    variant="outlined"
                    type="text"
                    {...register("nume", { required: true })}
                    id="nume"
                    label="  Numele tau complet"
                    placeholder="  Numele tau complet"
                    color="purple"
                  />

                  <Input
                    variant="outlined"
                    type="date"
                    {...register("dataNastere", { required: true })}
                    id="dataNastere"
                    label="Data Nastere"
                    placeholder="Data Nastere"
                  />

                  <Input
                    variant="outlined"
                    type="text"
                    {...register("email", { required: true })}
                    icon={<EmailOutlinedIcon />}
                    id="email"
                    label="Email"
                    placeholder="Email"
                  />

                  <Input
                    variant="outlined"
                    type="text"
                    {...register("telefon", { required: true })}
                    id="telefon"
                    label="Numar de telefon"
                    placeholder="Numar de telefon"
                  />
                </div>
                <Checkbox
                  {...register("privacy", { required: true })}
                  label={
                    <span className="text-xs text-white">
                      *Sunt de acord cu
                      <a
                        href="politica-confidentialitate"
                        className=" mx-2 text-gri-bg underline underline-offset-4"
                      >
                        Politica de confidentialitate
                      </a>
                      in vederea prelucrarii datelor personale.
                    </span>
                  }
                />

                <Textarea
                  variant="outlined"
                  {...register("mesaj", { required: true })}
                  id="telefon"
                  aria-expanded
                  label="Trimite-ne un mesaj"
                  placeholder="Trimite-ne un mesaj"
                />

                {errors.nume && <span>This field is required</span>}

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="flex w-full md:w-1/2">
            <Image alt="imagine contact" src={imgContact} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
