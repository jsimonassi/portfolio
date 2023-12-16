import React from "react";
import { NamePresentation, Projects, Contact } from "./components";
import { Container } from "./styles";
import CvDownload from "./components/CvDownload";
import { Header } from "../../components";
import Experience from "./components/Experience";

const MainPage = () => {
	const scrollRef = React.createRef<HTMLDivElement>();

	return (
		<Container >
			<Header scrollRef={scrollRef} onOptionClick={() => null} />
			<NamePresentation />
			<Experience />
			<Projects />
			<CvDownload />
			<Contact />
		</Container>
	);
};

export default MainPage;