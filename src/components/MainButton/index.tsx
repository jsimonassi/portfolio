import React from "react";
import { Container } from "./styles";

interface MainButtonProps {
    text: string;
    onClick: () => void;
}

const MainButton = (props: MainButtonProps) => {
	return (
		<Container onClick={props.onClick}>
			{props.text}
		</Container>
	);
};

export default MainButton;