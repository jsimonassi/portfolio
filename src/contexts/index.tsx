import React from "react";
import { LanguageProvider } from "./language";
import { darkTheme } from "../constants/theme";
import { ThemeProvider } from "styled-components";

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<LanguageProvider>
				{children}
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default AppProvider;
