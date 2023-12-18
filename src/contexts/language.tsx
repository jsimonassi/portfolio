import React, { createContext, useState, useContext, useEffect } from "react";
import { PT_BR_MESSAGES } from "../assets/strings/pt-br";
import { EN_US_MESSAGES } from "../assets/strings/en-us";

export type AvailableLanguages = "pt" | "en";

interface LanguageContextData {
    currentLanguage: AvailableLanguages
    setLanguage: (language: AvailableLanguages) => void;
    changeLanguage: () => void;
	getString: (key: string) => string;
}

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextData);

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {


	const [currentLanguage, setCurrentLanguage] = useState<AvailableLanguages>("pt");

	useEffect(() => {
		const language = localStorage.getItem("language") as AvailableLanguages;
		if (language) {
			setCurrentLanguage(language);
		}
	}, []);

	const changeLanguage = () => {
		if (currentLanguage === "pt") {
			setCurrentLanguage("en");
			localStorage.setItem("language", "en");
		} else {
			setCurrentLanguage("pt");
			localStorage.setItem("language", "pt");
		}
	};

	const getString = (key: string) => {
		if (currentLanguage === "pt") {
			return PT_BR_MESSAGES[key];
		}
		return EN_US_MESSAGES[key];
	};

	return (
		<LanguageContext.Provider
			value={{
				currentLanguage,
				setLanguage: (language: AvailableLanguages) => setCurrentLanguage(language),
				changeLanguage,
				getString
			}}>
			{children}
		</LanguageContext.Provider>

	);
};

const useLanguage = () => {
	const context = useContext(LanguageContext);

	return context;
};

export { LanguageProvider, useLanguage };
