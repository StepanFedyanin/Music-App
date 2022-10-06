import React from 'react'
import cls from '../style/MyMusic.module.css';
import MyMusicContent from '../components/elements/MyMusicContent/MyMusicContent'
import NavBarLeft from '../components/elements/NavBarLeft/NavBarLeft';
import TrackNav from '../components/elements/TrackNav/TrackNav';

function MyMusic() {
	return (
		<div>
			<div className={cls.MyMusic}>
				<NavBarLeft />
				<div className={cls.Content}>
					<MyMusicContent />
					<TrackNav />
				</div>
			</div>
		</div>
	)
}

export default MyMusic