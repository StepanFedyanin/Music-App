import React from "react";
import LoginApp from "../pages/LoginApp/LoginApp";
import HomePage from "../pages/HomePage/HomePage";
import MyMusic from "../pages/MyMusic/MyMusic";
import NewMusicPage from "../pages/NewMusicPage/NewMusicPage";
import AlbomPage from "../pages/AlbomPage/AlbomPage";
import ArtistPage from "../pages/ArtistPage/ArtistPage";
export const privateRoutes = [
	{ path: '/homePage', element: <HomePage /> },
	{ path: '/MyMusic', element: <MyMusic /> },
	{ path: '/newMusic', element: <NewMusicPage /> },
	{ path: '/albom/:album_id', element: <AlbomPage /> },
	{ path: '/executor/:id_executor', element: <ArtistPage /> },
]

export const publicRoutes = [
	{ path: '/login', element: <LoginApp /> },
]
