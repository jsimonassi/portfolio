import React, { createRef, useEffect, useState } from "react";
import { Container, Content, ImgContent, ImgCover, PreviewContainer } from "./styles";
import { Header } from "../../components";
import { useParams } from "react-router-dom";
import { DevProject } from "../../types/DevProject";
import { CURRENT_PROJECTS } from "../../constants";
import mobileCover from "../../assets/images/mobileCover.png";


const ProjectViewPage = () => {
	const scrollRef = createRef<HTMLDivElement>();
	const { id } = useParams();
	const currentProject: DevProject = CURRENT_PROJECTS[id ?? 0];
	const [currentImageIndex, setCurrentImage] = useState(0);

	const onHeaderOptionClick = () => {
		//TODO: Back to main page
	};

	useEffect(() => {
		const intervalRef = setInterval(() => {
			setCurrentImage((currentImageIndex) => {
				if (currentImageIndex < currentProject.images.length - 1) {
					return currentImageIndex + 1;
				} else {
					return 0;
				}
			});
		}, 3000);

		return () => {
			clearInterval(intervalRef);
		};
	}, []);

	return (
		<Container>
			<Header scrollRef={scrollRef} onOptionClick={onHeaderOptionClick} />
			<h1>Projetos</h1>
			<h2>{currentProject.title}</h2>
			<PreviewContainer>
				<ImgContent src={currentProject.images[currentImageIndex]} alt="Mobile Content" />
				<ImgCover src={mobileCover} alt="Mobile cover" />
			</PreviewContainer>
			<Content>
				<p>{currentProject.description}</p>
				<br />
				<p>Principais ferramentas e tecnologias:</p>
				<br />
				{currentProject?.tools?.map((tool, index) => (<h5 key={index}>- {tool}</h5>))}
				<br />
                
			</Content>
		</Container>
	);

};

export default ProjectViewPage;