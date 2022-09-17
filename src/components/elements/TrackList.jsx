import React from 'react'
import TracItem from './TracItem'
import cls from '../../style/TrackList.module.css'

function TrackList({ tracks, visible, setVisible }) {
	const clsStyle = [cls.trackListSerch]
	if (visible) {
		clsStyle.push(cls.active)
	}
	if (!tracks.length) {
		return (
			<h1 style={{ textAlign: "center" }}>
				Не найдено!!!
			</h1>
		)
	}
	return (
		<div className={clsStyle.join(' ')}>
			{
				tracks.map((track, index) =>
					<TracItem
						key={track.trackName.split(' ').join('') + index}
						number={index + 1} trackCover={track.trackCover}
						trackName={track.trackName}
						trackExecutor={track.trackExecutor}
						tracklink={track.trackLink}
					/>

				)
			}
		</div>
	)
}

export default TrackList