import React, { useEffect, useState } from "react";
import { HamburguerContainer, RightImageStyled, Logo, MenuContainer, RowView, HamburguerContent } from "./styles";
import { AVAILABLE_HEADER_OPTIONS } from "../../constants/headerOptions";
import logo from "../../assets/images/logo.png";
import brFlag from "../../assets/images/ptbr.png";
import usaFlag from "../../assets/images/usa.png";
import hamburguerIcon from "../../assets/images/hamburguerIcon.png";
import { useWindowDimensions } from "../../hooks";
import { TABLET_WIDTH } from "../../assets/styles/deviceSize";
import { useLanguage } from "../../contexts/language";

interface HeaderProps {
	scrollRef: React.RefObject<HTMLDivElement>;
	onOptionClick: (option: string) => void;
}

const Header = (props: HeaderProps) => {

	const [opacity, setOpacity] = useState(0);
	const dimensions = useWindowDimensions();
	const {currentLanguage, changeLanguage} = useLanguage();
	const [hambuguerOpen, setHamburguerOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			let newOpacity = window.scrollY / 300;
			newOpacity = newOpacity > 0.8 ? 0.8 : newOpacity;
			setOpacity(newOpacity);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (dimensions.width < TABLET_WIDTH) {
		return (
			<HamburguerContainer ref={props.scrollRef} opacity={opacity} >
				<RowView>
					<Logo src={logo} alt="Logo" onClick={() => props.onOptionClick("home")}/>
					<RightImageStyled src={hamburguerIcon} alt="language" onClick={() => setHamburguerOpen(previous => !previous)} />
				</RowView>

				{<HamburguerContent isOpen={hambuguerOpen}>
					{Object.keys(AVAILABLE_HEADER_OPTIONS).map((option, index) => (<p key={index} onClick={() => props.onOptionClick(option)}>{AVAILABLE_HEADER_OPTIONS[option].name}</p>))}
					<RightImageStyled src={ currentLanguage === "pt" ? brFlag : usaFlag } alt="language" onClick={() => changeLanguage()} />
				</HamburguerContent>}
			</HamburguerContainer>
		);
	}

	return (
		<MenuContainer ref={props.scrollRef} opacity={opacity}>
			<Logo src={logo} alt="Logo" onClick={() => props.onOptionClick("home")}/>
			<div>
				{Object.keys(AVAILABLE_HEADER_OPTIONS).map((option, index) => (<p key={index} onClick={() => props.onOptionClick(option)}>{AVAILABLE_HEADER_OPTIONS[option].name}</p>))}
			</div>
			<RightImageStyled src={ currentLanguage === "pt" ? brFlag : usaFlag } alt="language" onClick={() => changeLanguage()} />
		</MenuContainer>
	);
};

export default Header;