import React, { useState, useContext } from 'react'
import cls from './TrackNav.module.css'
import nextBtnIcon from '../../resources/nexttreckItem.svg';
import prefBtnIcon from '../../resources/prefTreckItem.svg';
import randomBtnIcon from '../../resources/randomTreckItom.svg';
import playBtnIcon from '../../resources/playTrackItem.svg';
import trackAdd from '../../resources/trackAdd.svg'
import trackVoice from '../../resources/trackVoice.svg'
import iconPlay from '../../resources/trackPlay.svg'
import LikeIcon from '../../UI/icon/likeicon/LikeIcon';
import TrackInfo from '../../context/TrackSave';
import { useEffect } from 'react';
import RepeatTrack from '../RepeatTrack/RepeatTrack'

import AlbomsListItem from '../../../API/AlbomListItem'

function TrackNav() {
	const [playChange, setPlayChange] = useState(false);
	const [timePlay, setTimePlay] = useState('00:00');
	const [timePlayAll, setTimePlayAll] = useState('0:00');
	const { trackPlay, setTrackPlay } = useContext(TrackInfo);
	const [idTrackPlay, setIdTrackPlay] = useState(trackPlay.idChouseTrack);
	const Stop = () => {
		const audio = document.getElementById('audio');
		audio.pause();
		setPlayChange(false);
	}
	const Play = () => {
		const audio = document.getElementById('audio');
		audio.play();
		setPlayChange(true);
	}
	useEffect(() => {
		if (trackPlay.work) {
			Play();
		} else {
			Stop();
		}
		changeLoadProgresBar();
	}, [trackPlay.work])
	const changeLoadProgresBar = () => {
		const audio = document.getElementById('audio');
		// audio.currentTime = trackPlay.trackTimeNow
	}
	const ProgressUpdate = () => {
		const audio = document.getElementById('audio');
		setTrackPlay({
			"trackTimeNow": audio.currentTime,
			"work": trackPlay.work,
			"ChouseTrack": trackPlay.ChouseTrack,
			"trackCover": trackPlay.trackCover,
			"trackExecutor": trackPlay.trackExecutor,
			"trackLink": trackPlay.tracklink,
			"trackName": trackPlay.trackName,
			"idChouseTrack": trackPlay.idChouseTrack
		})
		ProgressBar(audio);
	}

	const ProgressBar = (audio) => {
		const progressBarShow = document.getElementById('rackTimeBarAfter');
		progressBarShow.style.width = (audio.currentTime / audio.duration * 100) + '%';
		let PlayTime = Math.round(audio.currentTime);
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
		setTimePlayAll(Math.floor(audio.duration / 60) + ':' + Math.round(audio.duration % 60));
	}
	const PrefTrack = () => {
		if (idTrackPlay != 0 || idTrackPlay < 0) {
			setIdTrackPlay(Number(idTrackPlay - 1))
		} else {
			setIdTrackPlay(trackPlay.ChouseTrack[0].albomList.length - 1);
		}
		overwritingContext(trackPlay.ChouseTrack[0].albomList);
	}
	const NextTrack = () => {
		console.log(trackPlay.work);
		if (idTrackPlay != trackPlay.ChouseTrack[0].albomList.length - 1) {
			setIdTrackPlay(Number(idTrackPlay + 1));

		} else {
			setIdTrackPlay(0);
		}
		overwritingContext(trackPlay.ChouseTrack[0].albomList);
	}
	const overwritingContext = (trackList) => {
		setTrackPlay({
			"trackTimeNow": trackPlay.trackTimeNow,
			"work": true,
			"ChouseTrack": trackPlay.ChouseTrack,
			"trackCover": trackList[idTrackPlay].trackCover,
			"trackExecutor": trackList[idTrackPlay].trackExecutor,
			"trackLink": trackList[idTrackPlay].trackLink,
			"trackName": trackList[idTrackPlay].trackName,
			"idChouseTrack": (idTrackPlay)
		})
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
					<button onClick={PrefTrack}>
						<img src={prefBtnIcon} alt="" />
					</button>
				</div>
				<div className={cls.toolsIcon}>
					{
						playChange ?
							<button id='stopAudio' onClick={Stop}>
								<img src={playBtnIcon} alt="" />
							</button>
							: <button id='playAudio' onClick={Play}>
								<img src={iconPlay} alt="" />
							</button>
					}
				</div>
				<div className={cls.toolsIcon}>
					<button onClick={NextTrack}>
						<img src={nextBtnIcon} alt="" />
					</button>
				</div>
				<div className={cls.toolsIcon}>
					<RepeatTrack />
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
								<p className={cls.trackTitleStyle}>{trackPlay.trackName}</p>
							</div>
							<div className={cls.trackExecutor}>
								<p className={cls.trackExecutorStyle}>{trackPlay.trackExecutor}</p>
							</div>
						</div>
						<audio
							className={cls.audioHide}
							id='audio' controls='controls'
							onTimeUpdate={ProgressUpdate}
							src={trackPlay.trackLink}>
						</audio>
					</div>
				</div>
				<div className={cls.TrackInfo}>
					<div className={cls.trackTime}>
						<p>{timePlay}</p>
					</div>
					<div className={cls.trackTimeBarAfter}>
						<div id='rackTimeBarAfter' className={cls.trackTimeBarBefore}>
						</div>
					</div>
					<div className={cls.trackAllTime}>
						<p>{timePlayAll}</p>
					</div>
				</div>
			</div>
			<div className={cls.trackSetting}>
				<div className={cls.toolsIcon}>
					<img src={trackAdd} alt="" />
				</div>
				<div className={cls.toolsIcon}>
					<LikeIcon />
				</div>
				<div className={cls.toolsIcon}>
					<img src={trackVoice} alt="" />
				</div>
			</div>
		</div>
	)
}
export default TrackNav