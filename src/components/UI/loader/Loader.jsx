import React from 'react'
import loaderPhoto from '../../resources/loader.png'
import cls from '../../../style/Loader.module.css'
import { useEffect } from 'react'
import { useState } from 'react';
function Loader() {
	const loadingTextList = ['Загрузка...', 'Подождите ещё немного...', 'Почти готово...'];
	const [loadingTextId, setLoadingTextId] = useState(0)

	setInterval(() => {
		if (loadingTextId == 2) {
			setLoadingTextId(0)
		}
		else {
			setLoadingTextId(loadingTextId + 1)
		}
	}, 5000)
	return (
		<div className={cls.loader}>
			<div className={cls.loaderContent}>
				<div>
					<img className={cls.loaderAnim} src={loaderPhoto} alt="loader" />
				</div>
				<div className={cls.LoadingTextBlock}>
					<p className={cls.LoadingText}>{loadingTextList[loadingTextId]}</p>
				</div>
			</div>

		</div>
	)
}

export default Loader