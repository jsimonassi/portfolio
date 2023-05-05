import React from "react";
import { Container } from "./styles";
import { MainButton } from "../../../../components";

const CV_URL = "./CV.pdf";

const CvDownload = () => {
	return (
		<Container>
			<h1>Currículo</h1>
			<p>Faça o download do currículo em PDF para ter acesso a mais informações.</p>
			<MainButton onClick={() => {window.location.href = CV_URL;}} text="Download" />
		</Container>
	);
};

export default CvDownload;
