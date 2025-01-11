import React, { useEffect, useState } from "react";
import { Container, InfoBox, MainButtonInfoContainer } from "./styles";
import { MainButton } from "../../../../components";
import { useLanguage } from "../../../../contexts/language";
import linkedinLogo from "../../../../assets/images/linkedinLogo.png";
import { LINKEDIN_URL } from "../../../../constants/ContactInfos";

interface NamePresentationProps {
	onGoProjectsClicked: () => void;
}

const NamePresentation = ({ onGoProjectsClicked }: NamePresentationProps) => {
	const helloList = ["Olá, eu sou", "Hi, I am", "Hola, soy", "Salut, je suis", "Hallo, ich bin", "Ciao, sono", "您好我是"];
	const [helloText, setHelloText] = useState<string>("");
	const { getString } = useLanguage();
	let letterCount = 0;
	let loopCount = 0;
	const speed = 100;

	useEffect(() => {

		const timeoutRef: NodeJS.Timeout[] = [];

		const finishCallback = () => {
			if (loopCount < helloList.length) {
				typeWriter(helloList[loopCount]);
				loopCount++;
			} else {
				letterCount = 0;
				loopCount = 0;
				finishCallback();
			}
		};

		const typeWriter = (text: string) => {
			if (letterCount < text.length) {
				setHelloText(text.substring(0, letterCount + 1));
				letterCount++;
				timeoutRef.push(setTimeout(() => typeWriter(text), speed));
			} else {
				timeoutRef.push(setTimeout(() => reverseTypeWriter(text), speed + 400));
			}
		};

		const reverseTypeWriter = (text: string) => {
			if (letterCount > 0) {
				setHelloText(text.substring(0, letterCount - 1));
				letterCount--;
				timeoutRef.push(setTimeout(() => reverseTypeWriter(text), speed));
			} else {
				finishCallback();
			}
		};

		finishCallback();

		return () => {
			timeoutRef.forEach((timeout) => clearTimeout(timeout));
		};

	}, []);

	return (
		<>
			<Container>
				<InfoBox>
					<h3>{helloText}</h3>
					<h1>SIMONASSI</h1>
					<p>{getString("about")}</p>
					<br></br>
					<MainButtonInfoContainer>
						<MainButton onClick={onGoProjectsClicked} text={getString("showMyProjects")} />
						<img
							src={linkedinLogo}
							alt="linkedin"
							onClick={() => window.open(LINKEDIN_URL, "_blank")}
						/>
					</MainButtonInfoContainer>
				</InfoBox>
			</Container>
		</>
	);
};

export default NamePresentation;