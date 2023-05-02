"use client";
import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import CardRemorca from "../CardRemorca";
import Cisterna2 from "../../../../public/imagini/formular/sofer/prelata.svg";

const Pas1Trasport = ({ setValue }: any) => {
	return (
		<FormWrapper intrebare="Cu ce tip de remorca va doriti sa lucrati?">
			<div className="grid grid-cols-3 place-items-center gap-8">
				<CardRemorca
					onClick={() => setValue("tipRemorca", "cisterna")}
					text="Cisterna"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "frigorifica")}
					text="Frigorifica"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "prelata")}
					text="Prelata"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "basculanta")}
					text="Basculanta"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "animale")}
					text="Box"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "cisterna")}
					text="Animale"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "siloz")}
					text="Siloz"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "container")}
					text="Container"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
				<CardRemorca
					onClick={() => setValue("tipRemorca", "agabaritic")}
					text="Agabaritic"
					svg={<Cisterna2 className="h-36 w-56 " />}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas1Trasport;
