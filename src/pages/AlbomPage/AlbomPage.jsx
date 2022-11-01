import React from 'react'
import cls from './AlbomPage.module.css'
import AlbomContent from '../../components/elements/AlbomContent/AlbomContent';
import NavBarLeft from '../../components/elements/NavBarLeft/NavBarLeft';
function AlbomPage() {

	return (
		<div className={cls.albomId}>
			<NavBarLeft />
			<AlbomContent />
		</div>

	)
}

export default AlbomPage