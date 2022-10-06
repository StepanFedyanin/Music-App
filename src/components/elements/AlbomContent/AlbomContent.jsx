import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import cls from './AlbomContent.module.css'
import AlbomsItems from '../../../API/AlbomListItem'
import { useEffect } from 'react';
import { useState } from 'react';

import TracksList from '../TracksList/TracksList';
function AlbomContent() {
	const router = useNavigate()
	const params = useParams();
	const [trackList, setTrackList] = useState(false);
	const [featuredAlbum, setFeaturedAlbum] = useState({ "albomList": [], "albomCover": "", "albomTitle": "", "executor": "", "albomTitleFromShow": " " });
	useEffect(() => {
		const serchList = AlbomsItems.filter(el => el.albomTitle == params.nameAlbome.split(' ').join(''));
		setFeaturedAlbum(serchList[0]);
	}, [])

	return (
		<div className={cls.containerContent}>
			<div className={cls.content}>
				<div className={cls.AlbomInfo}>
					<div className={cls.AlbomCover}>
						<img src={featuredAlbum.albomCover} alt="" />
					</div>
					<div className="">
						<div className="">
							<p className={cls.AlbomName}>
								{
									featuredAlbum.albomTitleFromShow
								}
							</p>
						</div>
						<div className="" onClick={() => router('/executor/' + (featuredAlbum.executor))}>
							<p className={cls.AlbomExecutor}>
								{
									featuredAlbum.executor
								}
							</p>
						</div>
					</div>
				</div>
				<div className="">
					<TracksList trackList={featuredAlbum.albomList} trackСategory="AlbomsListTrack" trackListName={params.nameAlbome} />
				</div>


			</div>
		</div>

	)
}

export default AlbomContent
