import React from "react";
import { Experience } from "../../../../../../types/Experience";
import { CardHeaderStyled, CompanyImage, Container } from "./styles";

interface ExperienceItemProps {
    currentExperience: Experience;
}


const ExperienceItem = (props: ExperienceItemProps) => {

	return (
		<Container>
			<CardHeaderStyled>
				<CompanyImage src={props.currentExperience.companyImage} alt="Company image" />
				<div>
					<h2>{props.currentExperience.cardTitle}</h2>
					<h3>{props.currentExperience.cardSubtitle}</h3>
					<p>{props.currentExperience.cardDetailedText}</p>
					<br/>
					{props.currentExperience.techs.length > 0 && <h3>Tecnologias:</h3>}
					{props.currentExperience.techs.map((technology, key) => <p key={key}>{technology}</p>)}
				</div>
			</CardHeaderStyled>
		</Container>
	);

};

export default ExperienceItem;