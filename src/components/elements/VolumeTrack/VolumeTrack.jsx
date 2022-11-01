import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import trackVoice from '../../resources/trackVoice.svg'
import cls from './VolumeTrack.module.scss'
function VolumeTrack({ changeValueVoice }) {
	const [showVoice, setShowVoice] = useState(false);
	const [style, setStyle] = useState([cls.VoiceBlockRange]);
	const changeBlockVoice = () => {
		if (showVoice) {
			setStyle([cls.VoiceBlockRange])
			setShowVoice(false)

		} else {
			setShowVoice(true)
			setStyle(prev => [prev, cls.active])
		}
	}
	const changeValue = (e) => {
		changeValueVoice(e.currentTarget.value);
	}
	return (
		<div className={cls.VoiceTools}>
			<div onClick={changeBlockVoice} className={cls.VoiceToolsIcon}>
				<img src={trackVoice} alt="trackVoice" />
			</div>
			<div className={style.join(' ')}>
				<input onChange={changeValue} className={cls.VoiceinputRange} min='0' max='1' step="0.01" type="range" />
			</div>
		</div>
	)
}

export default VolumeTrack