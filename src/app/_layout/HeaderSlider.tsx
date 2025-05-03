
import Image from 'next/image';
import slider from '@/assets/images/slider.png';


export const HeaderSlider = () => {
    return <div className="bg-koosha-pr w-full relative h-[80svh] ">
        <Image
            src={slider}
            alt="Sample Image"
            fill
            className='object-cover ' />
    </div>;
}
