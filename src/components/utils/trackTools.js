export default class ToolsTrack {
	stop = () => {
		const audio = document.getElementById('audio');
		audio.play()
		console.log('play')

	}
	play = () => {
		const audio = document.getElementById('audio');
		audio.pause()
		document.getElementById('stopAudio').classList.remove('activ');
		document.getElementById('playAudio').classList.add('activ');
		console.log('play')
	}
}