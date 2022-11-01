import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import '../src/style/resetStyles.css'
import AppRouter from "./components/utils/AppRouter";
import TrackInfo from './components/context/TrackSave'
import TrackNav from "./components/elements/TrackNav/TrackNav";
import MyTrackAndAlbum from "./components/context/MyTrackAndAlbum";
function App() {
	const [trackPlay, setTrackPlay] = useState({
		"work": Boolean,
		"id_song": String,
		"trackCover": String,
		"trackName": String,
		"trackList": Array,
		"duration": Number
	})
	const [myMusic, setMyMusic] = useState({
		"songs": Array,
		"albums": Array,
		"trackList": '',
	})
	return (
		<div className="App">
			<TrackInfo.Provider value={{ trackPlay, setTrackPlay: setTrackPlay }}>
				<MyTrackAndAlbum.Provider value={{ myMusic, setMyMusic: setMyMusic }}>
					<BrowserRouter>
						<AppRouter />
						<TrackNav />
					</BrowserRouter>
				</MyTrackAndAlbum.Provider>
			</TrackInfo.Provider>
		</div>
	);
}

export default App;
