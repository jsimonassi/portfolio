import React, { useEffect } from "react";
import { NamePresentation, Projects, Contact } from "./components";
import { Container } from "./styles";
import CvDownload from "./components/CvDownload";
import { Header } from "../../components";
import Experience from "./components/Experience";
import { useParams } from "react-router-dom";

const MainPage = () => {
	const scrollRef = React.createRef<HTMLDivElement>();
	const { option } = useParams();

	const namePresentationRef = React.createRef<HTMLDivElement>();
	const experienceRef = React.createRef<HTMLDivElement>();
	const projectsRef = React.createRef<HTMLDivElement>();
	const cvRef = React.createRef<HTMLDivElement>();
	const contactRef = React.createRef<HTMLDivElement>();

	useEffect(() => {
		if (option) {
			setTimeout(() => {
				onHeaderOptionClick(option);
			},1000);
		}
	}, []);


	const onHeaderOptionClick = (option: string) => {
		console.log(option);
		switch (option) {
		case "home":
			namePresentationRef.current?.scrollIntoView({ behavior: "smooth" });
			break;
		case "experience":
			experienceRef.current?.scrollIntoView({ behavior: "smooth" });
			break;
		case "projects":
			projectsRef.current?.scrollIntoView({ behavior: "smooth" });
			break;
		case "resume":
			cvRef.current?.scrollIntoView({ behavior: "smooth" });
			break;
		case "contact":
			contactRef.current?.scrollIntoView({ behavior: "smooth" });
			break;
		default:
			break;
		}
	};

	return (
		<Container >
			<Header scrollRef={scrollRef} onOptionClick={onHeaderOptionClick} />
			<div ref={namePresentationRef}><NamePresentation onGoProjectsClicked={() => onHeaderOptionClick("projects")} /></div>
			<div ref={experienceRef}><Experience /></div>
			<div ref={projectsRef}><Projects /></div>
			<div ref={cvRef}><CvDownload /></div>
			<div ref={contactRef}><Contact /></div>
		</Container>
	);
};

export default MainPage;