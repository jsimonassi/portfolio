import React from "react";
import { Chrono } from "react-chrono";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import { EN_CURRENT_EXPERIENCES, PT_CURRENT_EXPERIENCES } from "../../../../constants/currentExperiences";
import { ExperienceItem } from "./components";
import { useLanguage } from "../../../../contexts/language";


const Experience = () => {

	const currentTheme = useTheme();
	const { getString, currentLanguage } = useLanguage();

	return (
		<Container>
			<h1>{getString("experience")}</h1>
			<div style={{ display: currentLanguage === "pt" ? "block" : "none" }}>
				<Chrono
					items={PT_CURRENT_EXPERIENCES.map((item) => {
						return {
							title: item.title,
							timelineContent: <ExperienceItem currentExperience={item} />
						};
					})}
					mode="VERTICAL_ALTERNATING"
					mediaSettings={{ display: "none" }}
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
			</div>
			<div style={{ display: currentLanguage === "en" ? "block" : "none" }}>
				<Chrono
					items={EN_CURRENT_EXPERIENCES.map((item) => {
						return {
							title: item.title,
							timelineContent: <ExperienceItem currentExperience={item} />
						};
					})}
					mode="VERTICAL_ALTERNATING"
					mediaSettings={{ display: "none" }}
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
			</div>
		</Container>
	);
};

export default Experience;