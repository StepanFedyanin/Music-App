import React from 'react'
import cls from './NewMusic.module.css'
import NewAlbomList from '../NewAlbomList/NewAlbomList'
import NewAlbom from '../../../API/NewAlbom'
import TracksList from '../TracksList/TracksList'
import TracksListSend from '../../../API/MillionDollarDepression'
function NewMusic() {
	return (
		<div className={cls.NewMusicContent}>
			<div className={cls.NewMusicContainer}>
				<NewAlbomList NewAlbomList={NewAlbom} />
				<div className={cls.trackList}>
					<TracksList trackList={TracksListSend} trackСategory="AlbomsListNewTrack" trackListName="w" TitleList="Новые треки" />
				</div>
			</div>
		</div>
	)
}

export default NewMusic