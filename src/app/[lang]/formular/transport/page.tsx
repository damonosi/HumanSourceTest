"use client";

import NavigatieFormular from "@/components/Formular/NavigatieFormular";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";

import Pas1Trasport from "@/components/Formular/sofer/pasi/1";
import Pas2Trasport from "@/components/Formular/sofer/pasi/2";
import Pas3Trasport from "@/components/Formular/sofer/pasi/3";
import Pas4Trasport from "@/components/Formular/sofer/pasi/4";
import Pas5Trasport from "@/components/Formular/sofer/pasi/5";
import Pas6Trasport from "@/components/Formular/sofer/pasi/6";
import Pas7Trasport from "@/components/Formular/sofer/pasi/7";
import Pas8Trasport from "@/components/Formular/sofer/pasi/8";
import Pas9Trasport from "@/components/Formular/sofer/pasi/9";

import { useForm } from "react-hook-form";

const FormularSofer = () => {
	const {
		register,
		watch,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			tipRemorca: "",
			vechime: "",
			regim: "",
			tahograf: "",
			echipaj: "",
			turaNoapte: "",
			lbItaliana: "",
			ultimulSalariu: "",
		},
	});
	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm([
		<Pas1Trasport setValue={setValue} />,
		<Pas2Trasport register={register} />,
		<Pas3Trasport setValue={setValue} />,
		<Pas4Trasport setValue={setValue} />,
		<Pas5Trasport setValue={setValue} />,
		<Pas6Trasport setValue={setValue} />,
		<Pas7Trasport setValue={setValue} />,
		<Pas8Trasport register={register} />,
		<Pas9Trasport register={register} />,
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
