"use client";
import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import CardRemorca from "../CardRemorca";

import Cisterna2 from "../../../../public/imagini/formular/sofer/cisterna.svg";

const Pas1Trasport = (setValue: any) => {
	const [remorcaSelectata, setRemorcaSelectata] = useState("");
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const remorcaAleasa = e.currentTarget.children[1].childNodes[0].textContent?.toLocaleLowerCase();
		remorcaAleasa && setRemorcaSelectata(remorcaAleasa);
		setValue("tipRemorca", remorcaAleasa);
	};

	return (
		<FormWrapper intrebare="Cu ce tip de remorca va doriti sa lucrati?">
			<div className="grid grid-cols-3 place-items-center gap-8">
				<CardRemorca onClick={handleClick} text="Cisterna" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Frigorifica" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Prelata" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Basculanta" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Box" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Animale" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Siloz" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Container" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca onClick={handleClick} text="Agabaritic" svg={<Cisterna2 className="h-36 w-56 " />} />
			</div>
		</FormWrapper>
	);
};

export default Pas1Trasport;
