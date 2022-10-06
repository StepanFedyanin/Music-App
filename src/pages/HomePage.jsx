import React from 'react';
import NavBarLeft from '../components/elements/NavBarLeft/NavBarLeft';
import cls from '../style/HomePage.module.css'
import HomeContent from '../components/elements/HomeContent/HomeContent';
import RightContent from '../components/elements/RightContent/RightContent';
import TrackNav from '../components/elements/TrackNav/TrackNav';
import apiYandex from '../API/YandexMusic'
function HomePage() {
	// console.log(apiYandex.getAll());
	return (
		<div className={cls.homeContent}>
			<NavBarLeft />
			<div className={cls.homeAdaptive}>
				<HomeContent />
				<RightContent />
			</div>
			<TrackNav />
		</div>
	)
}

export default HomePage