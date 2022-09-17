import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import homePage from '../../pages/HomePage'
import logo from '../resources/logo.svg'
import home from '../resources/homeIcon.svg'
import albums from '../resources/ilbomicon.svg'
import listenlatericon from '../resources/listenlatericon.svg'
import myilbomicon from '../resources/myilbomicon.svg'
import mymusicicon from '../resources/mymusicicon.svg'
import recicon from '../resources/recicon.svg'

import cls from '../../style/NavBar.module.css'
function NavBarLeft() {
	return (
		<div className={cls.navbar}>
			<div className={cls.navbarFix}>
				<div className={cls.logo}>
					<img src={logo} alt="logo" />
				</div>
				<nav>
					<ul>
						<li>
							<Link className={cls.itemactive} to="/HomePage" >
								<div className={cls.itemicon}>
									<img src={home} alt="home" />
								</div>
								<div className={cls.itemblock}>
									<p className={cls.itemtext}>Главная</p>
								</div>
							</Link>
						</li>
						<li>
							<Link className={cls.listitem} to="/PopularAlboms" >
								<div className={cls.itemicon}>
									<img src={albums} alt="albums" />
								</div>
								<div className={cls.itemblock}>
									<p className={cls.itemtext}>Альбомы</p>
								</div>
							</Link>
						</li>
						<li>
							<Link className={cls.listitem} to="/MyMusic" >
								<div className={cls.itemicon}>
									<img src={mymusicicon} alt="mymusic" />
								</div>
								<div className={cls.itemblock}>
									<p className={cls.itemtext}>Моя музыка</p>
								</div>
							</Link>
						</li>
						<li>
							<Link className={cls.listitem} to="/Recommendation" >
								<div className={cls.itemicon}>
									<img src={recicon} alt="recommendations" />
								</div>
								<div className={cls.itemblock}>
									<p className={cls.itemtext}>Рекомендации</p>
								</div>
							</Link>
						</li>
						<li>
							<Link className={cls.listitem} to="/MyAlboms" >
								<div className={cls.itemicon}>
									<img src={myilbomicon} alt="myalbums" />
								</div>
								<div className={cls.itemblock}>
									<p className={cls.itemtext}>Мои альбомы</p>
								</div>
							</Link>
						</li>
						<li>
							<Link className={cls.listitem} to="/LeterPage">
								<div className={cls.itemicon}>
									<img src={listenlatericon} alt="later" />
								</div>
								<div className={cls.itemblock}>
									<p className={cls.itemtext}>Послушать позже</p>
								</div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div >
	)
}

export default NavBarLeft