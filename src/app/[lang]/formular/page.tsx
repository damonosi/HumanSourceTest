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
import { useRouter } from "next/navigation";
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
	const router = useRouter();
	const handleNextStep = () => router.push(`${params.lang}/formular/${selectedCategory.toLowerCase()}`);

	return (
		<div className="pb-[60px] md:px-[70px]">
			<Breadcrumbs>
				<Link className="text-gri-brand" href={`${params.lang}/`}>
					Home
				</Link>
				<Link className="text-red-600" href={`${params.lang}/formular`}>
					Formular
				</Link>
			</Breadcrumbs>
			<div
				className="flex flex-col items-center justify-center gap-9 rounded-2xl bg-alb-site py-9 px-16"
				id="container-alege-domeniu"
			>
				<Typography variant="h3">In ce domeniu vrei sa lucrezi?</Typography>
				<div className="flex items-center justify-center gap-8" id="container-carduri-alege-domeniu">
					<button
						onClick={handleClick}
						className={` ${
							selectedCategory === "Constructii" && "bg-gri-brand"
						}  flex max-w-[272px] flex-col items-center justify-center rounded-2xl bg-alb-site p-16 shadow-2xl`}
					>
						{selectedCategory === "Constructii" ? (
							<IcoConstructiiAlb className="h-36 w-28 " />
						) : (
							<IcoConstructii className="h-36 w-28 " />
						)}

						<span className={` ${selectedCategory === "Constructii" && "text-alb-site"}`}>Constructii</span>
					</button>
					<button
						onClick={handleClick}
						className={` ${
							selectedCategory === "Transport" && "bg-gri-brand"
						} flex max-w-[272px] flex-col items-center justify-center rounded-2xl bg-alb-site  p-16 shadow-2xl`}
					>
						{selectedCategory === "Transport" ? (
							<IcoTransportAlb className="h-36 w-28 " />
						) : (
							<IcoTransport className="h-36 w-28 " />
						)}

						<span className={` ${selectedCategory === "Transport" && "text-alb-site"}`}>Transport</span>
					</button>
					<button
						onClick={handleClick}
						className={` ${
							selectedCategory === "Medical" && "bg-gri-brand"
						} flex max-w-[272px] flex-col items-center justify-center rounded-2xl bg-alb-site  p-16 shadow-2xl`}
					>
						{selectedCategory === "Medical" ? (
							<IcoMedicalAlb className="h-36 w-28 " />
						) : (
							<IcoMedical className="h-36 w-28 " />
						)}
						<span className={` ${selectedCategory === "Medical" && "text-alb-site"}`}>Medical</span>
					</button>
				</div>
				<button
					className="flex w-fit items-center justify-center gap-3 rounded-2xl px-5 py-8 text-gri-brand hover:bg-gri-brand hover:text-alb-site"
					onClick={handleNextStep}
				>
					<span>CONTINUA</span> <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</button>
			</div>
		</div>
	);
};

export default Formular;
