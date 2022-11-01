import React, { useState } from 'react'
import AlbomItem from '../AlbomItem/AlbomItem'
import cls from './AlbomList.module.scss'
function AlbomLIst({ albomListName, setAlbomListName, ...props }) {
	const [albomLIst, setAlbomList] = useState(props.Albomlist)
	const [showAlbomList, setShowAlbomList] = useState(true)
	const [transformAlbomList, setTransformAlbomList] = useState([cls.albomList])
	const seeMoreAlboms = () => {
		setAlbomListName(prev => [...prev, 'MPREb_LpzvzvD6dn0', 'MPREb_zioMNYHmNn9', 'MPREb_qX0GBqUTGKc', 'MPREb_CEZw6Rwz6En'])
		setShowAlbomList(false);
		// setTransformAlbomList(transformAlbomList.join(' ').toString());
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
			<div className={transformAlbomList}>
				{
					albomLIst.map((el, index) =>
						<AlbomItem
							key={el.title + index}
							album_id={el.album_id}
							albomСover={el.thumbnail}
							nameAlbome={el.title}
							// executor={el.artists}
							musiclist={el.songs}
						/>
					)
				}
			</div>
		</div >
	)
}

export default AlbomLIst