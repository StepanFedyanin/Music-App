import axios from "axios";
export default class GetYouTubeAPI {
	static async getAlbom(albom) {
		const options = {
			method: 'GET',
			url: 'https://youtube-music1.p.rapidapi.com/v2/get_album',
			params: { album_id: albom },
			headers: {
				'X-RapidAPI-Key': '71c624d2d1msh6ed8d3859c112bap135848jsnb28bb9ce0296',
				'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
			}
		};
		const getList = axios.request(options).then(function (response) {
			const gettingAlbim = (response.data);
			return gettingAlbim;
		}).catch(function (error) {
			console.error(error);
		});
		return getList;
	}
	static async getTrack(track_id) {
		const options = {
			method: 'GET',
			url: 'https://youtube-music1.p.rapidapi.com/get_download_url',
			params: { id: track_id, ext: 'mp3' },
			headers: {
				'X-RapidAPI-Key': '71c624d2d1msh6ed8d3859c112bap135848jsnb28bb9ce0296',
				'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
			}
		};
		const getTrack = axios.request(options).then(function (response) {
			const gettingAlbim = (response.data);
			return gettingAlbim;
		}).catch(function (error) {
			console.error(error);
		});
		return getTrack;
	}
	static async getArtist(Artist_id) {
		const options = {
			method: 'GET',
			url: 'https://youtube-music1.p.rapidapi.com/v2/get_artist',
			params: { artist_id: Artist_id },
			headers: {
				'X-RapidAPI-Key': '71c624d2d1msh6ed8d3859c112bap135848jsnb28bb9ce0296',
				'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
			}
		};
		const getArtist = axios.request(options).then(function (response) {
			const gettingAlbim = (response.data);
			return gettingAlbim;
		}).catch(function (error) {
			console.error(error);
		});
		return getArtist;
	}
}