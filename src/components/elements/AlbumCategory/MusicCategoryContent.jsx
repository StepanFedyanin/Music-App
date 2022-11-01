import React, { useState } from 'react'
import Serch from '../../UI/input/Serch/Serch'
import ButtonBasic from '../../UI/button/Basicbutton'
import cls from './MusicCategoryContent.module.scss'
import iconFavorites from '../../resources/favorites.svg'
import useTrackList from '../../../hooks/useFilterTrack';
import TrackList from '../TrackListSerch/TrackListSerch'


import { useEffect } from 'react'
function MusicCategoryContent({ CategoryList }) {
	const [tracks, setTracks] = useState([])
	const [filter, setFilter] = useState({ query: "" });
	const [modal, setModal] = useState(false);
	const tracksSortedList = useTrackList(tracks, filter.query);

	const [caregoryItem, setCaregoryItem] = useState(false);
	const [caregoryItemIndex, setCaregoryItemIndex] = useState(0);

	useEffect(() => {
		setCaregoryItem(CategoryList[caregoryItemIndex])
		setIntervalItem(5000);
	}, [])
	const setIntervalItem = () => {
		setInterval(() => {
			setCaregoryItemIndex(caregoryItemIndex => {
				ChangeItem(caregoryItemIndex)
				return caregoryItemIndex + 1
			})
		}, 5500)
	}
	const ChangeItem = (index) => {
		if (index == 3) {
			setCaregoryItemIndex(0)
		}
		setCaregoryItem(CategoryList[index])
	}


	const choiceCategoryItem = (e) => {
		const item = CategoryList.filter(itemCategory => itemCategory.Category == e.currentTarget.getAttribute('category'))
		setCaregoryItem(item[0])
	}

	useEffect(() => {
		if (tracksSortedList.length > 0 && filter.query != "") {
			setModal(true)
		} else {
			setModal(false)
		}
	}, [tracksSortedList])

	return (
		<div className={cls.albomCategory}>
			<div className={cls.BannerPhoto}>
				<img src={caregoryItem.BannerPhoto} alt="" />
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
								<button onClick={choiceCategoryItem} category="RandB" id='albomNavEl' className={cls.albomNavEl}>R&B</button>
							</li>
							<li className={cls.albomNavItem}>
								<button onClick={choiceCategoryItem} category="Pop" id='albomNavEl' className={cls.albomNavEl}>Pop</button>
							</li>
							<li className={cls.albomNavItem}>
								<button onClick={choiceCategoryItem} category="Rap" id='albomNavEl' className={cls.albomNavEl}>Rap</button>
							</li>
							<li className={cls.albomNavItem}>
								<button onClick={choiceCategoryItem} category="HipHop" id='albomNavEl' className={cls.albomNavEl}>Hip Hop</button>
							</li>
						</ul>
					</nav>
					<div className={cls.albomLisen}>
						<div className="">
							<div className="">
								<p className={cls.albomExecutor}>{caregoryItem.Executor}</p>
							</div>
							<div className="">
								<p className={cls.albomTitle}>{caregoryItem.NameTrack}</p>
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

export default MusicCategoryContent