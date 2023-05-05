import React from "react";
import { Container } from "./styles";
import { CURRENT_PROJECTS } from "../../../../constants";
import { ProjectItem } from "./components";

const Projects = () => {
	return (
		<Container>
			<h1>Projetos</h1>
			{CURRENT_PROJECTS.map((item, index) => (<ProjectItem currentProject={item} leftImage={index % 2 === 0} key={index} />))}
		</Container>
	);
};

export default Projects;