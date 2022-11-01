import React from 'react'
import Particl from '../Particles/Particles'
import cls from './Loading.module.scss'
import vanilPlay from '../../resources/vanilPlay.png'
function Loading() {


	return (
		<div className={cls.Loading}>
			<div className={cls.LoadingContent}>
				<div className={cls.LoadingAnimationBlock}>
					<img className={cls.LoadingAnimationImg} src={vanilPlay} alt="vanilPlay" />
				</div>
				<div className="">
					<p className={cls.LoadingText}>Загружаем альбомы</p>
				</div>
			</div>
			<Particl />
		</div>
	)
}

export default Loading