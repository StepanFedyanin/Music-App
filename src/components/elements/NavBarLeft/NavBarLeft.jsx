import React from 'react'
import { Link, NavLink, BrowserRouter } from 'react-router-dom'
import logo from '../../resources/logo.svg'
import home from '../../resources/homeIcon.svg'
import albums from '../../resources/ilbomicon.svg'
import mymusicicon from '../../resources/mymusicicon.svg'
import recicon from '../../resources/recicon.svg'
import cls from './NavBar.module.css'
import { useState } from 'react'
function NavBarLeft() {
	const [navBarOpen, setNavBarOpen] = useState(false);
	const navList = [cls.navList]
	const [navListChange, setNavListChange] = useState(navList)
	const ModalNavBar = () => {
		if (navBarOpen) {
			setNavListChange(navListChange.split(' ')[0])
			setNavBarOpen(false)
		} else {
			navList.push(cls.active)
			setNavListChange(navList.join(' '))
			setNavBarOpen(true)
		}
	}
	return (
		<div className={cls.navbar}>
			<div className={cls.logo}>
				<img src={logo} alt="logo" />
			</div>
			<nav className={navListChange}>
				<ul className={cls.navLIstItems}>
					<li className={cls.navLIstItem}>
						<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="/HomePage" >
							<div className={cls.itemicon}>
								<img src={home} alt="home" />
							</div>
							<div className={cls.itemblock}>
								<p className={cls.itemtext}>Главная</p>
							</div>
						</NavLink>
					</li>

					<li className={cls.navLIstItem}>
						<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="/newMusic" >
							<div className={cls.itemicon}>
								<img src={albums} alt="albums" />
							</div>
							<div className={cls.itemblock}>
								<p className={cls.itemtext}>Новая музыка</p>
							</div>
						</NavLink>
					</li>
					<li className={cls.navLIstItem}>
						<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="/Recommendation" >
							<div className={cls.itemicon}>
								<img src={recicon} alt="recommendations" />
							</div>
							<div className={cls.itemblock}>
								<p className={cls.itemtext}>Рекомендации</p>
							</div>
						</NavLink>
					</li>
					<li className={cls.navLIstItem}>
						<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="/MyMusic" >
							<div className={cls.itemicon}>
								<img src={mymusicicon} alt="mymusic" />
							</div>
							<div className={cls.itemblock}>
								<p className={cls.itemtext}>Моя музыка</p>
							</div>
						</NavLink>
					</li>
				</ul>
			</nav>
			<div onClick={ModalNavBar} className={cls.burger}>
				<span></span>
			</div>
		</div >
	)
}

export default NavBarLeft