"use client";
import { Typography } from "@material-tailwind/react";

import Cisterna2 from "@/public/imagini/formular/sofer/cisterna.svg";
import CardRemorca from "./CardRemorca";

const SelectTipRemorca = () => {
	return (
		<div>
			<Typography variant="h3">Cu ce tip de remorca va doriti sa lucrati?</Typography>

			<div className="grid grid-cols-3 place-items-center gap-8">
				<CardRemorca text="Cisterna" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Frigorifica" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Prelata" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Basculanta" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Box" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Animale" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Siloz" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Container" svg={<Cisterna2 className="h-36 w-56 " />} />
				<CardRemorca text="Agabaritic" svg={<Cisterna2 className="h-36 w-56 " />} />
			</div>
		</div>
	);
};

export default SelectTipRemorca;
