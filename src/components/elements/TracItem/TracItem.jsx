import React, { useContext } from 'react'
import cls from './TrackItem.module.css'
import settingIcon from '../../resources/coolicon.svg'
import { useState } from 'react'
import LikeIcon from '../../UI/icon/likeicon/LikeIcon'
import TrackInfo from '../../context/TrackSave'
import AlbomsListTrack from '../../../API/AlbomListItem'
import TopTrackList from '../../../API/TopTracks'
import AdditionalTool from '../AdditionalTool/AdditionalTool'
function TracItem(props) {
	const { trackPlay, setTrackPlay } = useContext(TrackInfo);
	const [stopTrack, setStopTrack] = useState(true);
	const [booleanShow, setBooleanShow] = useState(false)
	const OpenTrack = () => {
		if (stopTrack) {
			setTrackPlay({
				"trackTimeNow": trackPlay.trackTimeNow,
				"work": true,
				"ChouseTrack": TrackListItems(),
				"trackCover": props.trackCover,
				"trackExecutor": props.trackExecutor,
				"trackLink": props.tracklink,
				"trackName": props.trackName,
				"idChouseTrack": (Number(props.number) - 1)
			})
			setStopTrack(false)
		}
		else {
			setTrackPlay({
				"trackTimeNow": trackPlay.trackTimeNow,
				"work": false,
				"ChouseTrack": TrackListItems(),
				"trackCover": props.trackCover,
				"trackExecutor": props.trackExecutor,
				"trackLink": props.tracklink,
				"trackName": props.trackName,
				"idChouseTrack": (Number(props.number) - 1)
			})
			setStopTrack(true)
		}
		setBooleanShow(false)
	}
	const TrackListItems = () => {
		if (props.trackСategory == 'AlbomsListTrack') {
			let returnAlbomList = AlbomsListTrack.filter(el => el.albomTitle == props.trackListName.split(' ').join(''))
			return returnAlbomList;
		}
		if (props.trackСategory == 'TopTrackList') {
			return TopTrackList;
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
					<div>
						<p className={cls.trackTitle}>{props.trackName}</p>
					</div>
					<div >
						<p className={cls.trackExecutor}>{props.trackExecutor}</p>
					</div>
				</div>
			</div>
			<div className={cls.trackTools} onClick={(e) => e.stopPropagation()}>
				<div className="">
					{/* <p className={cls.toolTime}>{Math.floor(props.trackLink.duration / 60) + ':' + Math.round(props.trackLink.duration % 60)}</p> */}
				</div>
				<div className={cls.IconLIke}>
					<LikeIcon likeIcon={props.likeIcon} />
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