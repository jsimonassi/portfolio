import React from "react";
import { Chrono } from "react-chrono";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import { PT_CURRENT_EXPERIENCES } from "../../../../constants/currentExperiences";
import { ExperienceItem } from "./components";


const Experience = () => {

	const currentTheme = useTheme();

	return (
		<Container>
			<h1>Experiência</h1>
			<Chrono 
				items={PT_CURRENT_EXPERIENCES.map((item) => {
					return {
						title: item.title,
						timelineContent: <ExperienceItem currentExperience={item} />
					};
				})}
				mode="VERTICAL_ALTERNATING"
				mediaSettings={{display: "none"}}
				cardHeight={"auto"}
				hideControls
				theme={{
					primary: currentTheme.palette.accentColor,
					secondary: currentTheme.palette.textAndIcons1,
					cardBgColor: currentTheme.palette.textAndIcons1,
					titleColor: currentTheme.palette.accentColor,
					titleColorActive: currentTheme.palette.surface3,
				}}
			/>			
		</Container>
	);
};

export default Experience;