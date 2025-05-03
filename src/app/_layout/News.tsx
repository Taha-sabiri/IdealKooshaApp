
'use client'

import React from 'react'
import news1 from '@/assets/images/news.png';
import news2 from '@/assets/images/new2.png';
import news3 from '@/assets/images/new3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export default function News() {
    return (
        <div className='pt-14 flex flex-col justify-center h-[80svh] '>

            <div className='border-t border-b border-black/20 h-[30svh] grid grid-cols-2 px-[10svw]'>
                <div className=' w-full h-full border-r border-l border-black/20 flex justify-center items-center  flex-col gap-4'>
                    <h2 className='text-4xl text-koosha-pr font-bold '>اخبار و رسانه</h2>
                    <Button variant={"outline"} className=' text-koosha-pr border-koosha-pr! bg-transparent! hover:bg-koosha-pr! hover:text-white '>ماموریت ایده‌آل</Button>

                </div>
                <div className=' w-full h-full border-l  border-black/20 relative  '>
                    <Image
                        src={news1}
                        alt="Sample Image "
                        fill
                        className="object-cover grayscale-100 hover:grayscale-0 duration-300 transition-all"
                    />
                    <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
                        <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                    </div>
                </div>
            </div>
            <div className=' w-full  px-[10svw]   border-b border-black/20 h-full'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}

                    navigation={{
                        enabled: true,
                        nextEl: '.prvButton',
                        prevEl: '.nextButton'
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },

                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >



                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news1}
                            alt="Sample Image "
                            fill
                            className="object-cover grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-gray-600 text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news2}
                            alt="Sample Image "
                            fill
                            className="object-cover object-right grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news3}
                            alt="Sample Image "
                            fill
                            className="object-cover grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-gray-600 text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news1}
                            alt="Sample Image "
                            fill
                            className="object-cover grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news2}
                            alt="Sample Image "
                            fill
                            className="object-cover object-right grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news3}
                            alt="Sample Image "
                            fill
                            className="object-cover grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-gray-600 text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-red-400 w-full h-full'>
                        <Image
                            src={news1}
                            alt="Sample Image "
                            fill
                            className="object-cover grayscale-100 hover:grayscale-0 duration-300 transition-all"
                        />
                        <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
                            <p>رشد سهم های DPS محور در شش ماهه دوم سال ۱۴۰۳</p>
                        </div>

                    </SwiperSlide>
                    <div className="prvButton"><ArrowLeftIcon /></div>
                    <div className="nextButton"><ArrowRightIcon /></div>

                </Swiper>
            </div>
        </div>
    )
}
