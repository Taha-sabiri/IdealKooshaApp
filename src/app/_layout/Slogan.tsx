import shape from '@/assets/images/shape.png';
import Image from 'next/image';

export const Slogan = () =>
    <div className=' flex justify-center items-center md:min-h-[20svh] min-h-[10svh] w-full p-5 mb-10 md:mb-24 text-center'>
        <Image
            src={shape}
            alt="Sample Image"
            width={31}
            className='' />
        <h1 className='text-gray-400 text-3xl md:text-4xl font-bold text-center'>سرمایه‌گذاری در بورس، <span className='text-koosha-pr'>ایده‌آل</span> است</h1>
        <Image
            src={shape}
            alt="Sample Image"
            width={31}
            className=' transform scale-x-[-1] ' />
    </div>;