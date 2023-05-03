import { Checkbox } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas2Trasport = () => {
	const var1 = undefined;
	return (
		<FormWrapper intrebare="Ai mai lucrat ca sofer profesionist C+E?">
			<Checkbox inputRef={var1} name="var1" label="Nu, sunt debutant /sub 1 ani  experiență" />
			<Checkbox name="var2" label="Am 1-3 ani experineță" />
			<Checkbox name="var3" label="Am 4-5 ani experiență" />
			<Checkbox name="var4" label="Am 6-7 ani experiență" />
			<Checkbox name="var5" label="Am 8+ ani experiență" />
		</FormWrapper>
	);
};

export default Pas2Trasport;
