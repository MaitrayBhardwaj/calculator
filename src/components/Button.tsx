import { MouseEventHandler } from "react";

interface ButtonProps {
	label: string;
	type: string;
	onClick: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
	const { label, type, onClick } = props
	return (
		<button className={`${type} calc-btn`} onClick={onClick}>
			{label}
		</button>
	)
}

export default Button