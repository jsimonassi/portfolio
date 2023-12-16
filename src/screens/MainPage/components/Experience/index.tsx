import React from "react";
import { Chrono } from "react-chrono";
import { useTheme } from "styled-components";
import { Container } from "./styles";


const Experience = () => {

	const currentTheme = useTheme();

	const items = [
		{
			title: "Out/2019 - Jul/2020",
			cardTitle: "Desenvolvedor Mobile",
			cardSubtitle: "Colégio La Salle Abel",
			cardDetailedText: ["Neste empresa atuei no desenvolvimento de aplicativos que apoiam projetos educacionais propostos por professores, bem como no desenvolvimento de novas formas de aprofundamento dos conteúdos estudados em sala de aula.",
				"Tecnologias: ", "- MVVM", "- Kotlin", "- Java", "- Firebase", "- Git", "- Retrofit", "- Room"],
		},
		{
			title: "Out/2019 - Jul/2020",
			cardTitle: "Desenvolvedor Mobile",
			cardSubtitle: "Colégio La Salle Abel",
			cardDetailedText: ["Neste empresa atuei no desenvolvimento de aplicativos que apoiam projetos educacionais propostos por professores, bem como no desenvolvimento de novas formas de aprofundamento dos conteúdos estudados em sala de aula.",
				"Tecnologias: ", "- MVVM", "- Kotlin", "- Java", "- Firebase", "- Git", "- Retrofit", "- Room"],
		},
		{
			title: "Out/2019 - Jul/2020",
			cardTitle: "Desenvolvedor Mobile",
			cardSubtitle: "Colégio La Salle Abel",
			cardDetailedText: ["Neste empresa atuei no desenvolvimento de aplicativos que apoiam projetos educacionais propostos por professores, bem como no desenvolvimento de novas formas de aprofundamento dos conteúdos estudados em sala de aula.",
				"Tecnologias: ", "- MVVM", "- Kotlin", "- Java", "- Firebase", "- Git", "- Retrofit", "- Room"],
		},
		{
			title: "Out/2019 - Jul/2020",
			cardTitle: "Desenvolvedor Mobile",
			cardSubtitle: "Colégio La Salle Abel",
			cardDetailedText: ["Neste empresa atuei no desenvolvimento de aplicativos que apoiam projetos educacionais propostos por professores, bem como no desenvolvimento de novas formas de aprofundamento dos conteúdos estudados em sala de aula.",
				"Tecnologias: ", "- MVVM", "- Kotlin", "- Java", "- Firebase", "- Git", "- Retrofit", "- Room"],
		},
	];
      

	return (
		<Container>
			<h1>Experiência</h1>
			<Chrono 
				items={items}
				mode="VERTICAL_ALTERNATING"
				mediaSettings={{display: "none"}}
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