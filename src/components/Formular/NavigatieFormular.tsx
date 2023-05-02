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
		<div className="relative flex w-full justify-between  py-12">
			{!isFirstStep && (
				<button type="button" className="absolute left-0 " onClick={back}>
					Innapoi
				</button>
			)}
			<div className="mx-auto">
				{currentStepIndex + 1} / {steps.length}
			</div>

			{!isLastStep ? (
				<button className="absolute right-0 " onClick={next} type="button">
					Continua
				</button>
			) : (
				<button className="absolute right-0 " type="submit">
					Trimite
				</button>
			)}
		</div>
	);
};

export default NavigatieFormular;
