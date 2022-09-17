import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from '../../style/Albom.module.css'
import AlbomContent from '../../pages/AlbomPage'
import photoPlay from '../resources/bgPlayAlbom.jpg'
import TracItem from './TracItem'
const Albom = (props) => {
	const router = useNavigate()
	return (
		<div onClick={() => router('/albom/' + (props.executor) + "/" + (props.nameAlbome))} className={cls.albom}>
			<div className={cls.albomContent}>
				<div className={cls.albomCover}>
					<div className={cls.photoAbove}>
						<img src={photoPlay} alt="" />
					</div>
					<div className="">
						<img src={props.albomСover} alt="" />
					</div>
				</div>
				<div>
					<p className={cls.albomTitle}>{props.nameAlbome}</p>
				</div>
				<div className="">
					<p className={cls.albomName}>{props.executor}</p>
				</div>
			</div>
		</div>

	)
}

export default Albom