import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './Albom.module.css'
const Albom = (props) => {
	const router = useNavigate()
	return (
		<div onClick={() => router('/albom/' + (props.executor) + "/" + (props.nameAlbome))} className={cls.albom}>
			<div className={cls.albomContent}>
				<div className={cls.albomCover}>
					<img src={props.albomСover} alt="" />
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