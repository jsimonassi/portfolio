import React from "react";
import { ContactBox, Container, InfoBox } from "./styles";
import { useLanguage } from "../../../../contexts/language";

const Contact = () => {

	const { getString } = useLanguage();

	return (
		<Container>
			<h1>{getString("contact")}</h1>
			<div>
				<img src="https://avatars.githubusercontent.com/u/33124078?s=400&u=a18707e50cbb3937f2460210f6097c2b0e3ff50b&v=4" alt="Profile" />
				<InfoBox>
					<h1>João Victor Simonassi</h1>
					<h3>{getString("contactMe")}</h3>
					<ContactBox>
						{/* <img src={linkedinLogo} alt="Linkedin" /> */}
						<a href="https://br.linkedin.com/in/jsimonassi">linkedin.com/in/jsimonassi</a>
					</ContactBox>
					<ContactBox>
						{/* <img src={emailLogo} alt="Linkedin" /> */}
						<p>jsimonassi@id.uff.br</p>
					</ContactBox>
					<ContactBox>
						{/* <img src={whatsAppLogo} alt="Linkedin" /> */}
						<p>+55 (21) 96675-5666</p>
					</ContactBox>
				</InfoBox>
			</div>
		</Container>
	);
};

export default Contact;