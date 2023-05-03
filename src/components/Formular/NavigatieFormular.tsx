import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";

interface IButtonProps {
	currentStepIndex: number;
	steps: ReactElement[];
	isFirstStep: boolean;
	isLastStep: boolean;
	back: () => void;
	next: () => void;
}

const NavigatieFormular = ({ currentStepIndex, steps, isFirstStep, isLastStep, back, next }: IButtonProps) => {
	return (
		<div className="relative flex w-full items-center justify-between  py-12">
			{!isFirstStep && (
				<button
					className="absolute left-0 my-auto flex w-fit items-center justify-center gap-3 rounded-2xl px-5 py-8 text-gri-brand hover:bg-gri-brand hover:text-alb-site"
					onClick={back}
					type="button"
				>
					<ArrowSmallLeftIcon strokeWidth={2} className="h-5 w-5" />
					<span>Innapoi</span>
				</button>
			)}
			<div className="mx-auto">
				{currentStepIndex + 1} / {steps.length}
			</div>

			{!isLastStep ? (
				<button
					className="absolute right-0 flex  w-fit items-center justify-center gap-3 rounded-2xl px-5 py-8 text-gri-brand hover:bg-gri-brand hover:text-alb-site"
					onClick={next}
					type="button"
				>
					<span>CONTINUA</span> <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</button>
			) : (
				<button
					className="absolute right-0 flex  w-fit items-center justify-center gap-3 rounded-2xl px-5 py-8 text-gri-brand hover:bg-gri-brand hover:text-alb-site"
					type="submit"
				>
					<span>Cauta</span> <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</button>
			)}
		</div>
	);
};

export default NavigatieFormular;
