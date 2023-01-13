import React, { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './Albom.module.scss'
import iconPlay from '../../resources/trackPlay.svg'
import share from '../../resources/share.svg'
import list_plus from '../../resources/list_plus.svg'
import MyTrackAndAlbum from '../../context/MyTrackAndAlbum'
import addMyMusic from '../../utils/AddMyMusic'
const Albom = ({ album_id, nameAlbome, executor, albomСover, musiclist }) => {
	const router = useNavigate()
	const { myMusic, setMyMusic } = useContext(MyTrackAndAlbum);

	const addMyMusicAlbum = () => {

		const songAlbums = Array.isArray(myMusic.albums) ? myMusic.albums : [];
		songAlbums.unshift(
			addMyMusic.addAlbum(album_id, albomСover, nameAlbome, musiclist)
		)
		setMyMusic({
			"albums": songAlbums,
			"songs": myMusic.songs,
			"trackList": myMusic.trackList
		}
		)
	}
	return (
		<div className={cls.albom}>
			<div className={cls.albomContentHover}>
				<div className={cls.albomContentHover_item}>
					<img src={share} alt="" />
				</div>
				<div className={cls.albomContentHover_item} onClick={() => router('/albom/' + (album_id))}>
					<img src={iconPlay} alt="" />
				</div>
				<div className={cls.albomContentHover_item} onClick={addMyMusicAlbum}>
					<img src={list_plus} alt="" />
				</div>
			</div>
			<div className={cls.albomContent}>
				<div className={cls.albomCover}>
					<img src={albomСover} alt="" />
				</div>
				<div>
					<p className={cls.albomTitle}>{nameAlbome}</p>
				</div>
				<div className="">
					<p className={cls.albomName}>{executor}</p>
				</div>
			</div>
		</div>

	)
}

export default Albom