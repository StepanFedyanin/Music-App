import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import AristRelatedItem from "../ArtistRelatedItem/AristRelatedItem";
function Slider({ title, slide, DesignEl, paramsOne, paramsTwo, paramsThree }) {
	console.log(DesignEl);
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{
					slide.map(el =>
						<SwiperSlide key={slide + el.artist_id}>
							<DesignEl paramsOne={el.artist_id} paramsTwo={el.thumbnail} paramsThree={el.title} />
						</SwiperSlide>
					)
				}
			</Swiper>
		</>


	)
}

export default Slider