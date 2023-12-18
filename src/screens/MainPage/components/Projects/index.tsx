import React, { useMemo } from "react";
import { Container, ProjectsContainer } from "./styles";
import { EN_CURRENT_PROJECTS, PT_CURRENT_PROJECTS } from "../../../../constants";
import { CardProjectItem } from "./components";
import { DevProject } from "../../../../types/DevProject";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useLanguage } from "../../../../contexts/language";

const Projects = () => {
	const navigate = useNavigate();
	const { getString, currentLanguage } = useLanguage();
	const currentProjectsArray = useMemo(() => {
		if(currentLanguage === "pt") {
			return PT_CURRENT_PROJECTS;
		}
		return EN_CURRENT_PROJECTS;
	}, [currentLanguage]);

	const navigateToProjectView = (selectedProject: DevProject) => {
		const projectIndex = currentProjectsArray.indexOf(selectedProject);
		navigate("/" + ROUTES.PROJECT_VIEW + "/" + projectIndex, { replace: true });
	};


	return (
		<Container>
			<h1>{getString("projects")}</h1>
			<ProjectsContainer>
				{currentProjectsArray.map((item, index) => (<CardProjectItem key={index} currentProject={item} onClickProject={() => navigateToProjectView(item)}/>))}
			</ProjectsContainer>
			<span>{getString("otherProjects")} <a href="https://github.com/jsimonassi">github.com/jsimonassi</a></span>
		</Container>
	);
};

export default Projects;