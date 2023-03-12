"use client";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import imgContact from "../../../public/imagini/contact/imgContact.png";

type Inputs = {
  nume: string;
  dataNastere: string;
  email: string;
  telefon: string;
  mesaj: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <section className="flex p-16">
      <div className="">
        <h3 className="text-start font-bold">Contacteaza-ne!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cras felis tristique pharetra
          magna. Orci quis dui viverra mi lacus amet pulvinar quis. Eu auctor
          ullamcorper imperdiet ultricies amet elementum quam. T
        </p>
        <div className="flex bg-[#D0D0D0] p-16">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-2">
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="nume"
                >
                  Numele tau complet
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="&nbsp;"
                  type="text"
                  {...register("nume", { required: true })}
                  id="nume"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="nume"
                >
                  Data Nastere
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="&nbsp;"
                  type="text"
                  {...register("dataNastere", { required: true })}
                  id="dataNastere"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Adresa de email
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="&nbsp;"
                  type="text"
                  {...register("email", { required: true })}
                  id="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="telefon"
                >
                  Numar de telefon
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="&nbsp;"
                  type="text"
                  {...register("telefon", { required: true })}
                  id="telefon"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="mesaj"
              >
                Trimite-ne un mesaj
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                placeholder="&nbsp;"
                type="text"
                {...register("mesaj", { required: true })}
                id="telefon"
              />
            </div>

            {/* include validation with required or other standard HTML validation rules */}

            {/* errors will return when field validation fails  */}
            {errors.nume && <span>This field is required</span>}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="">
        <Image alt="imagine contact" src={imgContact} />
      </div>
    </section>
  );
};

export default Contact;
