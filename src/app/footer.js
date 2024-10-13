import { FaInstagram, FaFacebookF, FaTwitter, FaApple, FaGooglePlay } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-cyan-50 rounded-2xl p-4 lg:px-20 items-end">
        <div className="p-6 lg:absolute lg:contents ">
          <img class="lg:-mt-20 lg:-mb-10" alt="image" src="/location.webp" />
        </div>

        <div class="flex flex-col col-span-2 pb-12 lg:mr-24">
          <h2 class="text-2xl xl:text-5xl mb-4 font-bold [&&]:leading-tight">حمل تطبق فودي الان</h2>
          <div class="mb-6 text-lg leading-relaxed text-gray-500 ">لطلبات وخبرة توصيل رائعة حمل التطبيق على 
          <br className="hidden lg:block" />جهازك المحمول الان</div>
          
          <div className="lg:flex">
            <div class="flex justify-center">
              <button class="w-1/2 lg:w-auto text-white bg-gray-800 py-3 px-6 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                <div class="text-3xl me-3"><FaApple /></div>
                <div>
                  <span class="text-gray-300 text-xs">Download on the</span><br/>
                  <span class="text-start">App Store</span>
                </div>
              </button>
            </div>

            <div class="flex justify-center lg:mx-6 my-4 mx-0 lg:my-0">
              <button class="w-1/2 lg:w-auto text-white bg-gray-800 py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                <div class="text-3xl me-3"><FaGooglePlay /></div>
                <div>
                  <span class="text-gray-300 text-xs">Download on the</span><br/>
                  <span class="text-start">Google Play</span>
                </div>
              </button>
            </div>

            <div class="flex justify-center">
              <button class="w-1/2 lg:w-auto text-white bg-gray-800 py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                <div class="text-3xl me-3"><SiHuawei /></div>
                <div>
                  <span class="text-gray-300 text-xs">Download on the</span><br/>
                  <span class="text-start">App Gallery</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div class="mx-6 lg:mx-0 max-w-screen-xl space-y-8 pt-16 lg:space-y-16 lg:px-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <button class="bg-myorange_fade text-myorange rounded-full px-6 p-2 mb-4 text-xs">تواصل معنا</button>

            <h2 class="sm:text-xl md:text-2xl xl:text-3xl mb-4">support@efoodi.net</h2>

            <ul class="mt-8 flex gap-4 items-center">
              <li className="text-sm text-gray-600">مواقع التواصل الاجتماعي</li>

              <li className="myborder rounded-full p-2">
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="foot-links "
                >
                <FaInstagram />
                </a>
              </li>

              <li className="myborder rounded-full p-2">
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="foot-links"
                >
                <FaTwitter />
                </a>
              </li>

              <li className="myborder rounded-full p-2">
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="foot-links"
                >
                <FaFacebookF />
                </a>
              </li>

            </ul>
          </div>

          <div class="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4 font-bold">
            <div>
              <p class="text-xs text-gray-400 uppercase">روابط سريعة</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link href={"/about"} class="foot-links">من نحن </Link>
                </li>

                <li>
                  <Link href={"/"} class="foot-links">كن شريكنا</Link>
                </li>

                <li>
                  <Link href={"/"} class="foot-links">جولة معنا</Link>
                </li>

                <li>
                  <Link href={"/"} class="foot-links"> الخبرات </Link>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">الاعمال التجارية</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link href={"/sell"} class="foot-links">بيع المنتجات معنا</Link>
                </li>

                <li>
                  <Link href={"/advertise"} class="foot-links"> الإعلان معنا </Link>
                </li>

                <li>
                  <Link href={"/support"} class="foot-links"> دعم البائع </Link>
                </li>

                <li>
                  <Link href={"/business_faq"} class="foot-links"> الأسئلة الشائعة </Link>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">المساعدة</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link href={"/contact"} class="foot-links"> تواصل معنا </Link>
                </li>

                <li>
                  <Link href={"/customer_faq"} class="foot-links"> الأسئلة الشائعة </Link>
                </li>

                <li>
                  <Link href={"/terms"} class="foot-links">شروط الاستخدام </Link>
                </li>

                <li>
                  <Link href={"/privacy"} class="foot-links">شروط الخصوصية </Link>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">الدول</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" class="foot-links">المملكة العربية السعودية</Link>
                </li>

                <li>
                  <Link href="#" class="foot-links"> الإمارات العربية المتحدة </Link>
                </li>

                <li>
                  <Link href="#" class="foot-links"> عمان </Link>
                </li>

                <li>
                  <Link href="#" class="foot-links"> البحرين </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-xs text-gray-500 text-center mb-4 border-t border-solid py-6"> © 2024 eFOODi.  جميع الحقوق محفوظة.</div>
      </div>
    </footer>
  );
}
