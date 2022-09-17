import React from 'react'
import cls from './basicbutton.module.css'

function basicbutton({ children }) {
	return (
		<div>
			<button className={cls.basicbutton}>
				{children}
			</button>
		</div>
	)
}

export default basicbutton