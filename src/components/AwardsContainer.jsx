
import Award from './Award'
import './AwardsContainer.css'



// carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

import maplenecekMelumatlar from '../mukafatmelumatlari.json'
import { useEffect } from 'react';
const AwardsContainer = () => {


    useEffect(()=>{
        fetch('../mukafatmelumatlari.json')
        .then(res=>res.json())
        .then(m => console.log(m))
    }, [])
  return (
    <div className='awards-container'>

<Swiper
        slidesPerView={3}
        spaceBetween={30}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          modules={[Autoplay]}

        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        className="mySwiper"
      >

{
    maplenecekMelumatlar.map(birmelumat=>(
        // console.log(birmelumat.basliq)
        <SwiperSlide>
             <Award 
        meqaleninBasligi={birmelumat.basliq}
        meqaleninIconu = {birmelumat.ikon}
        meqaleninMetni = {birmelumat.paraqraf}
        
        />
        </SwiperSlide>
       
    ))
}

</Swiper>
    
       

    </div>
  )
}

export default AwardsContainer