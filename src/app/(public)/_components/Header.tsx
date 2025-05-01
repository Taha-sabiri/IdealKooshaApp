'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import MagnifyingGlass from '@/assets/images/icon/MagnifyingGlass.svg'
import Phone from '@/assets/images/icon/Phone.svg'
import { Button } from '@/components/ui/button';

export default function Header() {

    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 p-[28px]  flex items-center justify-around transition-colors duration-300 ${isSticky ? 'bg-gray-700' : 'bg-[#7a1849]'
                }`}
        >
            <div className=' flex items-center '>
                <Image
                    src={logo}
                    alt="Sample Image"
                    width={99}
                    height={29}
                    className='ml-24'
                />

                <ul className='text-white flex gap-5 text-xs lg:text-base not-md:hidden '>
                    <li>معاملات</li>
                    <li>سامانه‌های آنلاین</li>
                    <li>آکادمی ایده‌آل</li>
                    <li>اخبار و رسانه</li>
                    <li>درباره ما</li>
                    <li>ارتباط با ما</li>
                </ul>
            </div>
            <div className=' flex gap-2.5 items-center '>
                <div className=' flex justify-center items-center gap-1  not-md:hidden'>
                    <span className=' text-white'>021-92005220</span>
                    <Image
                        src={Phone}
                        alt="Sample Image"
                        width={20}
                        height={20}

                    />

                </div>
                <Button variant="ghost" className='text-white hover:text-white bg-transparent! hover:bg-accent/50!  ' onClick={() => { }} >
                    <Image
                        src={MagnifyingGlass}
                        alt="Sample Image"
                        width={20}
                        height={20}
                        className=''
                    />
                </Button>
                <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50!  ' onClick={() => { }} >ورود و افتتاح حساب</Button>


            </div>

        </header>
    )
}

