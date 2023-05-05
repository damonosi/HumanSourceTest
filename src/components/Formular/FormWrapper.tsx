import { Typography } from "@material-tailwind/react";
import { getLocalePartsFrom, locales } from "i18n";
import Link from "next/link";
import { ReactNode } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

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
			<div className="flex flex-col justify-center py-20">{children}</div>
		</div>
	);
};

export default FormWrapper;
