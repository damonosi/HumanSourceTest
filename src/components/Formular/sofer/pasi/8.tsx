import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas8Trasport = ({ register }: any) => {
	return (
		<FormWrapper intrebare="Ne poti spune care a fost ultimul tau salariu??">
			<Input
				variant="outlined"
				type="text"
				{...register("ultimulSalariu", { required: true })}
				id="ultimulSalariu"
				label="Raspunsul Dumneavoastra"
			/>
		</FormWrapper>
	);
};

export default Pas8Trasport;
