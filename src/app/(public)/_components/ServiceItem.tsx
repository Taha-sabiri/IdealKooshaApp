import { Button } from "@/components/ui/button";
import Image from 'next/image';
import ArrowLeft from '@/assets/images/icon/ArrowLeft.svg'

type ServiceItemProps = {
    titr: string;
    title: string;
  };
  

export const ServiceItem =({titr , title}:ServiceItemProps) =>{
    return <div className='border-b border-r w-full border-koosha-pr  p-20 md:p-30   '>
      <div className=' flex flex-col justify-center items-start text-balance gap-3 '>
        <h1 className='text-koosha-pr text-xl font-bold'>{titr}</h1>
        <p className=' text-wrap '>{title}</p>
        <Button className='rounded-full aspect-square w-12 h-12 bg-koosha-pr hover:bg-koosha-pr/50 self-end'>
          <Image
            src={ArrowLeft}
            alt="Sample Image" />
        </Button>
      </div>
    </div>
  }