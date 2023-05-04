import FormWrapper from "../../FormWrapper";
import { useState } from "react";

import Deloc from "../../../../public/imagini/formular/sofer/negru/deloc.svg";
import DelocAlb from "../../../../public/imagini/formular/sofer/alb/deloc.svg";
import Mediu from "../../../../public/imagini/formular/sofer/negru/mediu.svg";
import MediuAlb from "../../../../public/imagini/formular/sofer/alb/mediu.svg";

import Avansat from "../../../../public/imagini/formular/sofer/negru/avansat.svg";
import AvansatAlb from "../../../../public/imagini/formular/sofer/alb/avansat.svg";

const Pas7Trasport = ({ setValue }: any) => {
	const [selected, setSelected] = useState(0);
	return (
		<FormWrapper intrebare="Vorbesti limba italiana?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("lbItaliana", "deloc");
						setSelected(1);
					}}
					type="button"
					className={`${
						selected == 1 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center  justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
				>
					{selected == 1 ? <DelocAlb className="h-36 w-56 " /> : <Deloc className="h-36 w-36" />}

					<span>Nu, deloc</span>
				</button>
				<button
					className={`${
						selected == 2 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
					onClick={() => {
						setValue("lbItaliana", "mediu");
						setSelected(2);
					}}
					type="button"
				>
					{selected == 2 ? <MediuAlb className="h-36 w-56 " /> : <Mediu className="h-36 w-36" />}

					<span>Da, ma descurc</span>
				</button>
				<button
					className={`${
						selected == 3 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center justify-center  gap-9 rounded-2xl  px-[70px] py-16  shadow-lg drop-shadow-xl`}
					onClick={() => {
						setValue("lbItaliana", "avansat");
						setSelected(3);
					}}
					type="button"
				>
					{selected == 3 ? <AvansatAlb className="h-36 w-56 " /> : <Avansat className="h-36 w-36" />}

					<span>Vorbitor avansat</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas7Trasport;
