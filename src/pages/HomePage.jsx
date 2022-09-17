import React from 'react';
import NavBarLeft from '../components/elements/NavBarLeft';
import cls from '../style/HomePage.module.css'
import HomeContent from '../components/elements/HomeContent';
import RightContent from '../components/elements/RightContent';
import TrackNav from '../components/elements/TrackNav';
import Loader from '../components/UI/loader/Loader';
function HomePage() {
	const key = 5;
	const name = { text: "Название альбома" };
	const namechel = "испольнитель"
	return (
		<div className={cls.homeContent}>
			<NavBarLeft />
			<HomeContent />
			<RightContent />
			<TrackNav />
			<Loader />
		</div>
	)
}

export default HomePage