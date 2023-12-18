import React from "react";
import "./assets/styles/App.css";
import MainRouter from "./routes";
import AppProvider from "./contexts";


function App() {
	return (
		<AppProvider>
			<MainRouter />
		</AppProvider>
	);
}

export default App;
