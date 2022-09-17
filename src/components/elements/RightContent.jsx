import React from 'react'
import cls from '../../style/RightContent.module.css'
import MusicCategory from './MusicCategory'
import TracItem from './TracItem'

function RightContent() {
	return (
		<div className={cls.rightBar}>
			<div className={cls.rightBarFix}>
				<div className="">
					<div className="">
						<h1 className={cls.TopTrackTitle}>Топ треки</h1>
					</div>
					<TracItem />
					<TracItem />
					<TracItem />
					<TracItem />
					<TracItem />
				</div>
				<div className="">
					<MusicCategory />
				</div>
			</div>
		</div>
	)
}

export default RightContent