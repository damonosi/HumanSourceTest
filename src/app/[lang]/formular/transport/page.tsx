"use client";

import NavigatieFormular from "@/components/Formular/NavigatieFormular";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";
import { FormEvent } from "react";
import Pas1Trasport from "@/components/Formular/sofer/pasi/1";
import Pas2Trasport from "@/components/Formular/sofer/pasi/2";
import Pas3Trasport from "@/components/Formular/sofer/pasi/3";
import Pas4Trasport from "@/components/Formular/sofer/pasi/4";
import Pas5Trasport from "@/components/Formular/sofer/pasi/5";
import Pas6Trasport from "@/components/Formular/sofer/pasi/6";
import Pas7Trasport from "@/components/Formular/sofer/pasi/7";
import Pas8Trasport from "@/components/Formular/sofer/pasi/8";
import Pas9Trasport from "@/components/Formular/sofer/pasi/9";
import Pas10Trasport from "@/components/Formular/sofer/pasi/10";
import Pas11Trasport from "@/components/Formular/sofer/pasi/11";
import Pas12Trasport from "@/components/Formular/sofer/pasi/12";
import { useForm } from "react-hook-form";

const FormularSofer = () => {
	const {
		register,
		watch,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm({ defaultValues: { tipRemorca: "" } });
	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm([
		<Pas1Trasport setValue={setValue} control={control} register={register} />,
		<Pas2Trasport />,
		<Pas3Trasport />,
		<Pas4Trasport />,
		<Pas5Trasport />,
		<Pas6Trasport />,
		<Pas7Trasport />,
		<Pas8Trasport />,
		<Pas9Trasport />,
		<Pas10Trasport />,
		<Pas11Trasport />,
		<Pas12Trasport />,
	]);

	const submitHandler = (data: object) => {
		console.log(data);
	};
	return (
		<div className="flex flex-col md:px-[70px] ">
			<form className="relative m-[70px] rounded-2xl bg-alb-site px-[60px] pt-8" onSubmit={handleSubmit(submitHandler)}>
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

export default FormularSofer;
