import React from 'react'
import cls from './TracksList.module.scss'
import TracItem from '../TracItem/TracItem'

function TracksList({ trackList, TitleList }) {
	return (
		<div className={cls.TrackList}>
			<div className={cls.TitleListBlock}>
				<p className={cls.TitleList}>{TitleList}</p>
			</div>
			<div className="">
				{
					trackList.songs.map((item, index) =>
						< TracItem
							key={item.id}
							id_song={item.id}
							trackList={trackList.songs}
							number={index + 1}
							trackCover={trackList.thumbnail || item.thumbnail}
							trackName={item.name}
							trackDuration={item.duration}
						/>
					)
				}
			</div>
		</div>
	)
}

export default TracksList