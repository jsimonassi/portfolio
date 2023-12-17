import { Experience } from "../../types/Experience";
import radixLogo from "../../assets/images/radixLogo.jpeg";
import lasalleLogo from "../../assets/images/lasalleLogo.jpeg";

export const PT_CURRENT_EXPERIENCES: Experience[] = [

	{
		title: "Nov/2022 - Atual",
		cardTitle: "Desenvolvedor de Software Pleno",
		cardSubtitle: "Radix Engenharia e Software",
		cardDetailedText: [
			"Suporte e evolução dos aplicativos do Grupo Technos. Neste projeto, atuo elaborando novas arquiteturas e estratégias que visam expandir as funcionalidades de forma organizada e escalável. Atuo junto ao time na criação e evolução de novas features, correção de bugs e suporte ao cliente. Além disso, atuo fortemente na criação e evolução de bibliotecas de componentes e ferramentas que são utilizadas em todos os apps do Grupo Technos de forma a facilitar a comunicação entre aplicativos e dispositivos bluetooth low energy.",
		],
		companyImage: radixLogo,
		techs: [
			"- React Native",
			"- TypeScript",
			"- ContextApi",
			"- Jest + React Testing Library",
			"- Java",
			"- Objective-C",
			"- Room Database",
			"- FusedLocationProvider",
			"- Entre outras ferramentas..."
		],
		companyLink: "https://www.radixeng.com.br/"
	},
	{
		title: "Nov/2021 - Nov/2022",
		cardTitle: "Desenvolvedor de Software Junior",
		cardSubtitle: "Radix Engenharia e Software",
		cardDetailedText: [
			"Neste período, atuei junto ao time de sustentação realizando correções de bugs e eventuais melhorias nos apps do Grupo Technos e do VLT Carioca. Durante meu período na Radix, tive a oportunidade de atuar em diversos projetos de frontend, backend e mobile, o que me fez ser um profissional mais completo e muito autodidata.",
		],
		companyImage: radixLogo,
		techs: [
			"- Além das tecnologias citadas no cargo atual, também atuei com:",
			"- Apps Android Nativo + MVVM",
			"- Retrofit",
			"- Backends em Ruby On Rails e .net C#",
			"- MySql e MongoDB",
			"- Aws S3",
			"- Azure Devops e Bitrise",
			"- Entre outras ferramentas..."
		],
		companyLink: "https://www.radixeng.com.br/"

	},
	{
		title: "Jul/2020 - Nov/2021",
		cardTitle: "Estágio em Desenvolvimento de Software",
		cardSubtitle: "Radix Engenharia e Software",
		cardDetailedText: [
			"Neste período, atuei junto ao Grupo Technos dando suporte e evoluindo aplicativos React Native e Apps Nativos (Android e iOS).",
		],
		companyImage: radixLogo,
		techs: [],
		companyLink: "https://www.radixeng.com.br/"
	},
	{
		title: "Jul/2020 - Nov/2021",
		cardTitle: "Estágio em Desenvolvimento Mobile",
		cardSubtitle: "Colégio La Salle Abel",
		cardDetailedText: [
			"Desenvolvimento de aplicativos que auxiliem projetos educacionais propostos pelos professores, bem como desenvolver novas formas de aprofundar os conteúdos estudados em sala de aula utilizando aplicações mobile.",
		],
		companyImage: lasalleLogo,
		techs: [
			"- Apps Android Nativo + MVVM",
			"- Retrofit",
			"- Room Database",
			"- Firebase",
			"- Entre outras ferramentas..."
		],
		companyLink: "https://lasalle.edu.br/lasalleriodejaneiro"

	}

];