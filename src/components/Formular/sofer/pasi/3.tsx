import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import Romania from "../../../../public/imagini/formular/sofer/negru/romania.svg";
import RomaniaAlb from "../../../../public/imagini/formular/sofer/alb/romania.svg";
import Italia from "../../../../public/imagini/formular/sofer/negru/italia.svg";
import ItaliaAlb from "../../../../public/imagini/formular/sofer/alb/italia.svg";

import International from "../../../../public/imagini/formular/sofer/negru/international.svg";
import InternationalAlb from "../../../../public/imagini/formular/sofer/alb/international.svg";

const Pas3Trasport = ({ setValue }: any) => {
	const [selected, setSelected] = useState(0);
	return (
		<FormWrapper intrebare="In ce regim va doriti sa lucrati?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("regim", "tur-retur");
						setSelected(1);
					}}
					type="button"
					className={`${
						selected == 1 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center  justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
				>
					{selected == 1 ? <RomaniaAlb className="h-36 w-56 " /> : <Romania className="h-36 w-36" />}

					<span>Tur-retur</span>
				</button>
				<button
					className={`${
						selected == 2 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
					onClick={() => {
						setValue("regim", "italia");
						setSelected(2);
					}}
					type="button"
				>
					{selected == 2 ? <ItaliaAlb className="h-36 w-56 " /> : <Italia className="h-36 w-36" />}

					<span>National Italia</span>
				</button>
				<button
					className={`${
						selected == 3 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center justify-center  gap-9 rounded-2xl  px-[70px] py-16  shadow-lg drop-shadow-xl`}
					onClick={() => {
						setValue("regim", "international");
						setSelected(3);
					}}
					type="button"
				>
					{selected == 3 ? <InternationalAlb className="h-36 w-56 " /> : <International className="h-36 w-36" />}

					<span>International</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas3Trasport;
