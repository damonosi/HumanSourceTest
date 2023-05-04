import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

interface IWrapperProps {
	intrebare: string;
	children: ReactNode;
}

const FormWrapper = ({ intrebare, children }: IWrapperProps) => {
	return (
		<div className=" flex flex-col ">
			<Typography className=" " variant="h3">
				{intrebare}
			</Typography>
			<div className="flex flex-col justify-center py-20">{children}</div>
		</div>
	);
};

export default FormWrapper;
