import { Typography } from "@material-tailwind/react";

import { ReactNode } from "react";

interface IWrapperProps {
	intrebare: string;
	children: ReactNode;
}

const FormWrapper = ({ intrebare, children }: IWrapperProps) => {
	return (
		<div className=" flex flex-col items-center justify-center">
			<Typography className="text-xl font-bold md:text-3xl " variant="h3">
				{intrebare}
			</Typography>
			<div className="flex min-h-[400px] flex-col justify-center py-12">{children}</div>
		</div>
	);
};

export default FormWrapper;
