"use client";
import { useState } from "react";
import Pas1Medical from "@/components/Formular/medic/pasi/1";
import Pas10Medical from "@/components/Formular/medic/pasi/10";
import Pas11Medical from "@/components/Formular/medic/pasi/11";
import Pas12Medical from "@/components/Formular/medic/pasi/12";
import Pas2Medical from "@/components/Formular/medic/pasi/2";
import Pas3Medical from "@/components/Formular/medic/pasi/3";
import Pas4Medical from "@/components/Formular/medic/pasi/4";
import Pas5Medical from "@/components/Formular/medic/pasi/5";
import Pas6Medical from "@/components/Formular/medic/pasi/6";
import Pas7Medical from "@/components/Formular/medic/pasi/7";
import Pas8Medical from "@/components/Formular/medic/pasi/8";
import Pas9Medical from "@/components/Formular/medic/pasi/9";
import NavigatieFormular from "@/components/Formular/NavigatieFormular";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";

const FormularMedic = () => {
	const [disabled, setDisabled] = useState(true);
	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm([
		<Pas1Medical />,
		<Pas2Medical />,
		<Pas3Medical />,
		<Pas4Medical />,
		<Pas5Medical />,
		<Pas6Medical />,
		<Pas7Medical />,
		<Pas8Medical />,
		<Pas9Medical />,
		<Pas10Medical />,
		<Pas11Medical />,
		<Pas12Medical />,
	]);
	return (
		<div className="flex flex-col md:px-[70px] ">
			<form className="relative m-[70px] rounded-2xl bg-alb-site px-[60px] pt-8">
				{step}
				<NavigatieFormular
					disabled={disabled}
					back={back}
					next={next}
					isFirstStep={isFirstStep}
					isLastStep={isLastStep}
					currentStepIndex={currentStepIndex}
					steps={steps}
				/>
			</form>
		</div>
	);
};

export default FormularMedic;
