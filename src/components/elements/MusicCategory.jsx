import React from 'react'
import cls from '../../style/MusicCategory.module.css'
import popPhoto from '../resources/CategoryPop.jpg';
import HipHopPhoto from '../resources/CategoryHipHop.jpg';
import RockPhoto from '../resources/CategoryRock.jpg';
import RomancePhoto from '../resources/CategoryRomance.jpg';




function MusicCategory() {
	return (
		<div>
			<h2 className={cls.categoryTitle}>Категории</h2>
			<div className={cls.categoryList}>
				<div className={cls.categoryItem}>
					<div className="">
						<img src={popPhoto} alt="popPhoto" />
					</div>
					<div className={cls.categoryName}>Pop</div>
				</div>
				<div className={cls.categoryItem}>
					<div className="">
						<img src={HipHopPhoto} alt="HipHopPhoto" />
					</div>
					<div className={cls.categoryName}>Pop</div>
				</div>
				<div className={cls.categoryItem}>
					<div className="">
						<img src={RockPhoto} alt="RockPhoto" />
					</div>
					<div className={cls.categoryName}>Pop</div>
				</div>
				<div className={cls.categoryItem}>
					<div className="">
						<img src={RomancePhoto} alt="RomancePhoto" />
					</div>
					<div className={cls.categoryName}>Pop</div>
				</div>
			</div>
		</div>
	)
}

export default MusicCategory