import React, { useState } from 'react'
import AlbomItem from './AlbomItem'
import cls from '../../style/AlbomList.module.css'
import AlbomContent from '../../pages/AlbomPage'
function NewAlbom(props) {
	const [albomLIst, setAlbomList] = useState(props.Albomlist)
	const [showAlbomList, setShowAlbomList] = useState(true)
	const seeMoreAlboms = () => {
		setAlbomList([...albomLIst, albomLIst].flat())
		setShowAlbomList(false);
	}
	const hideMoreAlboms = () => {
		setAlbomList(albomLIst.splice(4, 7))
		setShowAlbomList(true);
	}
	return (
		<div className={cls.newAlbomContent}>
			<div className={cls.newAlbomTop}>
				<div className="">
					<h2 className={cls.newAlbomTitle}>{props.title}</h2>
				</div>
				<div className="">
					{
						showAlbomList ?
							<button
								className={cls.buttonStyle}
								onClick={seeMoreAlboms}>
								Cмотреть больше
							</button>
							: <button
								className={cls.buttonStyle}
								onClick={hideMoreAlboms}>
								Скрыть
							</button>
					}

				</div>
			</div>
			<div className={cls.albomList}>
				{
					albomLIst.map((el, index) =>
						<AlbomItem key={el.nameAlbom + index} albomСover={el.albomСover} nameAlbome={el.nameAlbom} executor={el.executor} musiclist={el.musiclist} />
					)
				}
			</div>
		</div >
	)
}

export default NewAlbom