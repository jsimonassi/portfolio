import React from "react";
import { Container } from "./styles";
import { DevProject } from "../../../../../../types/DevProject";

interface CardProjectItemProps {
    currentProject: DevProject;
	onClickProject: () => void;
}

const CardProjectItem = (props: CardProjectItemProps) => {
	return (
		<Container onClick={props.onClickProject}>
			<img src={props.currentProject.logo} alt="project logo image"/>
			<div>
				<h1>{props.currentProject.title}</h1>
				<p>{props.currentProject.smallDescription}</p>
			</div>
		</Container>
	);
};

export default CardProjectItem;