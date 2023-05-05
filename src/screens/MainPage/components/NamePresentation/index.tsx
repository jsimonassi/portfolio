import React, { useEffect, useState } from "react";
import { Container, InfoBox, MiniFooter, MiniHeader } from "./styles";
import arrowDown from "../../../../assets/images/arrowDown.svg";

const NamePresentation = () => {
	const helloList = ["Olá, eu sou", "Hi, I am", "Hola, soy", "Salut, je suis", "Hallo, ich bin", "Ciao, sono", "您好我是"];
	const [helloText, setHelloText] = useState<string>("");
	let letterCount = 0;
	let loopCount = 0;
	const speed = 100;

	useEffect(() => {

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
				setTimeout(() => typeWriter(text), speed);
			} else {
				setTimeout(() => reverseTypeWriter(text), speed + 400);
			}
		};

		const reverseTypeWriter = (text: string) => {
			if (letterCount > 0) {
				setHelloText(text.substring(0, letterCount - 1));
				letterCount--;
				setTimeout(() => reverseTypeWriter(text), speed);
			} else {
				finishCallback();
			}
		};

		finishCallback();

	}, []);

	return (
		<Container>
			<MiniHeader>
				<p>BR</p>
			</MiniHeader>
			<InfoBox>
				<h3>{helloText}</h3>
				<h1>SIMONASSI</h1>
				<p>Desenvolvedor Full Stack na Radix Engenharia e Software e graduando no último período de Ciência da Computação pela Universidade Federal Fluminense. Atuo em projetos React Native e ReactJS, mas tenho um carinho especial pelo desenvolvimento nativo. Adoro atuar em aplicações que estão em contato direto com o usuário final. Ver minhas soluções contribuindo e impactando a vida das pessoas é extremamente gratificante.Confira meus projetos!</p>
			</InfoBox>
			<MiniFooter>
				<img src={arrowDown} alt="scroll down" />
			</MiniFooter>
		</Container>
	);
};

export default NamePresentation;