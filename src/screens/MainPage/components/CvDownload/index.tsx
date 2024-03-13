import React from "react";
import { Container } from "./styles";
import { MainButton } from "../../../../components";
import { useLanguage } from "../../../../contexts/language";

const CV_URL_EN = "./JoaoVictorSimonassi-en.pdf";
const CV_URL_PT = "./JoaoVictorSimonassi-pt-br.pdf";

const CvDownload = () => {

	const { getString, currentLanguage } = useLanguage();

	return (
		<Container>
			<h1>{getString("resume")}</h1>
			<p>{getString("downloadInstructions")}</p>
			<MainButton onClick={() => { window.location.href = currentLanguage === "pt" ? CV_URL_PT : CV_URL_EN; }} text="Download" />
		</Container>
	);
};

export default CvDownload;
