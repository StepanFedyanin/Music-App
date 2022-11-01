export default class addMyMusic {
	static addSong = (id_song, trackList, trackCover, trackName, trackDuration) => {
		const song = {
			'id': id_song,
			'trackList': trackList,
			'thumbnail': trackCover,
			'name': trackName,
			'duration': trackDuration
		}
		return song;
	}
	static addAlbum = (album_id, thumbnail, nameAlbome, musiclist) => {
		const Album = {
			'album_id': album_id,
			'thumbnail': thumbnail,
			'title': nameAlbome,
			'songs': musiclist
		}
		return Album;
	}
}