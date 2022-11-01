import React, { useContext } from 'react'
import cls from './TrackItem.module.scss'
import settingIcon from '../../resources/coolicon.svg'
import { useState } from 'react'
import LikeIcon from '../../UI/icon/likeicon/LikeIcon'
import TrackInfo from '../../context/TrackSave'
import AdditionalTool from '../AdditionalTool/AdditionalTool'
import { useNavigate } from 'react-router-dom'
import MyTrackAndAlbum from '../../context/MyTrackAndAlbum'
import addMyMusic from '../../utils/AddMyMusic'
function TracItem(props) {
	const router = useNavigate()
	const { trackPlay, setTrackPlay } = useContext(TrackInfo);
	const { myMusic, setMyMusic } = useContext(MyTrackAndAlbum);
	const [booleanShow, setBooleanShow] = useState(false);
	const styleText = [cls.trackTitle];
	// const styleItem = [cls.trackItem]
	const [styleItem, setStyleItem] = useState([cls.trackItem])

	const OpenTrack = () => {
		setTrackPlay({
			"work": true,
			"id_song": props.id_song,
			"trackCover": props.trackCover,
			"trackName": props.trackName,
			"trackList": props.trackList,
			"duration": props.trackDuration
		})
		setStyleItem(pref => [pref, cls.trackActive])
	}
	const addMyMusicSong = () => {
		const songChar = Array.isArray(myMusic.songs) ? myMusic.songs : [];
		songChar.unshift(
			addMyMusic.addSong(props.id_song, props.trackList, props.trackCover, props.trackName, props.trackDuration)
		)
		setMyMusic({
			"albums": myMusic.albums,
			"songs": songChar,
			"trackList": myMusic.trackList
		}
		)
	}
	return (
		<div onClick={OpenTrack} className={styleItem.join(' ')} data-tracklink={props.id_song}>
			<div className={cls.trackInfo}>
				<div className="">
					<p className={cls.trackIndex}>{props.number}</p>
				</div>
				<div className={cls.trackImg}>
					<img src={props.trackCover} alt="" />
				</div>
				<div className="">
					<div className={cls.trackTitleBlock}>
						<p className={styleText.join(' ')}>{props.trackName
							.split('-')[1]
						}</p>
					</div>
					<div onClick={(e) => e.stopPropagation()} className={cls.trackExecutorBlock}>
						<p
							onClick={() => router('/executor/' + (props.trackExecutor))}
							className={cls.trackExecutor}>
							{props.trackName
								.split('-')[0]
							}
						</p>
					</div>
				</div>
			</div>
			<div className={cls.trackTools} onClick={(e) => e.stopPropagation()}>
				<div className={cls.toolTime}>
					<p className={cls.toolTimeDuration}>{
						props.trackDuration ?
							(Math.floor(props.trackDuration / 60) + ':' + Math.floor(props.trackDuration % 60)) : "данных нет"
					}</p>
				</div>
				<div className={cls.IconLIke}>
					<LikeIcon addMyMusicSong={addMyMusicSong} likeIcon={props.likeIcon} />
				</div>
				<div className={cls.settingBlock}>
					<button className={cls.toolSetting} onClick={() => booleanShow ? setBooleanShow(false) : setBooleanShow(true)}>
						<img src={settingIcon} alt="setting" />
					</button>
				</div>
				<AdditionalTool BooleanShow={booleanShow} />
			</div>
		</div>
	)
}

export default TracItem