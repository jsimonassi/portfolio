import React from "react";
import { Container, ProjectsContainer } from "./styles";
import { CURRENT_PROJECTS } from "../../../../constants";
import { CardProjectItem } from "./components";
import { DevProject } from "../../../../types/DevProject";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

const Projects = () => {
	const navigate = useNavigate();

	const navigateToProjectView = (selectedProject: DevProject) => {
		const projectIndex = CURRENT_PROJECTS.indexOf(selectedProject);
		navigate("/" + ROUTES.PROJECT_VIEW + "/" + projectIndex, { replace: true });
	};


	return (
		<Container>
			<h1>Projetos</h1>
			<ProjectsContainer>
				{CURRENT_PROJECTS.map((item, index) => (<CardProjectItem key={index} currentProject={item} onClickProject={() => navigateToProjectView(item)}/>))}
			</ProjectsContainer>
			<span>Demais projetos pessoais estão disponíveis em: <a href="https://github.com/jsimonassi">github.com/jsimonassi</a></span>
		</Container>
	);
};

export default Projects;