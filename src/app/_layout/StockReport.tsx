
import { Button } from '@/components/ui/button';
export const StockReport = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full  border-b border-black/20 min-h-[15svh] h-[15svh]  px-[10svw]'>
                <div className=' border-l border-r w-full flex justify-center items-center h-full  border-black/20'>
                    <p className=' text-xl md:text-3xl text-koosha-pr font-bold text-center '> گزارش‌های تخصصی بورس</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-full  border-b border-black/20 min-h-[28svh] md:h-[28svh] h-[45svh]  px-[10svw]'>
                <div className=' border-l border-r w-full  h-full  border-black/20 grid md:grid-cols-6 grid-cols-3'>
                    <div className='flex flex-col justify-center items-center border-l border-b md:border-b-0 border-black/20 text-koosha-pr/30 hover:text-koosha-pr duration-300'>
                        <p className='rotate-90 text-5xl md:text-7xl  mb-11 font-bold  '>1400</p>
                        <p className='text-xs md:text-base'>شش ماهه دوم</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-l border-black/20 text-koosha-pr/30  hover:text-koosha-pr duration-300  border-b md:border-b-0'>
                        <p className='rotate-90 text-5xl md:text-7xl mb-11 font-bold  '>1401</p>
                        <p className='text-xs md:text-base'>شش ماهه دوم</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-l border-black/20 text-koosha-pr/30  hover:text-koosha-pr duration-300  border-b md:border-b-0'>
                        <p className='rotate-90 text-5xl md:text-7xl mb-11 font-bold  '>1402</p>
                        <p className='text-xs md:text-base'>شش ماهه دوم</p>                    </div>
                    <div className='flex flex-col justify-center items-center border-l border-black/20 text-koosha-pr/30  hover:text-koosha-pr duration-300'>
                        <p className='rotate-90 text-5xl md:text-7xl  mb-11 font-bold  '>1403</p>
                        <p className='text-xs md:text-base'>شش ماهه دوم</p>                    </div>
                    <div className='flex flex-col justify-center items-center border-l border-black/20 text-koosha-pr/30  hover:text-koosha-pr duration-300'>
                        <p className='rotate-90 text-5xl md:text-7xl mb-11 font-bold  '>1404</p>
                        <p className='text-xs md:text-base'>شش ماهه دوم</p>                    </div>
                    <div className='flex flex-col justify-center items-center border-l border-black/20 text-koosha-pr/30  hover:text-koosha-pr duration-300'>
                        <p className='rotate-90 text-5xl md:text-7xl mb-11 font-bold  '>1405</p>
                        <p className='text-xs md:text-base'>شش ماهه دوم</p>
                    </div>

                </div>
            </div>

            <div className='flex justify-center items-center w-full  border-b border-black/20 min-h-[15svh] h-[15svh]  px-[10svw]'>
                <div className=' border-l border-r w-full flex justify-center items-center h-full  border-black/20'>
                    <Button className=' md:px-20' variant={'outline'}>مشاهده تمام گزارش‌ها</Button>
                </div>
            </div></>
    )
}
