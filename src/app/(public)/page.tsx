'use client'

import slider from '@/assets/images/slider.png';
import news1 from '@/assets/images/news.png';
import news2 from '@/assets/images/new2.png';
import news3 from '@/assets/images/new3.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ServiceItem } from './_components/ServiceItem';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import shape from '@/assets/images/shape.png';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon, AxeIcon } from 'lucide-react';

export default function Home() {

  const chartData = [
    { month: "1399", desktop: 186, mobile: 80, device: 30 },
    { month: "1400", desktop: 305, mobile: 200, device: 50 },
    { month: "1401", desktop: 237, mobile: 120, device: 10 },
    { month: "1402", desktop: 73, mobile: 190, device: 30 },

  ]
  const chartConfig = {
    desktop: {
      label: "طلا",
      color: "hsl(var(--chart-3))",
    },
    mobile: {
      label: "مسکن",
      color: "hsl(var(--chart-2))",
    },
    device: {
      label: "ارز",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (
    <div
      className="  relative z-10"

    >
      {/* slider */}
      <div className="bg-koosha-pr w-full relative h-[80svh] " >
        <Image
          src={slider}
          alt="Sample Image"
          fill
          className='object-cover '
        />
      </div>

      {/* sec2 */}

      <div className='grid grid-cols-1  grid-rows-4 md:grid-cols-2 md:grid-rows-2  min-h-[80svh]  '>
        <ServiceItem titr='همراهی اختصاصی' title='در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.' />
        <ServiceItem titr='مشاوره رایگان' title='در کارگزاری ایده آل، ما ارزش همراهی و حمایت را به خوبی درک می‌کنیم. به همین دلیل، مشاوره رایگان برای تمامی مشتریان جدید فراهم کرده‌ایم. تیم متخصصان ما آماده‌اند تا با ارائه راهنمایی‌های دقیق و شخصی‌سازی شده، شما را در مسیر سرمایه‌گذاری موفق همراهی کنند. با ارسال درخواست مشاوره و اولین قدم خود را با اطمینان بردارید.' />
        <ServiceItem titr='آموزش حرفه‌ای بورس' title='در کارگزاری ایده آل، ما به اهمیت آموزش در سرمایه‌گذاری آگاهانه باور داریم. به همین دلیل، آموزش حرفه‌ای بورس را به صورت آنلاین ارائه می‌دهیم تا شما بتوانید از هر کجا و در هر زمانی به دانش و مهارت‌های لازم برای موفقیت در بازار بورس دسترسی داشته باشید. دوره‌های ما توسط اساتید مجرب طراحی شده و تمامی جنبه‌های سرمایه‌گذاری را پوشش می‌دهند.' />
        <div className='border-b border-r w-full border-koosha-pr   p-15 md:p-30   gap-3 flex flex-col  '>
          <div className=' flex h-full flex-col justify-center items-center text-balance gap-3 '>
            <h1 className='text-gray-400 text-3xl font-bold text-wrap whitespace-normal'>از آموزش تا معامله <br /><span className=' text-koosha-pr'>همراهتان هستیــم </span></h1>
            <Button variant={"outline"} className=' text-koosha-pr border-koosha-pr! bg-transparent! hover:bg-koosha-pr! hover:text-white '>ماموریت ایده‌آل</Button>
          </div>
        </div>
      </div>

      {/* sec3 - Chart */}
      <div className='px-[13svw]  py-30  text-center'>
        <h1 className=' text-3xl text-koosha-pr font-bold'>مقایسه بازدهی بازار‌های مختلف در ۵ سال اخیر</h1>

        <div className=' flex gap-2 mt-11 mb-4'>
          <div className='bg-green-400 text-white rounded-2xl p-3 md:text-base text-xs'> بورس</div>
          <div className='bg-koosha-pr text-white rounded-2xl p-3 md:text-base text-xs'> سپرده بانکی</div>
          <div className='bg-yellow-500 text-white rounded-2xl p-3 md:text-base text-xs'> ارز</div>
          <div className='bg-blue-500 text-white rounded-2xl p-3 md:text-base text-xs'> مسکن</div>
        </div>
        <ChartContainer config={chartConfig} >
          <AreaChart
            accessibilityLayer
            data={chartData}

            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-koosha-pr)"
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-koosha-pr)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-koosha-orange)"
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-koosha-orange)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDevice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-koosha-greenChart)"
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-koosha-greenChart)"
                  stopOpacity={0.1}
                />
              </linearGradient>

            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.5}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.5}
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <Area
              dataKey="device"
              type="natural"
              fill="url(#fillDevice)"
              fillOpacity={0.5}
              stroke="var(--color-device)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>

      {/* sec4 - slong */}

      <div className=' flex justify-center items-center md:min-h-[20svh] min-h-[10svh] w-full p-5 mb-24 text-center' >
        <Image
          src={shape}
          alt="Sample Image"
          width={31}
          className=''
        />
        <h1 className='text-gray-400 text-3xl md:text-4xl font-bold text-center'>سرمایه‌گذاری در بورس، <span className='text-koosha-pr'>ایده‌آل</span> است</h1>
        <Image
          src={shape}
          alt="Sample Image"
          width={31}
          className=' transform scale-x-[-1] '
        />
      </div>

      {/* sec4 - samane */}
      <div className='  flex-col items-center h-[80svh] w-full  bg-koosha-pr hidden md:flex'>

        <div className=' border-b h-[20svh] border-white/50 w-full  flex'>

          <div className='min-w-[25svw] border-l border-white/50 h-full flex'>
            <ul className='text-white flex gap-20 text-xl! lg:text-base not-md:hidden self-end w-full justify-center items-center h-[10svh] border-t border-white/50 '>
              <li className='text-koosha-pr'>کوشا</li>
            </ul>
          </div>
          <ul className='text-white flex gap-20 text-xl! lg:text-base not-md:hidden self-end w-full justify-start h-[10svh]  items-center border-t border-white/50 '>
            <li className="h-full  flex justify-center items-center border-b-2 px-24">برخط</li>
            <li className="h-full  flex justify-center items-center px-24">آفلاین</li>
            <li className="h-full  flex justify-center items-center  px-24">کلاسیک</li>
          </ul>
        </div>

        <div className=' h-full border-white/50 w-full flex  '>
          <div className='min-w-[25svw] border-l border-white/50 h-full text-white text-xl justify-center items-center  flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>سامانه‌های<br /> معاملاتی  ایده‌آل</h1>
            <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50!  ' onClick={() => { }} >اطلاعات بیشتر</Button>

          </div>

          <div className=' flex flex-col gap-3 justify-center items-start px-52'>
            <h1 className=' text-white font-bold text-2xl'>سامانه‌های معاملاتی  بر خط ایده‌آل</h1>
            <p className=' text-white text-xs mb-5'>در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.</p>
            <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50!  self-end ' onClick={() => { }} >اطلاعات بیشتر</Button>

          </div>
        </div>

      </div>

      {/* sec4 - news */}

      <div className='py-14 flex flex-col justify-center h-[80svh] '>

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
              nextEl:'.prvButton',
              prevEl:'.nextButton'
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
              <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
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
              <div className='absolute bottom-0 left-0 w-full p-3 bg-koosha-pr text-white'>
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
            <div className="prvButton"><ArrowLeftIcon/></div>
            <div className="nextButton"><ArrowRightIcon/></div>
       
          </Swiper>
        </div>
      </div>
    </div>
  );
}


