import React from "react";
import { Menu, NamePresentation, Projects, Contact } from "./components";
import { Container } from "./styles";
import CvDownload from "./components/CvDownload";

const MainPage = () => {
	return (
		<Container >
			<NamePresentation />
			<Menu />
			<Projects />
			<Contact />
			<CvDownload />
		</Container>
	);
};

export default MainPage;