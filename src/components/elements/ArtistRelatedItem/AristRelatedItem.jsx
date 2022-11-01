import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './ArtistRelatedItem.module.scss'
function AristRelatedItem({ artist_id, thumbnail, title }) {
	const router = useNavigate()

	const changeArtist = () => {
		router('/executor/' + artist_id)
	}

	return (

		<div className={cls.AristRelatedItem} onClick={changeArtist}>
			<div className={cls.AristRelatedPhotoBlock}>
				<img className={cls.AristRelatedPhotoThumbnail} src={thumbnail} alt="" />
			</div>
			<div className={cls.AristRelatedItemTitle}>
				<p className={cls.AristRelatedItemText}>{title}</p>
			</div>
		</div>
	)
}

export default AristRelatedItem