import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import Singur from "../../../../public/imagini/formular/sofer/negru/singur.svg";
import SingurAlb from "../../../../public/imagini/formular/sofer/alb/singur.svg";
import Echipaj from "../../../../public/imagini/formular/sofer/negru/echipaj.svg";
import EchipajAlb from "../../../../public/imagini/formular/sofer/alb/echipaj.svg";

const Pas5Trasport = ({ setValue }: any) => {
	const [selected, setSelected] = useState(0);
	return (
		<FormWrapper intrebare="Lucrati singur sau in echipaj?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("echipaj", "singur");
						setSelected(1);
					}}
					type="button"
					className={`${
						selected == 1 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center  justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
				>
					{selected == 1 ? <SingurAlb className="h-36 w-56 " /> : <Singur className="h-36 w-36" />}

					<span>Singur</span>
				</button>
				<button
					className={`${
						selected == 2 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
					onClick={() => {
						setValue("echipaj", "echipaj");
						setSelected(2);
					}}
					type="button"
				>
					{selected == 2 ? <EchipajAlb className="h-36 w-56 " /> : <Echipaj className="h-36 w-36" />}

					<span>Echipaj</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas5Trasport;
