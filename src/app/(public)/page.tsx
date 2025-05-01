'use client'

import slider from '@/assets/images/slider.png';
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
      className="  relative "

    >
      {/* slider */}
      <div className="bg-koosha-pr  w-full  " >
        <Image
          src={slider}
          alt="Sample Image"

          className='ml-24'
        />
      </div>

      {/* sec2 */}

      <div className='grid grid-cols-1  lg:grid-cols-2 min-h-[80svh]  '>
        <ServiceItem titr='همراهی اختصاصی' title='در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.' />
        <ServiceItem titr='مشاوره رایگان' title='در کارگزاری ایده آل، ما ارزش همراهی و حمایت را به خوبی درک می‌کنیم. به همین دلیل، مشاوره رایگان برای تمامی مشتریان جدید فراهم کرده‌ایم. تیم متخصصان ما آماده‌اند تا با ارائه راهنمایی‌های دقیق و شخصی‌سازی شده، شما را در مسیر سرمایه‌گذاری موفق همراهی کنند. با ارسال درخواست مشاوره و اولین قدم خود را با اطمینان بردارید.' />
        <ServiceItem titr='آموزش حرفه‌ای بورس' title='در کارگزاری ایده آل، ما به اهمیت آموزش در سرمایه‌گذاری آگاهانه باور داریم. به همین دلیل، آموزش حرفه‌ای بورس را به صورت آنلاین ارائه می‌دهیم تا شما بتوانید از هر کجا و در هر زمانی به دانش و مهارت‌های لازم برای موفقیت در بازار بورس دسترسی داشته باشید. دوره‌های ما توسط اساتید مجرب طراحی شده و تمامی جنبه‌های سرمایه‌گذاری را پوشش می‌دهند.' />
        <div className='border-b border-r w-full border-koosha-pr   p-30  gap-3 flex flex-col  '>
          <div className=' flex h-full flex-col justify-center items-center text-balance gap-3 '>
            <h1 className='text-gray-400 text-3xl font-bold text-wrap whitespace-normal'>از آموزش تا معامله <br /><span className=' text-koosha-pr'>همراهتان هستیــم </span></h1>
            <Button variant={"outline"} className=' text-koosha-pr border-koosha-pr! bg-transparent! hover:bg-koosha-pr! hover:text-white '>ماموریت ایده‌آل</Button>
          </div>
        </div>
      </div>

      {/* sec3 - Chart */}
      <div className='px-[19svw] py-30 text-center'>
        <h1 className=' text-3xl text-koosha-pr font-bold'>مقایسه بازدهی بازار‌های مختلف در ۵ سال اخیر</h1>

        <div className=' flex gap-2 mt-11'>
          <div className='bg-green-400 text-white rounded-2xl p-3'> بورس</div>
          <div className='bg-koosha-pr text-white rounded-2xl p-3'> سپرده بانکی</div>
          <div className='bg-yellow-500 text-white rounded-2xl p-3'> ارز</div>
          <div className='bg-blue-500 text-white rounded-2xl p-3'> مسکن</div>
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

      <div className=' flex justify-center items-center min-h-[20svh] w-full p-5 mb-24' >
        <Image
          src={shape}
          alt="Sample Image"
          width={31}
          className=''
        />
        <h1 className='text-gray-400 text-3xl md:text-4xl font-bold'>سرمایه‌گذاری در بورس، <span className='text-koosha-pr'>ایده‌آل</span> است</h1>
        <Image
          src={shape}
          alt="Sample Image"
          width={31}
          className=' transform scale-x-[-1] '
        />
      </div>

      {/* sec4 - samane */}
      <div className=' flex flex-col items-center h-[80svh] w-full  bg-koosha-pr'>

        <div className=' border-b h-[25svh] border-white/50 w-full  flex'>

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
    </div>
  );
}


