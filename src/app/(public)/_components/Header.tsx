'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import MagnifyingGlass from '@/assets/images/icon/MagnifyingGlass.svg'
import Phone from '@/assets/images/icon/Phone.svg'
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();

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
            className={`sticky -mt-[10svh] top-0 z-50 p-[28px]  flex items-center justify-around transition-colors duration-300 ${isSticky ? 'bg-[#7a1849]' : 'bg-[#7a1849]'
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
                    <li onClick={() => router.push("/about-us")}>درباره ما</li>
                    <li onClick={() => router.push("/call-with-us")}>ارتباط با ما</li>
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
                <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50! md:text-base  text-xs ' onClick={() => { }} >ورود و افتتاح حساب</Button>

                <Drawer direction='right'  >
                    <DrawerTrigger className='md:hidden' ><Button className='bg-white textb'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </Button></DrawerTrigger>
                    <DrawerContent >
                        <DrawerHeader>
                            <DrawerTitle>ایده آل کوشا</DrawerTitle>
                            <DrawerDescription>منوی سایت</DrawerDescription>
                        </DrawerHeader>
                        <ul className='text-black flex text  flex-col gap-5 px-3 lg:text-base mt-5 '>
                            <li>معاملات</li>
                            <Separator className="" />
                            <li>سامانه‌های آنلاین</li>
                            <Separator className="" />
                            <li>آکادمی ایده‌آل</li>
                            <Separator className="" />
                            <li>اخبار و رسانه</li>
                            <Separator className="" />
                            <DrawerClose asChild>
                                <li onClick={() => router.push("/about-us")}>درباره ما</li>
                            </DrawerClose>
                            <Separator className="" />
                            <DrawerClose asChild>
                                <li onClick={() => router.push("/call-with-us")}>ارتباط با ما</li>
                            </DrawerClose>
                        </ul>
                    </DrawerContent>
                </Drawer>
            </div>

        </header>
    )
}

