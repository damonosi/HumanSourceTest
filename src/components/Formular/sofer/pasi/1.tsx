"use client";
import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import CardRemorca from "../CardRemorca";
import Cisterna from "../../../../public/imagini/formular/sofer/negru/cisterna.svg";
import Frigorifica from "../../../../public/imagini/formular/sofer/negru/frigorifica.svg";
import FrigorificaAlb from "../../../../public/imagini/formular/sofer/alb/frigorifica.svg";
import Prelata from "../../../../public/imagini/formular/sofer/negru/prelata.svg";
import Basculanta from "../../../../public/imagini/formular/sofer/negru/basculanta.svg";
import Box from "../../../../public/imagini/formular/sofer/negru/box.svg";
import Animale from "../../../../public/imagini/formular/sofer/negru/animale.svg";
import Siloz from "../../../../public/imagini/formular/sofer/negru/siloz.svg";
import Container from "../../../../public/imagini/formular/sofer/negru/container.svg";
import Agabaritic from "../../../../public/imagini/formular/sofer/negru/agabaritic.svg";

const Pas1Trasport = ({ setValue }: any) => {
	const [selected, setSelected] = useState(0);
	console.log(selected);
	return (
		<FormWrapper intrebare="Cu ce tip de remorca va doriti sa lucrati?">
			<div className="grid grid-cols-3 place-items-center gap-8">
				<CardRemorca
					className={`${selected == 1 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "cisterna");
						setSelected(1);
					}}
					text="Cisterna"
					svg={<Cisterna className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 2 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "frigorifica");
						setSelected(2);
					}}
					text="Frigorifica"
					svg={selected == 2 ? <FrigorificaAlb className="h-36 w-56 " /> : <Frigorifica className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 3 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "prelata");
						setSelected(3);
					}}
					text="Prelata"
					svg={<Prelata className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 4 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "basculanta");
						setSelected(4);
					}}
					text="Basculanta"
					svg={<Basculanta className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 5 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "animale");
						setSelected(5);
					}}
					text="Box"
					svg={<Box className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 6 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "cisterna");
						setSelected(6);
					}}
					text="Animale"
					svg={<Animale className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 7 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "siloz");
						setSelected(7);
					}}
					text="Siloz"
					svg={<Siloz className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 8 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "container");
						setSelected(8);
					}}
					text="Container"
					svg={<Container className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 9 && "bg-gri-brand"}`}
					onClick={() => {
						setValue("tipRemorca", "agabaritic");
						setSelected(9);
					}}
					text="Agabaritic"
					svg={selected == 9 ? <Agabaritic className="h-36 w-56   " /> : <Agabaritic className="h-36 w-56  " />}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas1Trasport;
