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
function Slider({ children, length }) {
	console.log(children);
	return (
		<>
			<Swiper
				slidesPerView={length}
				spaceBetween={30}
				slidesPerGroup={2}
				loop={true}
				loopFillGroupWithBlank={true}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{
					children
				}
			</Swiper>
		</>


	)
}

export default Slider