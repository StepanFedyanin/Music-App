import React from 'react'
import cls from './PopularAlbum.module.scss';
import { useNavigate } from 'react-router-dom'
function PopularAlbom(props) {
	const router = useNavigate();
	return (
		// 
		<div className={cls.PopularAlbum} onClick={() => router('/albom/' + (props.executor) + "/" + (props.nameAlbome))}>
			<div className={cls.PopularAlbumContent}>
				<div className="nameAlbum">
					<p className={cls.nameAlbumStyle}>{props.albomTitleFromShow}</p>
				</div>
				<div className="executorAlbum">
					<p className={cls.executorAlbumStyle}>{props.executor}</p>
				</div>
				<div className={cls.AlbumInfo}>
					<div className={cls.PhotoAlbum}>
						<img className={cls.PhotoAlbumCover} src={props.albomCover} alt="" />
					</div>
					<div className={cls.descriptionAlbum}>
						<p className={cls.descriptionAlbumStyle}>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopularAlbom