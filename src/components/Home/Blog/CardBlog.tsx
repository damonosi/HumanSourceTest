import { Card } from "@material-tailwind/react";

import InViewWrapper from "@/utils/InViewWrapper";

import { useState } from "react";
import Fata1Card from "./Fata1Card";
import Fata2Card from "./Fata2Card";

interface ICardBlog {
  data: string;
  titlu: string;
  continut: string;
  id: number;
}

const CardBlog = ({ data, titlu, continut, id }: ICardBlog) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setTimeout(() => {
      setHovered(true);
    }, 200);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(false);
    }, 200);
  };
  return (
    <Card
      className={` ${
        hovered && "shadow-none"
      }  relative flex h-[550px] flex-col overflow-hidden rounded-2xl border-none bg-transparent text-[#383A3C] transition    md:w-full`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!hovered ? (
        <Fata1Card data={data} titlu={titlu} continut={continut} />
      ) : (
        <Fata2Card data={data} titlu={titlu} continut={continut} />
      )}
    </Card>
  );
};

export default CardBlog;
