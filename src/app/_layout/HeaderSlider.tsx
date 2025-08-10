
"use client"
import Image from 'next/image';
import slider from '@/assets/images/slider.png';
import sliderMobile from '@/assets/images/SliderMobile.png';
import slider2 from '@/assets/images/Slider2.png';
import slider2Mobile from '@/assets/images/Slider2Mobile.png';
import slider3 from '@/assets/images/Slider3.png';
import slider3Mobile from '@/assets/images/Slider3Mobile.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export const HeaderSlider = () => {
    return <div className="bg-koosha-pr w-full relative h-[80svh] ">
        {/* <Image
            src={slider}
            alt="Sample Image"
            fill
            className='object-cover hidden md:flex ' />
        <Image
            src={sliderMobile}
            alt="Sample Image"
            fill
            className='object-cover block md:hidden  ' /> */}
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000 }}
            navigation={{

                enabled: true,
                nextEl: '.prvButton',
                prevEl: '.nextButton'
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"

        >



            <SwiperSlide className='bg-koosha-pr w-full h-full'>
                <Image
                    src={slider}
                    alt="Sample Image"
                    fill
                    className='object-cover hidden md:flex ' />
                <Image
                    src={sliderMobile}
                    alt="Sample Image"
                    fill
                    className='object-cover block md:hidden  ' />
            </SwiperSlide>

            <SwiperSlide className='bg-koosha-prw-full h-full'>
                <Image
                    src={slider2}
                    alt="Sample Image"
                    fill
                    className='object-cover hidden md:flex ' />
                <Image
                    src={slider2Mobile}
                    alt="Sample Image"
                    fill
                    className='object-cover block md:hidden  ' />
            </SwiperSlide>

            <SwiperSlide className='bg-red-400 w-full h-full'>
                <Image
                    src={slider}
                    alt="Sample Image"
                    fill
                    className='object-cover hidden md:flex ' />
                <Image
                    src={sliderMobile}
                    alt="Sample Image"
                    fill
                    className='object-cover block md:hidden  ' />
            </SwiperSlide>
            <SwiperSlide className='bg-red-400 w-full h-full'>
                <Image
                    src={slider3}
                    alt="Sample Image"
                    fill
                    className='object-cover hidden md:flex ' />
                <Image
                    src={slider3Mobile}
                    alt="Sample Image"
                    fill
                    className='object-cover block md:hidden  ' />
            </SwiperSlide>
            <div className=' absolute md:w-30 md:left-[10svw] md:bottom-[10svh] bottom-[50%]  w-full '>
                <div className="prvButton rounded-2xl bg-pink-600/50! text-white "><ArrowLeftIcon /></div>
                <div className="nextButton rounded-2xl bg-pink-600/50! text-white"><ArrowRightIcon /></div>
            </div>

        </Swiper>
    </div>;
}
