import { useState } from "react";

interface ICardProps {
	text: string;
	className?: string;
	svg: JSX.Element;
	onClick: () => void;
}

const CardRemorca = ({ svg, text, onClick, className }: ICardProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`flex max-w-[272px] flex-col items-center justify-center rounded-2xl  bg-alb-site py-16 px-5 drop-shadow-xl active:bg-gri-brand ${className} `}
		>
			{svg}
			<span>{text}</span>
		</button>
	);
};

export default CardRemorca;
