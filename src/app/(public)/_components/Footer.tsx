import Image from "next/image";
import at from '@/assets/images/At.png'
import Link from '@/assets/images/Link.png'
import group from '@/assets/images/Group 14.png'
import logo from '@/assets/images/logo.png'

export default function Footer() {


    return (
        <div className="flex flex-col bg-stone-100 px-[2svw] md:px-[13svw] py-[5svh]">
            <div className="md:grid-cols-4 grid-cols-2 t  gap-10 hidden  md:grid">

                <div>
                    <p className="font-semibold mb-5">دسترسی سریع</p>
                    <ul className="flex flex-col gap-2">
                        <li>ورود به اکسیر</li>
                        <li>ورود به مدیریت دارایی</li>
                        <li>ورود به معاملات</li>
                        <li>ورود به پنل کاربری</li>
                        <li>ورود به بخش تحلیل تخصصی</li>
                        <li>ورود به آکادمی ایده‌آل</li>
                        <li>سهام عدالت</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-5">معاملات</p>
                    <ul className="flex flex-col gap-2 ">
                        <li>معاملات</li>
                        <li>آتی کالا</li>
                        <li>اختیار معامله</li>
                        <li>دریافت کد بورسی</li>
                        <li>احراز هویت سجام</li>
                        <li>عرضه اولیه</li>
                        <li>اولین‌های بازار</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-5">آکادمی ایده‌آل</p>
                    <ul className="flex flex-col gap-2">
                        <li>معاملات</li>
                        <li>آتی کالا</li>
                        <li>اختیار معامله</li>
                        <li>دریافت کد بورسی</li>
                        <li>احراز هویت سجام</li>
                        <li>عرضه اولیه</li>
                        <li>اولین‌های بازار</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-5">درباره ایده‌آل</p>
                    <ul className="flex flex-col gap-2">
                        <li>معاملات</li>
                        <li>آتی کالا</li>
                        <li>اختیار معامله</li>

                    </ul>
                </div>
            </div>
            <div className="grid-cols-3 md:grid  mt-20  hidden  ">


                <p className="font-semibold mb-5 text-4xl text-koosha-pr">همراهتان هستیم</p>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Image src={at} alt="" width={30} />
                        <p className=" ">پست الکترونیکی</p>

                    </div>
                    <p className=" mb-5">info@Ideal-Brokerge.com</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-">
                        <Image src={Link} alt="" width={30} />
                        <p className=" ">شبکه‌های اجتماعی</p>
                    </div>
                    <Image src={group} alt="" width={300} />

                </div>

            </div>
            <div className="flex justify-between mt-10">
                <div className="flex md:flex-row flex-col items-center  gap-3">
                    <Image src={logo} alt="" className="w-10" />
                    <p className="text-stone-700 text-center ">۱۴۰۳ - کلیه حقوق این سایت متعلق به کارگزاری ایده‌آل کوشا می‌باشد.</p>
                </div>
                <p className="text-stone-700 hidden md:flex  "> طراحی شده در آژانس برندینگ ماورای</p>

            </div>
        </div>
    )
}