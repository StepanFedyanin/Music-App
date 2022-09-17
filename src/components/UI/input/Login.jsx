import React from 'react'
import cls from '../../../style/Login.module.css'

function Login(props) {
	return (
		<div>
			<input className={cls.loginInput} type="text" placeholder={props.value} />
		</div>
	)
}

export default Login