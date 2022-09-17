import React from 'react'
import cls from '../../../style/Search.module.css'
import IconSerch from '../../resources/search.jpg'
export default function Serch({ filter, setFilter }) {
	return (
		<div className="">
			<div className={cls.serch}>
				<div className={cls.serchIcon}>
					<img src={IconSerch} alt="iconSerch" />
				</div>
				<div className={cls.serchBlock}>
					<input className={cls.serchInput}
						type="text"
						// placeholder={props.value}
						onChange={e => setFilter({ ...filter, query: e.target.value })}
					/>
				</div>
			</div>
		</div>

	)
}
