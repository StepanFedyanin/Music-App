import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../../components/UI/input/Login/Login'
import cls from './LoginApp.module.css'
import Basicbutton from '../../components/UI/button/Basicbutton'
import Password from '../../components/UI/input/Password/Password'
function LoginApp() {
	return (
		<div>
			<div className={cls.loginApp}>
				<div className="">
				</div>
				<div className={cls.loginModal}>
					<div className={cls.loginContent}>
						<div className="registration">
							<Login value="E-mail" />
							<Login value="Имя" />
							<Password />
						</div>
						<div className="">
							<Login value="E-mail" />
							<Password />
						</div>
					</div>
					<div className="">
						<div className="">
							<a href="/homePage">
								<Basicbutton>Войти</Basicbutton>
							</a>
						</div>
					</div >

				</div >
			</div >
		</div >
	)
}

export default LoginApp