import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import cls from '../../style/AlbomContent.module.css'
import TracItem from './TracItem'
import AlbomsItems from '../../API/AlbomListItem'
import { useEffect } from 'react';
import { useState } from 'react';
import TrackInfo from '../context/TrackSave';
function AlbomContent() {
	const params = useParams();
	const [trackList, setTrackList] = useState(false);
	const { trackPlay, setTrackPlay } = useContext(TrackInfo);


	const [featuredAlbum, setFeaturedAlbum] = useState([{ "albomList": [{}, {}] }]);
	const filterSerch = (params) => {
		const serchList = AlbomsItems.filter(el => el.albomTitle == params.split(' ').join(''));
		setFeaturedAlbum(serchList[0].albomList);
		setTrackList(true)
	}

	useEffect(() => {
		filterSerch(params.nameAlbome);
	}, []);
	return (
		<div className={cls.content}>
			{
				featuredAlbum.map((item, index) =>
					< TracItem
						key={params.nameAlbome.split(' ').join('') + index}
						number={index + 1} trackCover={item.trackCover}
						trackName={item.trackName}
						trackExecutor={item.trackExecutor}
						tracklink={item.trackLink}
					/>,
					(item) =>
						console.log(item)
				)

			}

		</div>
	)
}

export default AlbomContent
