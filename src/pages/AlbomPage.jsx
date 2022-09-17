import React from 'react'
import cls from '../style/AlbomPage.module.css'
import AlbomContent from '../components/elements/AlbomContent';
import NavBarLeft from '../components/elements/NavBarLeft';
import TrackNav from '../components/elements/TrackNav';
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