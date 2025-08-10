import Image from "next/image";
import about from '@/assets/images/about.png'
import boss from '@/assets/images/boss.png'
import email from '@/assets/images/email.png'
import Phone from '@/assets/images/icon/Phone.svg'

export default function AboutUs() {

    return (
        <div className=" relative z-10 pt-[12svh] flex flex-col ">
            <div className="text-2xl h-[10svh]  border-t border-b border-koosha-pr flex justify-center items-center px-[13svw] ">
                <div className="border-l border-koosha-pr h-full  flex w-full items-center ">
                    <p className="text-koosha-pr font-bold">درباره کارگزاری ایده آل</p>
                </div>
                <div className=" h-full  flex w-full">
                </div>
            </div>
            <div className="text-2xl h-[70svh] gap-2 md:h-[47.5svh] py-4 md:py-0 border-b border-koosha-pr flex  md:flex-row justify-center items-center px-[13svw] flex-col-reverse j  ">
                <div className="border-none md:border-l border-koosha-pr h-full  flex w-full items-center justify-center ">
                    <p className="text-sm w-[90%]  md:text-right text-justify  ">در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.

                        در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.</p>
                </div>
                <div className=" h-full  flex w-full relative  md:border-r  border-koosha-pr" >
                    <Image src={about} alt="" fill className="w-auto h-fit object-cover" />
                </div>
            </div>
            <div className="text-2xl h-[10svh]   border-b border-koosha-pr flex justify-center items-center px-[13svw] ">
                <div className="border-l border-koosha-pr h-full  flex w-full items-center ">
                    <p className="text-koosha-pr font-bold">اعضا هیئت مدیره ایده‌آل</p>
                </div>
                <div className=" h-full  flex w-full">
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-20 px-[13svw] py-[5svh]  md:h-[80svh] h-[200svh]">

                <div className="flex flex-col">
                    <div className=' w-full h-full  relative  '>
                        <Image src={boss} alt="" fill className=" object-cover w-full  h-full z-0" />
                    </div>
                    <div>
                        <div className=' w-full p-3 bg-koosha-pr text-white '>
                            <p>محمد حسین حجازی</p>
                        </div>


                        <div className=' w-full p-3 '>
                            <p>در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا.</p>
                        </div>
                        <div className="flex w-full items-center gap-2">
                            <div className="border-t border-koosha-pr w-full "></div>
                            <p>Hejazi@ideal.com</p>
                            <Image src={email} alt="" className=" w-10" />

                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=' w-full h-full  relative  '>
                        <Image src={boss} alt="" fill className=" object-cover w-full  h-full z-0" />
                    </div>
                    <div>
                        <div className=' w-full p-3 bg-koosha-pr text-white '>
                            <p>محمد حسین حجازی</p>
                        </div>


                        <div className=' w-full p-3 '>
                            <p>در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا.</p>
                        </div>
                        <div className="flex w-full items-center gap-2">
                            <div className="border-t border-koosha-pr w-full "></div>
                            <p>Hejazi@ideal.com</p>
                            <Image src={email} alt="" className=" w-10" />

                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className=' w-full h-full  relative  '>
                        <Image src={boss} alt="" fill className=" object-cover w-full  h-full z-0" />
                    </div>
                    <div>
                        <div className=' w-full p-3 bg-koosha-pr text-white '>
                            <p>محمد حسین حجازی</p>
                        </div>


                        <div className=' w-full p-3 '>
                            <p>در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا.</p>
                        </div>
                        <div className="flex w-full items-center gap-2">
                            <div className="border-t border-koosha-pr w-full "></div>
                            <p>Hejazi@ideal.com</p>
                            <Image src={email} alt="" className=" w-10" />

                        </div>
                    </div>
                </div>

            </div>

            <div className="text-2xl h-[10svh]   border-t border-b border-koosha-pr flex justify-center items-center px-[13svw] ">
                <div className=" h-full  flex w-full items-center ">
                    <p className="text-koosha-pr font-bold">درباره کارگزاری ایده آل</p>
                </div>
                <div className=" h-full  flex w-full">
                </div>
            </div>

            <div className="  py-[10svh] md:py-[20svh] border-b border-koosha-pr flex flex-col justify-center items-center px-[13svw] gap-6 ">
                <p className="text-4xl text-koosha-pr font-black">آکادمی سرمایه‌گذاری ایده‌آل</p>
                <p className="w:[95svw] md:w-[40svw] text-center">
                    در کارگزاری ایده آل، همراهی در تمام خدمات در نظر گرفته شده است. ما بر این باور هستیم که با ارایه آموزش‌های تخصصی بازار سرمایه و بورس به صورت رایگان از سطح مبتدی با حرفه‌ای شما را برای موفقیت در این بازار همراهی کنیم. برنامه‌های آموزشی ایده‌آل در سه مدل مختلف طراحی شده است. تقویم آموزش برخط روزانه و هفتگی، مقالات و تحلیل‌های تخصصی بازار سرمایه و ویدیو‌های آموزشی ضبط شده، از جمله همراهی ما برای آموزش شما است.
                </p>
            </div>

            <div className=" text-center   py-[10svh] md:py-[20svh] bg-koosha-pr flex flex-col justify-center items-center px-[13svw] gap-6 ">
                <p className="text-4xl text-white font-black">برای شروع سرمایه‌گذاری نیاز به مشاورین ایده‌آل دارید؟</p>
                <div className="flex text-2xl text-white gap-2 items-center justify-center  ">
                    <p className="">چت آنلاین</p>
                    <Image src={Phone} alt="" className="md:w-[2svw]" />
                    <p>۰۲۱۹۲۰۰۵۲۲۰</p>
                    <Image src={Phone} alt="" className="md:w-[2svw]" />

                </div>
            </div>
        </div>
    )

}