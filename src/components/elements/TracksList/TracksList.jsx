import React from 'react'
import cls from './TracksList.module.css'
import TracItem from '../TracItem/TracItem'

function TracksList({ trackList, trackСategory, trackListName, ...props }) {
	return (
		<div>
			<div className={cls.TitleListBlock}>
				<p className={cls.TitleList}>{props.TitleList}</p>
			</div>
			<div className="">
				{
					trackList.map((item, index) =>
						< TracItem
							key={"item.trackName" + item.trackName}
							number={index + 1} trackCover={item.trackCover}
							trackName={item.trackName}
							trackExecutor={item.trackExecutor}
							tracklink={item.trackLink}
							trackСategory={trackСategory}
							trackListName={trackListName}
						/>
					)
				}
			</div>
		</div>
	)
}

export default TracksList