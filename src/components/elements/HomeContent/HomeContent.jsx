import React from 'react'
import cls from './HomeContent.module.css'
import AlbumCategory from '../AlbumCategory/AlbumCategory'
import AlbumListCimponent from '../AlbomList/AlbomList'
import AlbomList from '../../../API/AlbomCoverInfo.json'
import TrackNav from '../TrackNav/TrackNav'
function HomeContent() {
	return (
		<div className={cls.homeContent}>
			<AlbumCategory />
			<AlbumListCimponent title="Новые альбомы" Albomlist={AlbomList} />
			<AlbumListCimponent title="Популярные альбомы" Albomlist={AlbomList} />
		</div>
	)
}

export default HomeContent