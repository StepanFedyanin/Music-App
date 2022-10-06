import React from 'react'
import cls from '../style/AlbomPage.module.css'
import AlbomContent from '../components/elements/AlbomContent/AlbomContent';
import NavBarLeft from '../components/elements/NavBarLeft/NavBarLeft';
import TrackNav from '../components/elements/TrackNav/TrackNav';
function AlbomPage({ visible, setVisible, musiclist, albomСover, nameAlbome, executor }) {

	return (
		<div className={cls.albomId}>
			<NavBarLeft />
			<AlbomContent />
			<TrackNav />
		</div>

	)
}

export default AlbomPage