import React from "react";
import { Container } from "./styles";
import { MainButton } from "../../../../components";
import { useLanguage } from "../../../../contexts/language";

const CV_URL = "./JoaoVictorSimonassi-2024.pdf";

const CvDownload = () => {

	const { getString } = useLanguage();

	return (
		<Container>
			<h1>{getString("resume")}</h1>
			<p>{getString("downloadInstructions")}</p>
			<MainButton onClick={() => {window.location.href = CV_URL;}} text="Download" />
		</Container>
	);
};

export default CvDownload;
