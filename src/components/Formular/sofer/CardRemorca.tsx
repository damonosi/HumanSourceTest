"use client";

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
			className={`flex h-40 w-28 flex-col items-center  justify-center rounded-2xl bg-alb-site px-2 py-8 drop-shadow-xl active:bg-gri-brand  md:h-80 md:w-72 md:gap-9 md:py-16 md:px-6 ${className} `}
		>
			<span>{svg}</span>
			<span>{text}</span>
		</button>
	);
};

export default CardRemorca;
