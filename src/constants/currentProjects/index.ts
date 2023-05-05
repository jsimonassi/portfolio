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

import touchExercise from "../../assets/images/TouchSmart/ExerciseUpdated.png";
import touchEmail from "../../assets/images/TouchSmart/Email.png";
import touchHome from "../../assets/images/TouchSmart/HomeUpdated.png";
import touchLogin from "../../assets/images/TouchSmart/Login.png";
const TOUCH_SMART_IMAGES = [
	touchExercise,
	touchEmail,
	touchHome,
	touchLogin
];

import technosExercise from "../../assets/images/TechnosConnect/Exercise.png";
import technosDevices from "../../assets/images/TechnosConnect/Devices.png";
import technosHome from "../../assets/images/TechnosConnect/HomeUpdated.png";
import technosWater from "../../assets/images/TechnosConnect/water.png";
const TECHNOS_IMAGES = [
	technosExercise,
	technosDevices,
	technosHome,
	technosWater
];

import vltCariocaAtt from "../../assets/images/VltCarioca/att.jpeg";
import vltCariocaHome from "../../assets/images/VltCarioca/home.jpeg";
import vltCariocaMap from "../../assets/images/VltCarioca/map.jpeg";
import vltCariocaModal from "../../assets/images/VltCarioca/modal.jpeg";
const VLT_CARIOCA_IMAGES = [
	vltCariocaAtt,
	vltCariocaHome,
	vltCariocaMap,
	vltCariocaModal
];

import dashFaq from "../../assets/images/TechnosDashboard/FAQ.png";
import dashWf2 from "../../assets/images/TechnosDashboard/WatchFaces2.png";
import dashWf from "../../assets/images/TechnosDashboard/Watchfaces.png";
const SMART_WEBADMIN_IMAGES = [
	dashFaq,
	dashWf2,
	dashWf
];

const CURRENT_PROJECTS = [
	{
		title: "Touch Smart",
		description: "O app Touch Smart é o seu parceiro para o dia a dia! Em poucos passos, você conecta o seu Smartwatch Touch e tem acesso às funcionalidades sobre sua rotina, treinos e saúde, como notificações de chamadas, mensagens e redes sociais; + de 8 esportes; controle de batimentos cardíacos, passos, calorias e distância; modo relaxamento; e controle do sono.",
		appStoreLink: "https://apps.apple.com/br/app/touch-smart/id1634658975",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.touchsmart",
		images: TOUCH_SMART_IMAGES,
		tools: [ "React Native", "JavaScript", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch", "Entre outras ferramentas..."]
	},
	{
		title: "Technos Connect",
		description: "O Technos Connect aplicativo feito para os amantes do clássico com toque esportivo e oferece uma gama de funcionalidades que facilitam sua vida. Une toda a sofisticação e qualidade dos produtos da Technos com inovação tecnológica e design sofisticado. São mais de 20 recursos disponíveis nos seu relógios inteligentes compatíveis com o Aplicativo!",
		appStoreLink: "https://apps.apple.com/br/app/technos-connect/id1566030333",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.technosconnect",
		images: TECHNOS_IMAGES,
		tools: [ "React Native", "JavaScript", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch", "Entre outras ferramentas..."]
	},
	{
		title: "Mormaii Smartwatches",
		description: "O Mormaii Smartwatches é seu app para tirar o máximo proveito de seus produtos conectados da Mormaii. Com ele é possível verificar seus dados de atividades diárias, como contagem de passos, calorias, monitoramento cardíaco e muitas outras informações.",
		appStoreLink: "https://apps.apple.com/br/app/mormaii-smartwatches/id1502184388",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.mormaiismartwatches&hl=pt_BR&gl=US&pli=1",
		images: MORMAII_IMAGES,
		tools: [ "React Native", "TypeScript", "StyledComponents", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch", "Entre outras ferramentas..."]
	},
	{
		title: "Vlt Carioca",
		description: "Com o aplicativo oficial do VLT Carioca você vai planejar a sua viagem, saber a previsão de chegada das composições, recarregar o seu RioCard e se informar sobre o uso do VLT e as atrações turísticas no entorno das paradas e estações.",
		appStoreLink: "https://apps.apple.com/br/app/vlt-carioca/id1317788967",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.vltrio.vltcarioca",
		images: VLT_CARIOCA_IMAGES,
		tools: [ "Kotlin", "MVVM", "LiveData", "Room Database", "FusedLocationProvider", "Entre outras ferramentas..."]
	},
	{
		title: "Smart WebAdmin - Dashboard",
		description: "O Smart Webadmin é um dashboard para gerenciamento de apps do grupo Technos. Através do dashboard é possível adicionar mostradores, atualizar FAQs, cadastrar arquivos de firmware para os smartwatches, entre outros recursos relevantes a aplicação.",
		images: SMART_WEBADMIN_IMAGES,
		tools: [ "ReactJS", "TypeScript", "StyledComponents", "KeyCloak", "Entre outras ferramentas..."]
	},
] as DevProject [];

export default CURRENT_PROJECTS;