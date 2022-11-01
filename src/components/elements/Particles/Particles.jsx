import React from 'react'
import Particles from 'react-tsparticles'
import OptionsParticles from './ParticlesOptions.js'
import { loadFull } from "tsparticles";
import './Particles.css'
function Particl() {
	const particlesInit = async (main) => {
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
	};
	return (
		<div className='box'>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={OptionsParticles}
			/>
		</div>
	)
}

export default Particl