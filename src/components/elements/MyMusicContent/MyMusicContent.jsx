import React from 'react';
import cls from './MyMusicContent.module.css'
import AlbumListComponent from '../AlbomList/AlbomList';
import AlbomList from '../../../API/AlbomCoverInfo.json'
import TracksList from '../TracksList/TracksList';
import HateLove from '../../../API/HateLove';
function MyMusicContent() {
	return (
		<div className={cls.MyMusicContent}>
			<div className=""></div>
			<div className="">
				<AlbumListComponent title="Мои альбомы" Albomlist={AlbomList} />
				<AlbumListComponent title="Мои плейлисты" Albomlist={AlbomList} />
			</div>
			<TracksList trackList={HateLove} trackСategory="" trackListName="" TitleList="Моя музыка" />
		</div>
	)
}
export default MyMusicContent