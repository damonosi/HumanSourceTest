import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";


import { ReactElement, useEffect } from "react";

interface IButtonProps {
	currentStepIndex: number;
	steps: ReactElement[];
	isFirstStep: boolean;
	isLastStep: boolean;
	disabled: boolean;
	back: () => void;
	next: () => void;

}

const NavigatieFormular = ({
	currentStepIndex,
	steps,
	isFirstStep,
	isLastStep,
	back,
	next,
	disabled,
}: IButtonProps) => {
	return (
		<div className="relative flex w-full items-center justify-between px-2 py-12  md:px-16">
			{!isFirstStep && (
				<button
					className="absolute left-0 my-auto flex w-fit items-center justify-center gap-3 rounded-2xl py-4 text-gri-brand hover:bg-gri-brand hover:text-alb-site md:px-5"
					onClick={back}
					type="button"
				>
					<ArrowSmallLeftIcon strokeWidth={2} className="h-5 w-5" />
					<span>Inapoi</span>
				</button>
			)}
			<div className="mx-auto text-base md:text-xl">
				{currentStepIndex + 1} / {steps.length}
			</div>

			{!isLastStep ? (
				<button
					className={`absolute right-0 flex  w-fit items-center justify-center gap-3 rounded-2xl py-4 text-gri-brand md:px-5     ${
						disabled ? "cursor-not-allowed bg-gri-bg" : "bg-alb-site hover:bg-gri-brand hover:text-alb-site"
					}`}
					onClick={next}
					type="button"
					disabled={disabled}
				>
					<span>Continua</span> <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</button>
			) : (
				<button
					className="absolute right-0 flex  w-fit items-center justify-center gap-3 rounded-2xl px-5 py-4 text-gri-brand hover:bg-gri-brand hover:text-alb-site"
					type="submit"
				>
					<span>Cauta</span> <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</button>
			)}
		</div>
	);
};

export default NavigatieFormular;
