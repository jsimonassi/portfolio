import React, { useEffect, useState } from "react";
import { MenuContainer } from "./styles";
import { AVAILABLE_HEADER_OPTIONS } from "../../constants/headerOptions";

interface HeaderProps {
    scrollRef: React.RefObject<HTMLDivElement>;
    onOptionClick: (option: string) => void;
}

const Header = (props: HeaderProps) => {

	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			let newOpacity = window.scrollY / 300;
			newOpacity = newOpacity > 0.8 ? 0.8 : newOpacity;
			setOpacity(newOpacity);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<MenuContainer ref={props.scrollRef} opacity={opacity}>
			{Object.keys(AVAILABLE_HEADER_OPTIONS).map((option, index) => (<p key={index} onClick={() => props.onOptionClick(option)}>{AVAILABLE_HEADER_OPTIONS[option].name}</p>))}
		</MenuContainer>
	);
};

export default Header;