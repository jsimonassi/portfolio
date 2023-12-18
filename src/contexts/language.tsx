import React, { createContext, useState, useContext } from "react";

export type AvailableLanguages = "pt" | "en";

interface LanguageContextData {
	currentLanguage: AvailableLanguages
    setLanguage: (language: AvailableLanguages) => void;
    changeLanguage: () => void;
}

interface LanguageProviderProps {
	children: React.ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextData);

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {


	const [currentLanguage, setCurrentLanguage] = useState<AvailableLanguages>("pt");

	const changeLanguage = () => {
		if (currentLanguage === "pt") {
			setCurrentLanguage("en");
		} else {
			setCurrentLanguage("pt");
		}
	};

	return (
		<LanguageContext.Provider
			value={{
				currentLanguage,
				setLanguage: (language: AvailableLanguages) => setCurrentLanguage(language),
				changeLanguage
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
