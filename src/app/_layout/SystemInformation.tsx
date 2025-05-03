'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

export default function SystemInformation() {
  return (
    <div className='  flex-col items-center h-[80svh] w-full  bg-koosha-pr hidden md:flex'>

    <div className=' border-b h-[20svh] border-white/50 w-full  flex'>

      <div className='min-w-[25svw] border-l border-white/50 h-full flex'>
        <ul className='text-white flex gap-20 text-xl! lg:text-base not-md:hidden self-end w-full justify-center items-center h-[10svh] border-t border-white/50 '>
          <li className='text-koosha-pr'>کوشا</li>
        </ul>
      </div>
      <ul className='text-white flex gap-20 text-xl! lg:text-base not-md:hidden self-end w-full justify-start h-[10svh]  items-center border-t border-white/50 '>
        <li className="h-full  flex justify-center items-center border-b-2 px-24 sm:px-10">برخط</li>
        <li className="h-full  flex justify-center items-center px-24 sm:px-10">آفلاین</li>
        <li className="h-full  flex justify-center items-center  px-24 sm:px-10">کلاسیک</li>
      </ul>
    </div>

    <div className=' h-full border-white/50 w-full flex  '>
      <div className='min-w-[25svw] border-l border-white/50 h-full text-white text-xl justify-center items-center  flex flex-col gap-10'>
        <h1 className='text-4xl font-bold'>سامانه‌های<br /> معاملاتی  ایده‌آل</h1>
        <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50!  ' onClick={() => { }} >اطلاعات بیشتر</Button>

      </div>

      <div className=' flex flex-col gap-3 justify-center items-start px-52  not-lg:px-20  '>
        <h1 className=' text-white font-bold text-2xl'>سامانه‌های معاملاتی  بر خط ایده‌آل</h1>
        <p className=' text-white text-base mb-5'>در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.</p>
        <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50!  self-end ' onClick={() => { }} >اطلاعات بیشتر</Button>

      </div>
    </div>

  </div>
  )
}
