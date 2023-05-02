import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

interface IWrapperProps {
	intrebare: string;
	children: ReactNode;
}

const FormWrapper = ({ intrebare, children }: IWrapperProps) => {
	return (
		<div className=" flex flex-col ">
			<Typography className="mb-16 ml-16 " variant="h3">
				{intrebare}
			</Typography>
			<div>{children}</div>
		</div>
	);
};

export default FormWrapper;
