import React from "react";
import {
	Routes,
	Route,
	BrowserRouter as Router,
} from "react-router-dom";
import { MainPage, ProjectViewPage } from "../screens";
import { ROUTES } from "../constants/routes";

const MainRouter = () => {

	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOME} element={<MainPage />} />
				<Route path={`/${ROUTES.PROJECT_VIEW}/:id`}  element={<ProjectViewPage />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;