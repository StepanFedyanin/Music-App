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
import { SwiperSlide } from 'swiper/react';
function ArtistContent() {
	const router = useNavigate()
	const params = useParams();
	const [artistContent, setArtistContent] = useState();
	const [loadingContent, setLoadingContent] = useState(false)
	const [lengthSingle, setLengthSingle] = useState()
	useEffect(() => {
		setLoadingContent(false)
		getAlbomID(params.id_executor);
	}, [params.id_executor])

	async function getAlbomID() {
		const responce = await (GetYouTubeAPI.getArtist(params.id_executor))
		// console.log(responce.result.thumbnail);
		setArtistContent(responce.result)
		setLoadingContent(true)
		setLengthSingle(artistContent.singles.length % 2 == 0 ? artistContent.singles.length / 2 : artistContent.singles.length / 3)
		console.log(lengthSingle);
	}
	console.log(artistContent);
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
								{console.log(artistContent.singles)}
								<Slider title="Синглы" length={lengthSingle}>

									{artistContent.singles.map(item =>
										<SwiperSlide key={item.album_id}>
											<AlbomItem
												album_id={item.album_id}
												albomСover={item.thumbnail}
												nameAlbome={item.title}
												// executor={el.artists}
												musiclist={item.songs}
											/>
										</SwiperSlide>

									)}
								</Slider>
							</div>
							<div className="albums">
								<Slider title="Альбомы" length={5}>
									{artistContent.albums.map(item =>
										<SwiperSlide key={item.album_id}>
											<AlbomItem
												album_id={item.album_id}
												albomСover={item.thumbnail}
												nameAlbome={item.title}
												musiclist={item.songs}
											/>
										</SwiperSlide>

									)}
								</Slider>
							</div>
							<div className={cls.Artistrelated}>
								<Slider title="Похожие исполнители" length={5}>
									{
										artistContent.related.map(item =>
											<SwiperSlide key={item.artist_id}>
												<AristRelatedItem
													artist_id={item.artist_id}
													thumbnail={item.thumbnail}
													title={item.title}
												/>
											</SwiperSlide>
										)
									}
								</Slider>
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