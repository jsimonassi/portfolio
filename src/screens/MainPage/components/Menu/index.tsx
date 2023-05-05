import React from "react";
import { Container } from "./styles";

const MENU_OPTIONS = ["Sobre", "Projetos", "Contato", "Currículo"];

const Menu = () => {

	return (
		<Container >
			{MENU_OPTIONS.map((option, index) => (<p key={index}>{option}</p>) )}
		</Container>
	);
};

export default Menu;