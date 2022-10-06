import React from 'react'
import cls from './RightContent.module.css'
import MusicCategory from '../MusicCategory/MusicCategory'
import TopTrackList from '../../../API/TopTracks.js'
import TracksList from '../TracksList/TracksList'
function RightContent() {
	return (
		<div className={cls.rightBar}>
			<div className={cls.rightBarFix}>
				<div className="">
					<div className="">
						<h1 className={cls.TopTrackTitle}>Топ треки</h1>
					</div>
					<div className="">
						{
							<TracksList trackList={TopTrackList} trackСategory="TopTrackList" />
						}
					</div>
				</div>
				<div className="">
					<MusicCategory />
				</div>
			</div>
		</div>
	)
}

export default RightContent