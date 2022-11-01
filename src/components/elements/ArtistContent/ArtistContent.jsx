import React, { useEffect, useState } from 'react'
import cls from './ArtistContent.module.scss'
import { useNavigate, useParams } from 'react-router-dom';
import GetYouTubeAPI from '../../../API/GetYouTubeAPI';
import Loading from '../Loading/Loading';
import TracksList from '../TracksList/TracksList';
import AlbumList from '../AlbomList/AlbomList'
import AristRelatedItem from '../ArtistRelatedItem/AristRelatedItem';
import Slider from '../Slider/Slider';
import AlbomItem from '../AlbomItem/AlbomItem'
function ArtistContent() {
	const router = useNavigate()
	const params = useParams();
	const [artistContent, setArtistContent] = useState();
	const [loadingContent, setLoadingContent] = useState(false)
	// console.log(params);

	useEffect(() => {
		setLoadingContent(false)
		getAlbomID(params.id_executor);
	}, [params.id_executor])

	// console.log(params);

	async function getAlbomID() {
		const responce = await (GetYouTubeAPI.getArtist(params.id_executor))
		// console.log(responce.result.thumbnail);
		setArtistContent(responce.result)
		setLoadingContent(true)
	}
	return (
		<div className={cls.ArtistConteiner}>
			{
				loadingContent ?
					<div className={cls.ArtistContent}>
						<div className={cls.artistInfo}>
							<div className="">
								<p className={cls.artistName}>{artistContent.name.split('-')[0]}</p>
							</div>
							<div className={cls.preview}>
								<img src={artistContent.thumbnail} alt="" />
							</div>
						</div>
						<div className={cls.ArtistsWork}>
							<div className="top-song">
								<TracksList trackList={artistContent} TitleList='Топ треков' />
							</div>
							<div className="single">
								{/* <Slider title="Синглы">
									{artistContent.singles.map(item =>
										<AlbomItem
											key={item.album_id}
											album_id={item.album_id}
											albomСover={item.thumbnail}
											nameAlbome={item.title}
											// executor={el.artists}
											musiclist={item.songs}
										/>
									)}
								</Slider> */}
							</div>
							<div className="albums">
								{/* <Slider
									title="Похожие исполнители"
									slide={artistContent.albums}
									DesignEl={AlbomItem}
								/> */}
								{/* <Slider title="Альбомы">
									{artistContent.albums.map(item =>
										<AlbomItem
											key={item.album_id}
											album_id={item.album_id}
											albomСover={item.thumbnail}
											nameAlbome={item.title}
											// executor={el.artists}
											musiclist={item.songs}
										/>
									)}
								</Slider> */}
							</div>
							<div className={cls.Artistrelated}>
								<Slider
									title="Похожие исполнители"
									slide={artistContent.related}
									DesignEl={AristRelatedItem}
									paramsOne='artist_id'
									paramsTwo='thumbnail'
									paramsThree='title'
								/>
							</div>
						</div>
					</div>
					:
					<Loading />
			}

		</div>
	)
}

export default ArtistContent