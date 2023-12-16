import React from "react";
import { MainPage } from "./screens";
import "./assets/styles/App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./constants/theme";


function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<MainPage />
		</ThemeProvider>
	);
}

export default App;
