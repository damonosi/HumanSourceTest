import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import Da from "../../../../public/imagini/formular/sofer/negru/da.svg";
import DaAlb from "../../../../public/imagini/formular/sofer/alb/da.svg";
import Nu from "../../../../public/imagini/formular/sofer/negru/nu.svg";
import NuAlb from "../../../../public/imagini/formular/sofer/alb/nu.svg";
const Pas6Trasport = ({ setValue }: any) => {
	const [selected, setSelected] = useState(0);
	return (
		<FormWrapper intrebare="Sunteti dispus sa lucrati pe tura de noapte?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("turaNoapte", "da");
						setSelected(1);
					}}
					type="button"
					className={`${
						selected == 1 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center  justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
				>
					{selected == 1 ? <DaAlb className="h-36 w-56 " /> : <Da className="h-36 w-36" />}

					<span>Da</span>
				</button>
				<button
					className={`${
						selected == 2 && "bg-gri-brand text-alb-site"
					} flex w-1/3 flex-col items-center justify-center gap-9 rounded-2xl py-16 px-[70px] shadow-lg  drop-shadow-xl`}
					onClick={() => {
						setValue("turaNoapte", "nu");
						setSelected(2);
					}}
					type="button"
				>
					{selected == 2 ? <NuAlb className="h-36 w-56 " /> : <Nu className="h-36 w-36" />}

					<span>Nu</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas6Trasport;
