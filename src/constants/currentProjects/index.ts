import { DevProject } from "../../types/DevProject";

import mormaiiExercise from "../../assets/images/Mormaii/Exercise.png";
import mormaiiHome from "../../assets/images/Mormaii/Home.png";
import mormaiiSplash from "../../assets/images/Mormaii/Splash.png";
import mormaiiOnBoarding from "../../assets/images/Mormaii/onboarding.jpg";
const MORMAII_IMAGES = [
	mormaiiExercise,
	mormaiiHome,
	mormaiiSplash,
	mormaiiOnBoarding
];


const CURRENT_PROJECTS = [
	{
		title: "Mormaii Smartwatches",
		description: "O Mormaii Smartwatches é seu app para tirar o máximo proveito de seus produtos conectados da Mormaii. Com ele é possível verificar seus dados de atividades diárias, como contagem de passos, calorias, monitoramento cardíaco e muitas outras informações.",
		appStoreLink: "https://apps.apple.com/br/app/mormaii-smartwatches/id1502184388",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.mormaiismartwatches&hl=pt_BR&gl=US&pli=1",
		images: MORMAII_IMAGES,
		tools: [ "React Native", "TypeScript", "StyledComponents", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch"]
	}
] as DevProject [];

export default CURRENT_PROJECTS;