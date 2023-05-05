"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
import { getLocalePartsFrom, locales } from "i18n";
import Link from "next/link";
import IcoConstructii from "@/public/imagini/formular/selectDomeniu/negru/constructii.svg";
import IcoConstructiiAlb from "@/public/imagini/formular/selectDomeniu/alb/constructii.svg";
import IcoTransport from "@/public/imagini/formular/selectDomeniu/negru/transport.svg";
import IcoTransportAlb from "@/public/imagini/formular/selectDomeniu/alb/transport.svg";
import IcoMedical from "@/public/imagini/formular/selectDomeniu/negru/medical.svg";
import IcoMedicalAlb from "@/public/imagini/formular/selectDomeniu/alb/medical.svg";

import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}
const Formular = ({ params }: { params: { lang: string; country: string } }) => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const eventul = e.currentTarget.childNodes[1].textContent?.toString();
		console.log(eventul);
		eventul && setSelectedCategory(eventul);
	};
	const clasaCard =
		"flex max-w-[272px] flex-col items-center gap-2 justify-center rounded-2xl bg-alb-site px-2 py-8 w-1/3  md:p-16 shadow-2xl";
	const clasaIconite = "h-9 w-8 md:h-36 md:w-28";

	return (
		<div className="px-5 pb-[60px] md:px-[70px]">
			<Breadcrumbs>
				<Link className="text-gri-brand" href={`${params.lang}/`}>
					Home
				</Link>
				<Link className="text-red-600" href={`${params.lang}/formular`}>
					Formular
				</Link>
			</Breadcrumbs>
			<div
				className="flex flex-col   gap-9 rounded-2xl bg-alb-site py-9 px-3 text-start md:px-16"
				id="container-alege-domeniu-titlu"
			>
				<Typography className="text-start text-xl font-bold md:text-3xl" variant="h3">
					In ce domeniu vrei sa lucrezi?
				</Typography>
				<div className="flex w-full items-center justify-center gap-3 md:gap-8" id="container-carduri-alege-domeniu">
					<button
						onClick={handleClick}
						className={` ${selectedCategory === "Constructii" && "bg-gri-brand"} ${clasaCard}`}
					>
						{selectedCategory === "Constructii" ? (
							<IcoConstructiiAlb className={clasaIconite} />
						) : (
							<IcoConstructii className={clasaIconite} />
						)}

						<span className={` ${selectedCategory === "Constructii" && "text-alb-site"} text-sm md:text-2xl `}>
							Constructii
						</span>
					</button>
					<button
						onClick={handleClick}
						className={` ${selectedCategory === "Transport" && "bg-gri-brand"} ${clasaCard} `}
					>
						{selectedCategory === "Transport" ? (
							<IcoTransportAlb className={clasaIconite} />
						) : (
							<IcoTransport className={clasaIconite} />
						)}

						<span className={` ${selectedCategory === "Transport" && "text-alb-site"} text-sm md:text-2xl `}>
							Transport
						</span>
					</button>
					<button onClick={handleClick} className={` ${selectedCategory === "Medical" && "bg-gri-brand"} ${clasaCard}`}>
						{selectedCategory === "Medical" ? (
							<IcoMedicalAlb className={clasaIconite} />
						) : (
							<IcoMedical className={clasaIconite} />
						)}
						<span className={` ${selectedCategory === "Medical" && "text-alb-site"} text-sm md:text-2xl `}>
							Medical
						</span>
					</button>
				</div>
				<div className="flex w-full items-center justify-center">
					<Link
						href={`${params.lang}/formular/${selectedCategory.toLowerCase()}`}
						className="flex w-fit items-center justify-center gap-3  rounded-2xl px-5 py-8 text-gri-brand hover:bg-gri-brand hover:text-alb-site"
					>
						<span>CONTINUA</span> <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Formular;
