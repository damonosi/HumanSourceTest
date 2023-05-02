"use client";

import Pas1Constructii from "@/components/Formular/constructii/pasi/1";
import Pas2Constructii from "@/components/Formular/constructii/pasi/2";
import NavigatieFormular from "@/components/Formular/NavigatieFormular";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";

import Pas3Constructii from "@/components/Formular/constructii/pasi/3";
import Pas4Constructii from "@/components/Formular/constructii/pasi/4";
import Pas5Constructii from "@/components/Formular/constructii/pasi/5";
import Pas6Constructii from "@/components/Formular/constructii/pasi/6";
import Pas7Constructii from "@/components/Formular/constructii/pasi/7";
import Pas8Constructii from "@/components/Formular/constructii/pasi/8";
import Pas9Constructii from "@/components/Formular/constructii/pasi/9";
import Pas10Constructii from "@/components/Formular/constructii/pasi/10";
import Pas11Constructii from "@/components/Formular/constructii/pasi/11";
import Pas12Constructii from "@/components/Formular/constructii/pasi/12";

const FormularConstructii = () => {
	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm([
		<Pas1Constructii />,
		<Pas2Constructii />,
		<Pas3Constructii />,
		<Pas4Constructii />,
		<Pas5Constructii />,
		<Pas6Constructii />,
		<Pas7Constructii />,
		<Pas8Constructii />,
		<Pas9Constructii />,
		<Pas10Constructii />,
		<Pas11Constructii />,
		<Pas12Constructii />,
	]);
	return (
		<div className="flex flex-col md:px-[70px]">
			<form action="">
				{step}
				<NavigatieFormular
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

export default FormularConstructii;
