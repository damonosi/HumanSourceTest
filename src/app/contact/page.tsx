import Image from "next/image";
import imgContact from "../../../public/imagini/contact/imgContact.png";

const Contact = () => {
  return (
    <section className="flex p-16">
      <div className="">
        <h3 className="text-start font-bold">Contacteaza-ne!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cras felis tristique pharetra
          magna. Orci quis dui viverra mi lacus amet pulvinar quis. Eu auctor
          ullamcorper imperdiet ultricies amet elementum quam. T
        </p>
      </div>
      <div className="">
        <Image alt="imagine contact" src={imgContact} />
      </div>
    </section>
  );
};

export default Contact;
