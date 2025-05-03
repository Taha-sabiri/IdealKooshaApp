

import { HeaderSlider } from '../_layout/HeaderSlider';
import { Services } from '../_layout/Services';
import { Chart } from '../_layout/Chart';
import { Slogan } from '../_layout/Slogan';
import SystemInformation from '../_layout/SystemInformation';
import News from '../_layout/News';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { StockReport } from '../_layout/StockReport';
import banner from '@/assets/images/banner.png'

export default function Home() {

  const chartData = [
    { month: "1399", desktop: 186, mobile: 80, device: 30 },
    { month: "1400", desktop: 305, mobile: 200, device: 50 },
    { month: "1401", desktop: 237, mobile: 120, device: 10 },
    { month: "1402", desktop: 73, mobile: 190, device: 30 },

  ]


  return (
    <div
      className="  relative z-10"

    >
      <HeaderSlider />
      <Services />
      <Chart chartData={chartData} />
      <Slogan />
      <SystemInformation />
      <News />
      <StockReport />
      <div className='h-[50svh] relative  '>

        <Image
          src={banner}
          alt="Sample Image "
          fill
          className="object-cover "
        />
        <div className=' text-white absolute w-full   top-[20svh] flex justify-center items-center md:items-end flex-col gap-5  md:pl-[15svw]  '>
          <div className='  flex flex-col justify-center items-center gap-5'>
            <p className='text-4xl leading-12'>سامانه مدیریت <br />  <span className='font-extrabold'>سهــام عـــدالت</span></p>
            <Button variant="outline" className='text-white hover:text-white bg-transparent! hover:bg-accent/50! '>اطلاعات بیشتر</Button>
          </div>
        </div>

      </div>

    </div>
  );
}





