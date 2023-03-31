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
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Card
      className="relative flex h-[550px] flex-col overflow-hidden rounded-2xl  text-[#383A3C]  md:w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      <InViewWrapper
        inView={{
          opacity: 1,
          translateY: 0,
        }}
        notInView={{
          opacity: 0.5,
          translateY: 100,
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className=""
      >
        {!hovered ? (
          <Fata1Card data={data} titlu={titlu} continut={continut} />
        ) : (
          <Fata2Card data={data} titlu={titlu} continut={continut} />
        )}
      </InViewWrapper>
    </Card>
  );
};

export default CardBlog;
