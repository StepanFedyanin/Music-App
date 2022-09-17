import React from 'react'
import cls from '../../style/HomeContent.module.css'
import AlbumCategory from './AlbumCategory'
import AlbumListCimponent from './AlbomList'
import AlbomList from '../../API/AlbomCoverInfo.json'
import TrackNav from './TrackNav'
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