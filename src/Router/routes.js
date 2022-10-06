import React from "react";
import LoginApp from "../pages/LoginApp";
import HomePage from "../pages/HomePage";
import MyMusic from '../pages/MyMusic';
import NewMusicPage from '../pages/NewMusicPage';
import Recommendation from '../pages/Recommendation.jsx'
import AlbomPage from "../pages/AlbomPage";
import ArtistPage from "../pages/ArtistPage";
export const privateRoutes = [
	{ path: '/homePage', element: <HomePage /> },
	{ path: '/MyMusic', element: <MyMusic /> },
	{ path: '/newMusic', element: <NewMusicPage /> },
	{ path: '/Recommendation', element: <Recommendation /> },
	{ path: '/albom/:executor/:nameAlbome', element: <AlbomPage /> },
	{ path: '/executor/:nameExecutor', element: <ArtistPage /> },
]

export const publicRoutes = [
	{ path: '/login', element: <LoginApp /> },
]
