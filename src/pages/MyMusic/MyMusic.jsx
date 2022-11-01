import React from 'react'
import cls from './MyMusic.module.css';
import MyMusicContent from '../../components/elements/MyMusicContent/MyMusicContent'
import NavBarLeft from '../../components/elements/NavBarLeft/NavBarLeft';

function MyMusic() {
	return (
		<div>
			<div className={cls.MyMusic}>
				<NavBarLeft />
				<div className={cls.Content}>
					<MyMusicContent />
				</div>
			</div>
		</div>
	)
}

export default MyMusic