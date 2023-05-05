import React from "react";
import { Container } from "./styles";
import { CURRENT_PROJECTS } from "../../../../constants";
import { ProjectItem } from "./components";

const Projects = () => {
	return (
		<Container>
			<h1>Projetos</h1>
			{CURRENT_PROJECTS.map((item, index) => (<ProjectItem currentProject={item} leftImage={index % 2 === 0} key={index} />))}
			<span>Demais projetos pessoais estão disponíveis em: <a href="https://github.com/jsimonassi">github.com/jsimonassi</a></span>
		</Container>
	);
};

export default Projects;