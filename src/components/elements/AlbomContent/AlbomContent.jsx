import React, { useContext, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import cls from './AlbomContent.module.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import TracksList from '../TracksList/TracksList';
import GetYouTubeAPI from '../../../API/GetYouTubeAPI';
import Loading from '../Loading/Loading';
import ExecutorName from '../exexutor/ExecutorName';

function AlbomContent() {
	const [trackList, setTrackList] = useState();
	const [loadingContent, setLoadingContent] = useState(false)
	// const trackList = useRef();

	const router = useNavigate()
	const params = useParams();
	// console.log(params);

	useEffect(() => {
		getAlbomID();
	}, [])

	async function getAlbomID() {
		const responce = await (GetYouTubeAPI.getAlbom(params.album_id))
		console.log(responce);
		setTrackList(responce.result)
		setLoadingContent(true)
	}

	return (
		<div className={cls.containerContent}>
			{
				loadingContent ?
					<div className={cls.content}>
						<div className={cls.AlbomInfo}>
							<div className={cls.AlbomCover}>
								<img src={trackList.thumbnail} alt="" />
							</div>
							<div className="">
								<div className="">
									<p className={cls.AlbomName}>
										{
											trackList.title
										}
									</p>
								</div>
								<div className="">
									{/* <p className={cls.AlbomExecutor}> */}
									<ExecutorName artists={trackList.artists} />
									{/* </p> */}
								</div>
							</div>
						</div>
						<div className="">
							<TracksList trackList={trackList} TitleList='' />
						</div>


					</div>
					:
					<div className=""></div>
				// <Loading />

			}
		</div>

	)
}

export default AlbomContent
