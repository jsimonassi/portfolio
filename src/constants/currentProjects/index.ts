import { DevProject } from "../../types/DevProject";

import mormaii1 from "../../assets/images/Mormaii/01.png";
import mormaii2 from "../../assets/images/Mormaii/02.png";
import mormaii3 from "../../assets/images/Mormaii/03.png";
import mormaii4 from "../../assets/images/Mormaii/04.png";
import mormaii5 from "../../assets/images/Mormaii/05.png";
import mormaii6 from "../../assets/images/Mormaii/06.png";
import mormaii7 from "../../assets/images/Mormaii/07.png";
import mormaii8 from "../../assets/images/Mormaii/08.png";
import mormaii9 from "../../assets/images/Mormaii/09.png";
import mormaii10 from "../../assets/images/Mormaii/10.png";
import mormaiiLogo from "../../assets/images/Mormaii/logo.png";
const MORMAII_IMAGES = [
	mormaii1,
	mormaii2,
	mormaii3,
	mormaii4,
	mormaii5,
	mormaii6,
	mormaii7,
	mormaii8,
	mormaii9,
	mormaii10
];

import touchExercise from "../../assets/images/TouchSmart/ExerciseUpdated.png";
import touchEmail from "../../assets/images/TouchSmart/Email.png";
import touchHome from "../../assets/images/TouchSmart/HomeUpdated.png";
import touchLogin from "../../assets/images/TouchSmart/Login.png";
import touchLogo from "../../assets/images/TouchSmart/logo.png";
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
import technosLogo from "../../assets/images/TechnosConnect/logo.png";
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
import vltLogo from "../../assets/images/VltCarioca/logo.png";
const VLT_CARIOCA_IMAGES = [
	vltCariocaAtt,
	vltCariocaHome,
	vltCariocaMap,
	vltCariocaModal
];

import dashFaq from "../../assets/images/TechnosDashboard/FAQ.png";
import dashWf2 from "../../assets/images/TechnosDashboard/WatchFaces2.png";
import dashWf from "../../assets/images/TechnosDashboard/Watchfaces.png";
import technosDashboardLogo from "../../assets/images/TechnosDashboard/logo.png";
const SMART_WEBADMIN_IMAGES = [
	dashFaq,
	dashWf2,
	dashWf
];

import loginPage from "../../assets/images/AlunoPresente/Login.png";
import addClassPage from "../../assets/images/AlunoPresente/AddClass.png";
import gpsPage from "../../assets/images/AlunoPresente/gps.png";
import homePage from "../../assets/images/AlunoPresente/home.png";
import alunoPresenteLogo from "../../assets/images/AlunoPresente/logo.png";
const ALUNO_PRESENTE_IMAGES = [
	loginPage,
	addClassPage,
	gpsPage,
	homePage
];

const CURRENT_PROJECTS: DevProject[] = [
	{
		title: "Mormaii Smartwatches",
		smallDescription: "App React Native",
		description: "O Mormaii Smartwatches é seu app para tirar o máximo proveito de seus produtos conectados da Mormaii. Com ele é possível verificar seus dados de atividades diárias, como contagem de passos, calorias, monitoramento cardíaco e muitas outras informações.",
		appStoreLink: "https://apps.apple.com/br/app/mormaii-smartwatches/id1502184388",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.mormaiismartwatches&hl=pt_BR&gl=US&pli=1",
		images: MORMAII_IMAGES,
		tools: [ "React Native", "TypeScript", "StyledComponents", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch", "Entre outras ferramentas..."],
		logo: mormaiiLogo,
		appType: "Mobile"
	},
	{
		title: "Technos Connect",
		smallDescription: "App React Native",
		description: "O Technos Connect aplicativo feito para os amantes do clássico com toque esportivo e oferece uma gama de funcionalidades que facilitam sua vida. Une toda a sofisticação e qualidade dos produtos da Technos com inovação tecnológica e design sofisticado. São mais de 20 recursos disponíveis nos seu relógios inteligentes compatíveis com o Aplicativo!",
		appStoreLink: "https://apps.apple.com/br/app/technos-connect/id1566030333",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.technosconnect",
		images: TECHNOS_IMAGES,
		tools: [ "React Native", "JavaScript", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch", "Entre outras ferramentas..."],
		logo: technosLogo,
		appType: "Mobile"
	},
	{
		title: "Touch Smart",
		smallDescription: "App React Native",
		description: "O app Touch Smart é o seu parceiro para o dia a dia! Em poucos passos, você conecta o seu Smartwatch Touch e tem acesso às funcionalidades sobre sua rotina, treinos e saúde, como notificações de chamadas, mensagens e redes sociais; + de 8 esportes; controle de batimentos cardíacos, passos, calorias e distância; modo relaxamento; e controle do sono.",
		appStoreLink: "https://apps.apple.com/br/app/touch-smart/id1634658975",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.grupotechnos.touchsmart",
		images: TOUCH_SMART_IMAGES,
		tools: [ "React Native", "JavaScript", "ContextApi", "Java - Comunicação Android x Smartwatch", "Objective-C - Comunicação iOS x Smartwatch", "Entre outras ferramentas..."],
		logo: touchLogo,
		appType: "Mobile"
	},
	{
		title: "Smart WebAdmin - Dashboard",
		smallDescription: "App ReactJs",
		description: "O Smart Webadmin é um dashboard para gerenciamento de apps do grupo Technos. Através do dashboard é possível adicionar mostradores, atualizar FAQs, cadastrar arquivos de firmware para os smartwatches, entre outros recursos relevantes a aplicação.",
		images: SMART_WEBADMIN_IMAGES,
		tools: [ "ReactJS", "TypeScript", "StyledComponents", "KeyCloak", "Entre outras ferramentas..."],
		logo: technosDashboardLogo,
		appType: "Web"
	},
	{
		title: "Vlt Carioca",
		smallDescription: "App Android Nativo",
		description: "Com o aplicativo oficial do VLT Carioca você vai planejar a sua viagem, saber a previsão de chegada das composições, recarregar o seu RioCard e se informar sobre o uso do VLT e as atrações turísticas no entorno das paradas e estações.",
		appStoreLink: "https://apps.apple.com/br/app/vlt-carioca/id1317788967",
		playStoreLink: "https://play.google.com/store/apps/details?id=br.com.vltrio.vltcarioca",
		images: VLT_CARIOCA_IMAGES,
		tools: [ "Kotlin", "MVVM", "LiveData", "Room Database", "FusedLocationProvider", "Entre outras ferramentas..."],
		logo: vltLogo,
		appType: "Mobile"
	},
	{
		title: "Aluno presente",
		smallDescription: "App React Native",
		description: "O Aluno Presente facilita seu controle de frequência e reúne em um só lugar tudo sobre a participação dos seus alunos.",
		images: ALUNO_PRESENTE_IMAGES,
		tools: [ "React Native", "TypeScript", "OpenID Connect - OAuth 2.0", "ContextApi", "WebSockets", "Entre outras ferramentas..."],
		logo: alunoPresenteLogo,
		appType: "Mobile"
	},
];

export default CURRENT_PROJECTS;