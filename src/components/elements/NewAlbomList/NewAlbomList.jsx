import React, { useState } from 'react'
import cls from './NewAlbomList.module.scss'
import PopularAlbom from '../PopularAlbom/PopularAlbom'
function NewAlbomList({ NewAlbomList }) {
	const [showAlbomList, setShowAlbomList] = useState(true)
	const [albomLIst, setAlbomList] = useState(NewAlbomList)
	const seeMoreAlboms = () => {
		setAlbomList([...albomLIst, albomLIst].flat())
		setShowAlbomList(false);

	}
	const hideMoreAlboms = () => {
		setAlbomList(albomLIst.splice(4, 7))
		setShowAlbomList(true);

	}
	return (
		<div className={cls.NewMusicAlbum}>
			<div className={cls.AlbomHeader}>
				<div className="">
					<p className={cls.albomTitleStyle}>Новые альбомы</p>
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
			<div className={cls.NewMusicAlbumList}>
				{
					albomLIst.map((item, index) =>
						<PopularAlbom
							key={"NewAlbom№" + index + "_" + item.executor + "-" + item.albomTitle}
							albomTitleFromShow={item.albomTitleFromShow}
							executor={item.executor}
							albomCover={item.albomCover}
							description={item.description}
							nameAlbome={item.albomTitle}
						/>
					)
				}
			</div>

		</div>
	)
}

export default NewAlbomList