import { createContext } from "react";
const TrackInfo = createContext({
	"work": Boolean,
	"id_song": String,
	"trackCover": String,
	"trackName": String,
	"trackList": Array,
	"duration": String
})
export default TrackInfo
