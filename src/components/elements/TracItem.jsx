import React, { useContext } from 'react'
import cls from '../../style/TrackItem.module.css'
import likeIcon from '../resources/nolikeicon.png'
import settingIcon from '../resources/coolicon.svg'
import TrackNav from './TrackNav'
import { useState } from 'react'
import LikeIcon from '../UI/icon/likeicon/LikeIcon'
import TrackInfo from '../context/TrackSave'
function TracItem(props) {
	const { trackPlay, setTrackPlay } = useContext(TrackInfo);
	const [stopTrack, setStopTrack] = useState(true);
	const OpenTrack = () => {
		if (stopTrack) {
			setTrackPlay({
				"trackTimeNow": trackPlay.trackTimeNow,
				"work": true,
				"ChouseTrack": [],
				"trackCover": props.trackCover,
				"trackExecutor": props.trackExecutor,
				"trackLink": props.tracklink,
				"trackName": props.trackName
			})
			setStopTrack(false)
		}
		else {
			setTrackPlay({
				"trackTimeNow": trackPlay.trackTimeNow,
				"work": false,
				"ChouseTrack": [],
				"trackCover": props.trackCover,
				"trackExecutor": props.trackExecutor,
				"trackLink": props.tracklink,
				"trackName": props.trackName
			})
			setStopTrack(true)
		}
	}
	return (
		<div onClick={OpenTrack} className={cls.trackItem} data-tracklink={props.trackLink}>
			<div className={cls.trackInfo}>
				<div className="">
					<p className={cls.trackIndex}>{props.number}</p>
				</div>
				<div className={cls.trackImg}>
					<img src={props.trackCover} alt="" />
				</div>
				<div className="">
					<div className={cls.trackTitle}>
						<p>{props.trackName}</p>
					</div>
					<div className={cls.trackExecutor}>
						<p>{props.trackExecutor}</p>
					</div>
				</div>
			</div>
			<div className={cls.trackTools}>
				<div className="">
					{/* <p className={cls.toolTime}>{Math.floor(props.trackLink.duration / 60) + ':' + Math.round(props.trackLink.duration % 60)}</p> */}
				</div>
				<div className="">
					<LikeIcon likeIcon={props.likeIcon} />
				</div>
				<div className="">
					<button className={cls.toolSetting}><img src={settingIcon} alt="setting" /></button>
				</div>
			</div>
		</div>
	)
}

export default TracItem