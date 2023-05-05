"use client";

import NavigatieFormular from "@/components/Formular/NavigatieFormular";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";
import { useState } from "react";
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
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { getLocalePartsFrom, locales } from "i18n";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}

const FormularSofer = ({ params }: { params: { lang: string; country: string } }) => {
	const {
		register,
		watch,
		handleSubmit,
		getValues,
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
	const [disabled, setDisabled] = useState(true);

	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm([
		<Pas1Trasport setValue={setValue} setDisabled={setDisabled} />,
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
		<div className="flex flex-col px-5 pb-9 md:px-[70px] ">
			<Breadcrumbs>
				<Link className="text-gri-brand" href={`${params.lang}/`}>
					Home
				</Link>
				<Link className="text-gri-brand" href={`${params.lang}/formular`}>
					Formular
				</Link>
				<Link className="text-red-600" href={`${params.lang}/formular`}>
					Transport
				</Link>
			</Breadcrumbs>
			<form className="relative  rounded-2xl bg-alb-site px-5 pt-8 " onSubmit={handleSubmit(submitHandler)}>
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

export default FormularSofer;
