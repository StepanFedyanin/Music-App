import React from 'react';
import NavBarLeft from '../../components/elements/NavBarLeft/NavBarLeft';
import cls from './HomePage.module.css'
import HomeContent from '../../components/elements/HomeContent/HomeContent';
import RightContent from '../../components/elements/RightContent/RightContent';
function HomePage() {
	return (
		<div className={cls.homeContent}>
			<NavBarLeft />
			<div className={cls.homeAdaptive}>
				<HomeContent />
				<RightContent />
			</div>
		</div>
	)
}

export default HomePage