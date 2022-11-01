import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ExecutorName({ artists }) {
	const router = useNavigate()

	const [modalArtistBoolean, setModalArtistBoolean] = useState(false)
	const modalArtist = (e) => {
		console.log();
		router('/executor/' + e.currentTarget.getAttribute("data_artist_id"))
	}
	return (
		<div>
			{
				artists.map((el) =>
					<div onClick={modalArtist} data_artist_id={el.artist_id} key={el.artist_id}>
						<p>{el.name}</p>
					</div>
				)
			}
		</div>
	)
}

export default ExecutorName