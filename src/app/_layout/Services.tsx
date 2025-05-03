import { Button } from "@/components/ui/button";
import { ServiceItem } from "../(public)/_components/ServiceItem";


export const Services = () => {
    return <div className='grid grid-cols-1  grid-rows-4 md:grid-cols-2 md:grid-rows-2  min-h-[80svh]  '>
        <ServiceItem titr='همراهی اختصاصی' title='در کارگزاری ایده آل، با سرویس همراهی اختصاصی شما یک اکانت منیجر اختصاصی خواهید داشت که در هر لحظه در کنار شماست. این متخصص حرفه‌ای با دانش بازار و تجربه بالا، شما را در هر مرحله از تصمیم‌گیری‌های مالی همراهی می‌کند تا مطمئن باشید که تصمیمات شما همواره درست و آگاهانه است. هدف ما ایجاد تجربه‌ای مطمئن و اختصاصی برای هر مشتری است.' />
        <ServiceItem titr='مشاوره رایگان' title='در کارگزاری ایده آل، ما ارزش همراهی و حمایت را به خوبی درک می‌کنیم. به همین دلیل، مشاوره رایگان برای تمامی مشتریان جدید فراهم کرده‌ایم. تیم متخصصان ما آماده‌اند تا با ارائه راهنمایی‌های دقیق و شخصی‌سازی شده، شما را در مسیر سرمایه‌گذاری موفق همراهی کنند. با ارسال درخواست مشاوره و اولین قدم خود را با اطمینان بردارید.' />
        <ServiceItem titr='آموزش حرفه‌ای بورس' title='در کارگزاری ایده آل، ما به اهمیت آموزش در سرمایه‌گذاری آگاهانه باور داریم. به همین دلیل، آموزش حرفه‌ای بورس را به صورت آنلاین ارائه می‌دهیم تا شما بتوانید از هر کجا و در هر زمانی به دانش و مهارت‌های لازم برای موفقیت در بازار بورس دسترسی داشته باشید. دوره‌های ما توسط اساتید مجرب طراحی شده و تمامی جنبه‌های سرمایه‌گذاری را پوشش می‌دهند.' />
        <div className='border-b border-r w-full border-koosha-pr   p-15 md:p-30   gap-3 flex flex-col  '>
            <div className=' flex h-full flex-col justify-center items-center text-balance gap-3 '>
                <h1 className='text-gray-400 text-3xl font-bold text-wrap whitespace-normal'>از آموزش تا معامله <br /><span className=' text-koosha-pr'>همراهتان هستیــم </span></h1>
                <Button variant={"outline"} className=' text-koosha-pr border-koosha-pr! bg-transparent! hover:bg-koosha-pr! hover:text-white '>ماموریت ایده‌آل</Button>
            </div>
        </div>
    </div>;
}
