"use client";
import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import CardRemorca from "../CardRemorca";
import Cisterna from "../../../../public/imagini/formular/sofer/negru/cisterna.svg";
import CisternaAlb from "../../../../public/imagini/formular/sofer/alb/cisterna.svg";
import Frigorifica from "../../../../public/imagini/formular/sofer/negru/frigorifica.svg";
import FrigorificaAlb from "../../../../public/imagini/formular/sofer/alb/frigorifica.svg";
import Prelata from "../../../../public/imagini/formular/sofer/negru/prelata.svg";
import PrelataAlb from "../../../../public/imagini/formular/sofer/alb/prelata.svg";
import Basculanta from "../../../../public/imagini/formular/sofer/negru/basculanta.svg";
import BasculantaAlb from "../../../../public/imagini/formular/sofer/alb/basculanta.svg";
import Box from "../../../../public/imagini/formular/sofer/negru/box.svg";
import BoxAlb from "../../../../public/imagini/formular/sofer/alb/box.svg";
import Animale from "../../../../public/imagini/formular/sofer/negru/animale.svg";
import AnimaleAlb from "../../../../public/imagini/formular/sofer/alb/animale.svg";
import Siloz from "../../../../public/imagini/formular/sofer/negru/siloz.svg";
import SilozAlb from "../../../../public/imagini/formular/sofer/alb/siloz.svg";
import Container from "../../../../public/imagini/formular/sofer/negru/container.svg";
import ContainerAlb from "../../../../public/imagini/formular/sofer/alb/container.svg";
import Agabaritic from "../../../../public/imagini/formular/sofer/negru/agabaritic.svg";
import AgabariticAlb from "../../../../public/imagini/formular/sofer/alb/agabaritic.svg";

const Pas1Trasport = ({ setValue }: any) => {
	const [selected, setSelected] = useState(0);
	console.log(selected);
	return (
		<FormWrapper intrebare="Cu ce tip de remorca va doriti sa lucrati?">
			<div className="mx-auto grid w-fit grid-cols-3 place-items-center gap-5  gap-x-5">
				<CardRemorca
					className={`${selected == 1 && "bg-gri-brand text-alb-site"}  px-6`}
					onClick={() => {
						setValue("tipRemorca", "cisterna");
						setSelected(1);
					}}
					text="Cisterna"
					svg={selected == 1 ? <CisternaAlb className="h-36 w-56 " /> : <Cisterna className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 2 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "frigorifica");
						setSelected(2);
					}}
					text="Frigorifica"
					svg={selected == 2 ? <FrigorificaAlb className="h-36 w-56 " /> : <Frigorifica className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 3 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "prelata");
						setSelected(3);
					}}
					text="Prelata"
					svg={selected == 3 ? <PrelataAlb className="h-36 w-56 " /> : <Prelata className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 4 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "basculanta");
						setSelected(4);
					}}
					text="Basculanta"
					svg={selected == 4 ? <BasculantaAlb className="h-36 w-56 " /> : <Basculanta className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 5 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "animale");
						setSelected(5);
					}}
					text="Box"
					svg={selected == 5 ? <BoxAlb className="h-36 w-56 " /> : <Box className="h-36 w-56 " />}
				/>
				<CardRemorca
					className={`${selected == 6 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "cisterna");
						setSelected(6);
					}}
					text="Animale"
					svg={selected == 6 ? <AnimaleAlb className="h-36 w-56 " /> : <Animale className="h-36 w-56 " />}

				/>
				<CardRemorca
					className={`${selected == 7 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "siloz");
						setSelected(7);
					}}
					text="Siloz"
					svg={selected == 7 ? <SilozAlb className="h-36 w-56 " /> : <Siloz className="h-36 w-56 " />}
				
				/>
				<CardRemorca
					className={`${selected == 8 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "container");
						setSelected(8);
					}}
					text="Container"
					svg={selected == 8 ? <ContainerAlb className="h-36 w-56 " /> : <Container className="h-36 w-56 " />}
				
				/>
				<CardRemorca
					className={`${selected == 9 && "bg-gri-brand text-alb-site"}`}
					onClick={() => {
						setValue("tipRemorca", "agabaritic");
						setSelected(9);
					}}
					text="Agabaritic"
					svg={selected == 9 ? <AgabariticAlb className="h-36 w-56   " /> : <Agabaritic className="h-36 w-56  " />}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas1Trasport;
