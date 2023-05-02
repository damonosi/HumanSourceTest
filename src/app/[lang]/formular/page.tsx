"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
import { getLocalePartsFrom, locales } from "i18n";
import Link from "next/link";
import IcoConstructii from "@/public/imagini/formular/selectDomeniu/constructii.svg";
import IcoTransport from "@/public/imagini/formular/selectDomeniu/transport.svg";
import IcoMedical from "@/public/imagini/formular/selectDomeniu/medical.svg";
import { useRouter } from "next/navigation";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}
const Formular = ({ params }: { params: { lang: string; country: string } }) => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const eventul = e.currentTarget.childNodes[1].textContent?.toString();
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
			<div className="flex flex-col gap-9 rounded-2xl bg-alb-site py-9 px-16" id="container-alege-domeniu">
				<Typography variant="h3">In ce domeniu vrei sa lucrezi?</Typography>
				<div className="flex items-center justify-center gap-8" id="container-carduri-alege-domeniu">
					<button
						onClick={handleClick}
						className="flex max-w-[272px] flex-col items-center justify-center rounded-2xl bg-alb-site p-16 shadow-2xl"
					>
						<IcoConstructii className="h-36 w-28 " />
						<span>Constructii</span>
					</button>
					<button
						onClick={handleClick}
						className="flex max-w-[272px] flex-col items-center justify-center rounded-2xl bg-alb-site  p-16 shadow-2xl"
					>
						<IcoTransport className="h-36 w-28 " />
						<span>Transport</span>
					</button>
					<button
						onClick={handleClick}
						className="flex max-w-[272px] flex-col items-center justify-center rounded-2xl bg-alb-site  p-16 shadow-2xl"
					>
						<IcoMedical className="h-36 w-28 " />
						<span>Medical</span>
					</button>
				</div>
				<button onClick={handleNextStep}>CONTINUA</button>
			</div>
		</div>
	);
};

export default Formular;
