import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { StackData } from '../data/data';

const StackComponent = () => {
  return (
    <div className='px-2 md:px-8 py-8 bg-slate-900'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-white'>Our Tech Stack</h1>
        <p className='text-lg text-gray-400'>These are the technologies we use</p>
      </div>
      <div>
        <Swiper
          autoplay={{ delay: 1500 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
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
          modules={[Autoplay]}
          className="mySwiper"
        >
          {StackData.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center items-center">
              <img className='h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain' src={item.url} alt={`Stack ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default StackComponent;
