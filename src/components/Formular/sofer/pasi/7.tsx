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
	const clasaCard =
		"flex  w-1/3 flex-col items-center  justify-center rounded-2xl bg-alb-site px-5 py-8 drop-shadow-xl active:bg-gri-brand   lg:gap-9 lg:py-16 lg:px-6 max-w-[272px]";
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
					} ${clasaCard}`}
				>
					{selected == 1 ? <DelocAlb className="w-full" /> : <Deloc className="w-full" />}

					<span>Nu, deloc</span>
				</button>
				<button
					className={`${
						selected == 2 && "bg-gri-brand text-alb-site"
					} ${clasaCard}`}
					onClick={() => {
						setValue("lbItaliana", "mediu");
						setSelected(2);
					}}
					type="button"
				>
					{selected == 2 ? <MediuAlb className="w-full" /> : <Mediu className="w-full" />}

					<span>Da, ma descurc</span>
				</button>
				<button
					className={`${
						selected == 3 && "bg-gri-brand text-alb-site"
					} ${clasaCard}`}
					onClick={() => {
						setValue("lbItaliana", "avansat");
						setSelected(3);
					}}
					type="button"
				>
					{selected == 3 ? <AvansatAlb className="w-full" /> : <Avansat className="w-full" />}

					<span>Vorbitor avansat</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas7Trasport;
