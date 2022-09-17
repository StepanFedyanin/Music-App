import React, { useState } from 'react'
import cls from '../../../style/Password.module.css'
import EyeClosed from '../../resources/EyeClosed.svg'
import EyeOpen from '../../resources/EyeOpen.svg'


function Password() {
	const [showPassword, useShowPassword] = useState(false);
	const [showPasswordText, useShowPasswordText] = useState("password");

	const ShowPassword = () => {
		useShowPassword(true);
		useShowPasswordText("text")
	}
	const HidePassword = () => {
		useShowPassword(false);
		useShowPasswordText("password")
	}
	return (
		<div className={cls.PassvordConteiner}>
			<input className={cls.PassvordInput} type={showPasswordText} placeholder='Пароль' />
			{
				showPassword
					?
					<button className={cls.ChangeIcon} onClick={HidePassword}>
						<img src={EyeOpen} alt="" />
					</button>
					:
					<button className={cls.ChangeIcon} onClick={ShowPassword}>
						<img src={EyeClosed} alt="" />
					</button>

			}
		</div>
	)
}

export default Password