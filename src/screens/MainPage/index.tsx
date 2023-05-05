import React, { useRef } from "react";
import { NamePresentation, Projects, Contact } from "./components";
import { Container } from "./styles";
import CvDownload from "./components/CvDownload";

const MainPage = () => {

	return (
		<Container >
			<NamePresentation />
			<Projects />
			<CvDownload />
			<Contact />
		</Container>
	);
};

export default MainPage;