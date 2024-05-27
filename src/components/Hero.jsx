import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';



const Hero=()=>{
    return(
        <section className="mt-3 relative overflow-hidden text-white">
           <div className="container max-w-screen-x1 mx-auto">
           <Swiper 
                spaceBetween={50}
                slidesPerView={1}
            >
           <SwiperSlide> 
                <img src="/images/banner/banner1.png" alt="" className="rounded-md h-60 md:h-auto" />
            </SwiperSlide>
           <SwiperSlide>
                <img src="/images/banner/banner2.png" alt="" className="rounded-md h-60 md:h-auto" />
            </SwiperSlide>
           <SwiperSlide>
                <img src="/images/banner/banner3.png" alt="" className="rounded-md h-60 md:h-auto" />
            </SwiperSlide>
                    
            </Swiper>
           </div>
        
        </section>
    )
}

export default Hero