import React, { useState, useContext } from 'react'
import cls from './TrackNav.module.css'
import nextBtnIcon from '../../resources/nexttreckItem.svg';
import prefBtnIcon from '../../resources/prefTreckItem.svg';
import randomBtnIcon from '../../resources/randomTreckItom.svg';
import trackAdd from '../../resources/trackAdd.svg'
import trackVoice from '../../resources/trackVoice.svg'
import LikeIcon from '../../UI/icon/likeicon/LikeIcon';
import TrackInfo from '../../context/TrackSave';
import { useEffect } from 'react';
import RepeatTrack from '../RepeatTrack/RepeatTrack'
import GetYouTubeAPI from '../../../API/GetYouTubeAPI';
import { useRef } from 'react';
import PlayOrStopTrack from '../PlayOrStopTrack/PlayOrStopTrack';
import VolumeTrack from '../VolumeTrack/VolumeTrack';


function TrackNav() {
	const { trackPlay, setTrackPlay } = useContext(TrackInfo);
	const [playChange, setPlayChange] = useState(trackPlay.work);
	const [timePlay, setTimePlay] = useState('00:00');
	const [lIsturlTrack, setListUrlTrack] = useState(trackPlay.trackList);
	const [urlTrack, setUrlTrack] = useState();
	const [loopTrack, seLoopTrack] = useState(false)
	const [loadPropgresStyle, setLoadPropgresStyle] = useState(cls.trackTimeAwait);
	const audio = useRef('*');
	const progressBarShow = useRef('*')
	useEffect(() => {
		if (trackPlay.id_song.length > 1) {
			getTrackID();
			setListUrlTrack(trackPlay.trackList);
		}
	}, [trackPlay.id_song])
	async function getTrackID() {
		const responce = await (GetYouTubeAPI.getTrack(trackPlay.id_song))
		setUrlTrack(responce.result.download_url)
	}
	const Play = (Boolean) => {
		if (Boolean) {
			audio.current.pause();
		} else if (Boolean == false) {
			audio.current.play();
		}
	}
	const ProgressBar = () => {
		setLoadPropgresStyle(cls.trackTimeBarAfter);
		progressBarShow.current.style.width = (audio.current.currentTime / trackPlay.duration * 100) + '%';
		let PlayTime = Math.round(audio.current.currentTime);
		let PlayTimeShow = '0:00'
		if (PlayTime < 60) {
			if (PlayTime / 10 >= 1) {
				PlayTimeShow = '0:' + PlayTime % 60;
			} else {
				PlayTimeShow = '0:0' + PlayTime % 60;
			}
		} else {
			if (PlayTime % 60 / 10 >= 1) {
				PlayTimeShow = (Math.round(PlayTime / 60) + ":" + PlayTime % 60);
			} else {
				PlayTimeShow = (Math.round(PlayTime / 60) + ":0" + PlayTime % 60).toString();
			}
		}
		setTimePlay(PlayTimeShow);
	}
	const changeSongNext = () => {
		const findId = lIsturlTrack.findIndex(el => el.id == trackPlay.id_song)
		if (findId == lIsturlTrack.length - 1) {
			changeSong(0)
		} else {
			changeSong(findId + 1)
		}
	}
	const changeSongPref = () => {
		const findId = lIsturlTrack.findIndex(el => el.id == trackPlay.id_song)
		if (findId == 0) {
			changeSong(lIsturlTrack.length - 1)
		} else {
			changeSong(findId - 1)
		}
	}
	const changeSong = (index) => {
		console.log(index);
		console.log(lIsturlTrack);
		setTrackPlay({
			"work": trackPlay.work,
			"id_song": lIsturlTrack[index].id,
			"trackCover": trackPlay.trackCover,
			"trackName": lIsturlTrack[index].name,
			"trackList": trackPlay.trackList,
			"duration": lIsturlTrack[index].duration
		})
	}
	const changeValueVoice = (value) => {
		audio.current.volume = value;
	}
	return (
		<div className={cls.TrackNav}>
			<div className={cls.trackTools}>
				<div className={cls.toolsIcon}>
					<button>
						<img src={randomBtnIcon} alt="" />
					</button>
				</div>
				<div className={cls.toolsIcon}>
					<button onClick={changeSongPref}>
						<img src={prefBtnIcon} alt="" />
					</button>
				</div>
				<div className={cls.toolsIcon}>
					<PlayOrStopTrack
						playChange={playChange}
						setPlayChange={setPlayChange}
						Play={Play}
					/>
				</div>
				<div className={cls.toolsIcon}>
					<button
						onClick={changeSongNext}
					>
						<img src={nextBtnIcon} alt="" />
					</button>
				</div>
				<div className={cls.toolsIcon}>
					<RepeatTrack
						loopTrack={loopTrack}
						seLoopTrack={seLoopTrack}
					/>
				</div>
			</div>
			<div className={cls.trackContent}>
				<div className={cls.trackContentInfo}>
					<div className={cls.trackCover}>
						<img src={trackPlay.trackCover} alt="" />
					</div>
					<div className={cls.trackShow}>
						<div className={cls.trackName}>
							<div className={cls.trackTitle}>
								<p className={cls.trackTitleStyle}>{trackPlay.trackName.length > 1 ? trackPlay.trackName.split('-')[0] : ''}</p>
							</div>
							<div className={cls.trackExecutor}>
								<p className={cls.trackExecutorStyle}>{trackPlay.trackName.length > 1 ? trackPlay.trackName.split('-')[0] : ''}</p>
							</div>
						</div>
						<audio
							ref={audio}
							className={cls.audioHide}
							loop={loopTrack}
							autoplay='autoplay'
							onTimeUpdate={ProgressBar}
							src={urlTrack}>
						</audio>
					</div>
				</div>
				<div className={cls.TrackInfo}>
					<div className={cls.trackTime}>
						<p className={cls.trackTimeStyle}>{timePlay}</p>
					</div>
					<div className={loadPropgresStyle}>
						<div ref={progressBarShow} className={cls.trackTimeBarBefore}>
						</div>
					</div>
					<div className={cls.trackAllTime}>
						<p className={cls.trackTimeStyle}>{
							(Math.floor(trackPlay.duration / 60)) + ":" + (Math.floor(trackPlay.duration % 60))
						}</p>
					</div>
				</div>
			</div>
			<div className={cls.trackSetting}>
				<div className={cls.toolsIcon}>
					<LikeIcon />
				</div>
				<div className={cls.toolsIcon}>
					<VolumeTrack
						changeValueVoice={changeValueVoice} />
				</div>
				<div className={cls.toolsIcon}>:</div>
			</div>
		</div>
	)
}
export default TrackNav

// const Stop = () => {
// 	const audio = document.getElementById('audio');
// 	audio.pause();
// 	setPlayChange(false);
// }
// const Play = () => {
// 	const audio = document.getElementById('audio');
// 	audio.play();
// 	setPlayChange(true);
// }
// useEffect(() => {
// 	if (trackPlay.work) {
// 		Play();
// 	} else {
// 		Stop();
// 	}
// 	changeLoadProgresBar();
// }, [trackPlay.work])
// const changeLoadProgresBar = () => {
// 	const audio = document.getElementById('audio');
// 	// audio.currentTime = trackPlay.trackTimeNow
// }
// const ProgressUpdate = () => {
// 	const audio = document.getElementById('audio');
// 	setTrackPlay({
// 		// "trackTimeNow": audio.currentTime,
// 		// "work": trackPlay.work,
// 		// "ChouseTrack": trackPlay.ChouseTrack,
// 		// "trackCover": trackPlay.trackCover,
// 		// "trackExecutor": trackPlay.trackExecutor,
// 		// "trackLink": trackPlay.tracklink,
// 		// "trackName": trackPlay.trackName,
// 		// "idChouseTrack": trackPlay.idChouseTrack
// 		"work": Boolean,
// 		"id_song": String,
// 		"trackCover": String,
// 		"trackName": String,
// 		"trackList": Array
// 	})
// 	ProgressBar(audio);
// }

// const ProgressBar = (audio) => {
// 	const progressBarShow = document.getElementById('rackTimeBarAfter');
// 	progressBarShow.style.width = (audio.currentTime / audio.duration * 100) + '%';
// 	let PlayTime = Math.round(audio.currentTime);
// 	let PlayTimeShow = '0:00'
// 	if (PlayTime < 60) {
// 		if (PlayTime / 10 >= 1) {
// 			PlayTimeShow = '0:' + PlayTime % 60;
// 		} else {
// 			PlayTimeShow = '0:0' + PlayTime % 60;
// 		}
// 	} else {
// 		if (PlayTime % 60 / 10 >= 1) {
// 			PlayTimeShow = (Math.round(PlayTime / 60) + ":" + PlayTime % 60);
// 		} else {
// 			PlayTimeShow = (Math.round(PlayTime / 60) + ":0" + PlayTime % 60).toString();
// 		}
// 	}
// 	setTimePlay(PlayTimeShow);
// 	setTimePlayAll(Math.floor(audio.duration / 60) + ':' + Math.round(audio.duration % 60));
// }
// const PrefTrack = () => {
// 	if (idTrackPlay != 0 || idTrackPlay < 0) {
// 		setIdTrackPlay(Number(idTrackPlay - 1))
// 	} else {
// 		setIdTrackPlay(trackPlay.ChouseTrack[0].albomList.length - 1);
// 	}
// 	overwritingContext(trackPlay.ChouseTrack[0].albomList);
// }
// const NextTrack = () => {
// 	console.log(trackPlay.work);
// 	if (idTrackPlay != trackPlay.ChouseTrack[0].albomList.length - 1) {
// 		setIdTrackPlay(Number(idTrackPlay + 1));

// 	} else {
// 		setIdTrackPlay(0);
// 	}
// 	overwritingContext(trackPlay.ChouseTrack[0].albomList);
// }