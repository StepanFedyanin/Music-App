import React from 'react'
import { Navigate, Route, Router, Routes } from "react-router-dom";
import HomePage from '../../pages/HomePage';
import { privateRoutes } from '../../Router/routes';
const AppRouter = () => {
	return (
		<Routes>
			{
				privateRoutes.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
			<Route path={"*" || "/homePage"} element={<HomePage />} />
		</Routes>

	)
}

export default AppRouter