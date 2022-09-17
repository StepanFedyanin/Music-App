import React from "react";
import LoginApp from "../pages/LoginApp";
import HomePage from "../pages/HomePage";
import LeterPage from '../pages/LeterPage'
import MyAlboms from '../pages/MyAlboms';
import MyMusic from '../pages/MyMusic';
import PopularAlboms from '../pages/PopularAlboms';
import Recommendation from '../pages/Recommendation.jsx'
import AlbomPage from "../pages/AlbomPage";
export const privateRoutes = [
	{ path: '/homePage', element: <HomePage /> },
	{ path: '/LeterPage', element: <LeterPage /> },
	{ path: '/MyAlboms', element: <MyAlboms /> },
	{ path: '/MyMusic', element: <MyMusic /> },
	{ path: '/PopularAlboms', element: <PopularAlboms /> },
	{ path: '/Recommendation', element: <Recommendation /> },
	{ path: '/albom/:executor/:nameAlbome', element: <AlbomPage /> },

]

export const publicRoutes = [
	{ path: '/login', element: <LoginApp /> },
]
