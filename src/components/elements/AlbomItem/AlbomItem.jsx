import React, { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './Albom.module.scss'
import iconPlay from '../../resources/trackPlay.svg'
import share from '../../resources/share.svg'
import list_plus from '../../resources/list_plus.svg'
import MyTrackAndAlbum from '../../context/MyTrackAndAlbum'
import addMyMusic from '../../utils/AddMyMusic'
const Albom = ({ nameAlbome, executor }) => {
	const router = useNavigate()
	const { myMusic, setMyMusic, albomСover, ...props } = useContext(MyTrackAndAlbum);

	const addMyMusicAlbum = () => {
		console.log('props.album_id', props.album_id);
		console.log('props.albomСover', props.albomСover);
		console.log('props.nameAlbome', props.nameAlbome);
		console.log('props.musiclist', props.musiclist);

		const songAlbums = Array.isArray(myMusic.albums) ? myMusic.albums : [];
		songAlbums.unshift(
			addMyMusic.addAlbum(props.album_id, props.albomСover, props.nameAlbome, props.musiclist)
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
				<div className={cls.albomContentHover_item} onClick={() => router('/albom/' + (props.album_id))}>
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