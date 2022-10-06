import React, { useState } from 'react'
import Serch from '../../UI/input/Serch/Serch'
import bgPhoto from '../../resources/BannerPop.png'
import ButtonBasic from '../../UI/button/Basicbutton'
import cls from './AlbumCategory.module.css'
import iconFavorites from '../../resources/favorites.svg'
import useTrackList from '../../../hooks/useFilterTrack';
import AlbomListItem from '../../../API/AlbomListItem'
import TrackList from '../TrackListSerch/TrackListSerch'
import { useEffect } from 'react'
function AlbumCategory() {
	const [tracks, setTracks] = useState(AlbomListItem)
	const [filter, setFilter] = useState({ query: "" });
	const [modal, setModal] = useState(false);
	const tracksSortedList = useTrackList(tracks, filter.query);
	useEffect(() => {
		if (tracksSortedList.length > 0 && filter.query != "") {
			setModal(true)
		} else {
			setModal(false)
		}
	}, [tracksSortedList])
	return (
		<div className={cls.albomCategory}>
			<div>
				<img src={bgPhoto} alt="" />
			</div>
			<div className={cls.albomContent}>
				<div className="">
					<Serch filter={filter} setFilter={setFilter} value="Поиск артистов, треков, альбомов" />
					<div>
						<TrackList
							tracks={tracksSortedList}
							visible={modal}
							setVisible={setModal}
						/>
					</div>
				</div>
				<div className={cls.albomTools}>
					<nav className={cls.albomNav}>
						<ul className={cls.albomNavList}>
							<li className={cls.albomNavItem}>
								<button className={cls.albomNavEl}>R&B</button>
							</li>
							<li className={cls.albomNavItem}>
								<button className={cls.albomNavEl}>Pop</button>
							</li>
							<li className={cls.albomNavItem}>
								<button className={cls.albomNavEl}>Rap</button>
							</li>
							<li className={cls.albomNavItem}>
								<button className={cls.albomNavEl}>Ballad</button>
							</li>
							<li className={cls.albomNavItem}>
								<button className={cls.albomNavEl}>Country</button>
							</li>
							<li className={cls.albomNavItem}>
								<button className={cls.albomNavEl}>Hip Hop</button>
							</li>
						</ul>
					</nav>
					<div className={cls.albomLisen}>
						<div className="">
							<div className="">
								<p className={cls.albomExecutor}>Post Malone</p>
							</div>
							<div className="">
								<p className={cls.albomTitle}>Circles</p>
							</div>
						</div>
						<div className={cls.albomChoice}>
							<div className={cls.albomFavorites}>
								<img src={iconFavorites} alt="" />
							</div>
							<ButtonBasic>Play</ButtonBasic>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AlbumCategory