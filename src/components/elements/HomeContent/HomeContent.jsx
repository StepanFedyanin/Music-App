import React from 'react';
import cls from './HomeContent.module.scss';
import MusicCategoryContent from '../AlbumCategory/MusicCategoryContent';
import GetYouTubeAPI from '../../../API/GetYouTubeAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import AlbumList from '../AlbomList/AlbomList';
import CategoryList from '../../../API/AlbomCategoryList';
import Loading from '../Loading/Loading';
function HomeContent() {
	// const [albomListName, setAlbomListName] = useState(['MPREb_wDYXgANIpCh', 'MPREb_95zHEuUDzsE', 'MPREb_oobcMEOnJhx', 'MPREb_HCRkgWPkf9K'])
	const [albomListName, setAlbomListName] = useState(['MPREb_wDYXgANIpCh', 'MPREb_95zHEuUDzsE', 'MPREb_oobcMEOnJhx', 'MPREb_HCRkgWPkf9K'])
	const [albomList, setAlbomList] = useState([])
	const [loadingContent, setLoadingContent] = useState(false)
	useEffect(() => {
		getAlbomList(albomListName);
		// console.log(albomListName);
	}, [])
	// const item = 'MPREb_wDYXgANIpCh'
	async function getAlbomList(AlbomArray) {
		console.log(AlbomArray);
		for (const item of AlbomArray) {
				setTimeout(async () => {
				const responce = await (GetYouTubeAPI.getAlbom(item))
				responce.result.album_id = item;
				setAlbomList(prev => [...prev, responce.result])
				if (AlbomArray.indexOf(item) == AlbomArray.length - 1) {
					setLoadingContent(true);
				}
			}, (AlbomArray.indexOf(item) + 1) * 1500)
		}
	}
	console.log(albomList);
	return (
		<div className={cls.homeContent}>
			{
				loadingContent ?
					<div className="">
						<MusicCategoryContent CategoryList={CategoryList} />
						<AlbumList
							title="Новые альбомы"
							Albomlist={albomList}
							albomListName={albomListName}
							setAlbomListName={setAlbomListName}
						/>
						<AlbumList
							title="Популярные альбомы"
							Albomlist={albomList}
							albomListName={albomListName}
							setAlbomListName={setAlbomListName}
						/>
					</div>
					:
					<Loading />
			}

		</div>
	)
}

export default HomeContent