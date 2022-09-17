import React from 'react'
import cls from '../style/MyMusic.module.css';
import MyMusicContent from '../components/elements/MyMusicContent'
import NavBarLeft from '../components/elements/NavBarLeft';
import AlbumListComponent from '../components/elements/AlbomList'
import AlbomList from '../API/AlbomCoverInfo.json'
import TrackNav from '../components/elements/TrackNav';

function MyMusic() {
	return (
		<div>
			<div className={cls.MyMusic}>
				<NavBarLeft />
				<div className={cls.Content}>
					<AlbumListComponent title="Новые альбомы" Albomlist={AlbomList} />
					<MyMusicContent />
					<TrackNav />
				</div>
			</div>
		</div>
	)
}

export default MyMusic