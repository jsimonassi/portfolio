import React from "react";
import { DevProject } from "../../../../../../types/DevProject";
import { Container, InfoBox, StoreButtonGroup } from "./styles";
import { ImageLoader } from "../../../../../../components";
import appStoreButton from "../../../../../../assets/images/appStoreButton.png";
import playStoreButton from "../../../../../../assets/images/playStoreButton.png";
import { useWindowDimensions } from "../../../../../../hooks";
import { TABLET_WIDTH, device } from "../../../../../../assets/styles/deviceSize";

interface ProjectItemProps {
	currentProject: DevProject;
	leftImage: boolean;
}

const ProjectItem = (props: ProjectItemProps) => {

	const { width } = useWindowDimensions();

	if (width < TABLET_WIDTH) {
		return (
			<Container leftAlign={props.leftImage}>
				<InfoBox leftAlign={props.leftImage}>
					<h1>{props.currentProject.title}</h1>
					<p>{props.currentProject.description}</p>
					<h2>Tecnologias utilizadas:</h2>
					{props.currentProject.tools && props.currentProject.tools.map((item, index) => (<span key={index}>- {item}</span>))}
					<div>
						{props.currentProject.images && <ImageLoader images={props.currentProject.images} />}
					</div>
					<StoreButtonGroup>
						{props.currentProject.playStoreLink && <img src={playStoreButton} alt={"play Store Button"} onClick={() => window.location.href = props.currentProject.playStoreLink ?? ""} />}
						{props.currentProject.appStoreLink && <img src={appStoreButton} alt={"App Store Button"} onClick={() => window.location.href = props.currentProject.appStoreLink ?? ""} />}
					</StoreButtonGroup>
				</InfoBox>
			</Container>
		);
	}

	return (
		<Container leftAlign={props.leftImage}>
			{props.currentProject.images && props.leftImage && <ImageLoader images={props.currentProject.images} />}
			<InfoBox leftAlign>
				<h1>{props.currentProject.title}</h1>
				<p>{props.currentProject.description}</p>
				<h2>Tecnologias utilizadas:</h2>
				{props.currentProject.tools && props.currentProject.tools.map((item, index) => (<span key={index}>- {item}</span>))}
				<StoreButtonGroup>
					{props.currentProject.playStoreLink && <img src={playStoreButton} alt={"play Store Button"} onClick={() => window.location.href = props.currentProject.playStoreLink ?? ""} />}
					{props.currentProject.appStoreLink && <img src={appStoreButton} alt={"App Store Button"} onClick={() => window.location.href = props.currentProject.appStoreLink ?? ""} />}
				</StoreButtonGroup>
			</InfoBox>
			{props.currentProject.images && !props.leftImage && <ImageLoader images={props.currentProject.images} />}
		</Container>
	);
};

export default ProjectItem;