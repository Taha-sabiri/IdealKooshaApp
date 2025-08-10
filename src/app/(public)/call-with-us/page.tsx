import Image from "next/image";
import map from '@/assets/images/map.png'
import Phone from '@/assets/images/icon/Phone.svg'
import call from '@/assets/images/call.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

export default function CallWithUs() {

    return (
        <div className=" relative z-10 pt-[12svh] flex flex-col ">
            <div className="text-2xl h-[10svh]  border-t border-b border-koosha-pr flex justify-center items-center px-[13svw] ">
                <div className="border-l border-koosha-pr h-full  flex w-full items-center ">
                    <p className="text-koosha-pr font-bold">ارتباط با ما</p>
                </div>
                <div className=" h-full  flex w-full">
                </div>
            </div>

            <div className="  border-t border-b border-koosha-pr flex justify-center items-center px-[13svw]  ">
                <div className=" h-full  flex w-full items-center flex-col gap-5 md:py-6 py-[40svw]  ">
                    <div className="flex gap-2 items-center   justify-between w-[90svw] md:w-[30svw]">
                        <Image src={map} alt="" className="w-[2svw]" />

                        <p className="">خیابان ولیعصر، خیابان عباسپور (توانیر شمالی)، کوچه هومان، پلاک 2، طبقه اول</p>

                    </div>
                    <div className="flex gap-2 items-center  w-[90svw] md:w-[30svw]">
                        <Image src={call} alt="" className="w-[2svw]" />
                        <div className="border-t border-koosha-pr w-full"></div>
                        <p className="">Hejazi@ideal.com</p>

                    </div>
                    <div className="flex gap-2 items-center w-[90svw] md:w-[30svw]">
                        <Image src={call} alt="" className="w-[2svw]" />
                        <div className="border-t border-koosha-pr w-full "></div>
                        <p className=" w-fit text-nowrap">info@ideal-brokerage.ir</p>

                    </div>
                    <div className="flex gap-2 items-center  w-[90svw] md:w-[30svw]">
                        <p className=" w-fit text-nowrap">ایده‌آل را در فضای مجازی دنبال کنید</p>
                        <div className="border-t border-koosha-pr w-full "></div>

                        <Image src={call} alt="" className="w-[2svw]" />
                        <Image src={call} alt="" className="w-[2svw]" />
                        <Image src={call} alt="" className="w-[2svw]" />

                    </div>
                </div>
                <div className=" h-full  w-full border-r border-koosha-pr hidden md:flex" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25915.602742138326!2d51.36842749950012!3d35.715141500024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sde!4v1754717414887!5m2!1sen!2sde" width="600" height="450" loading="lazy" ></iframe>
                </div>
            </div>
            <div className="text-2xl h-[10svh]  border-t border-b border-koosha-pr flex justify-center items-center px-[13svw] ">
                <div className="border-l border-koosha-pr h-full  flex w-full items-center ">
                    <p className="text-koosha-pr font-bold">با ما در تماس باشید</p>
                </div>
                <div className=" h-full  flex w-full">
                </div>
            </div>
            <div className="px-[5svw] md:px-[20svw] py-[10svh] grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="grid w-full items-center gap-3">
                    <Label htmlFor="name">نام</Label>
                    <Input type="name" id="name" placeholder="نام" />
                </div>
                <div className="grid w-full  items-center gap-3">
                    <Label htmlFor="name">نام</Label>
                    <Input type="name" id="name" placeholder="نام" />
                </div>
                <div className="grid w-full items-center gap-3 md:col-span-2">
                    <Label htmlFor="name">آدرس ایمیل</Label>
                    <Input type="name" id="name" placeholder="آدرس ایمیل" />
                </div>
                <div className="grid w-full gap-3 md:col-span-2">
                    <Label htmlFor="message">توضیحات</Label>
                    <Textarea placeholder="توضیحات" id="message" className="w-full" />
                </div>
                <div className="grid w-full gap-3 md:col-span-2">
                    <Button variant={"outline"}>ثبت</Button>
                </div>
            </div>
            <div className="  py-[20svh] bg-koosha-pr flex flex-col justify-center items-center px-[13svw] gap-6 ">
                <p className="text-[5svw] md:text-[2svw] text-center text-white font-black">برای شروع سرمایه‌گذاری نیاز به مشاورین ایده‌آل دارید؟</p>
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