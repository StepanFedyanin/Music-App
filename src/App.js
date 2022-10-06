import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import '../src/style/resetStyles.css'
import AppRouter from "./components/utils/AppRouter";
import TrackInfo from './components/context/TrackSave'
import LoginApp from "./pages/LoginApp";
function App() {
	const [trackPlay, setTrackPlay] = useState({
		"trackCover": "",
		"trackName": "",
		"trackLink": "",
		"trackExecutor": "",
		"ChouseTrack": [{ albomList: [] }],
		'trackСategory': "",
		"idChouseTrack": ""
	})
	return (
		<div className="App">
			<TrackInfo.Provider value={{
				trackPlay,
				setTrackPlay: setTrackPlay
			}}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</TrackInfo.Provider>
		</div>
	);
}

export default App;
