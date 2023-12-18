import React from "react";
import "./assets/styles/App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./constants/theme";
import MainRouter from "./routes";


function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<MainRouter />
		</ThemeProvider>
	);
}

export default App;
