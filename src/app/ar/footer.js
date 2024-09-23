import { FaInstagram, FaFacebookF, FaTwitter, FaApple, FaGooglePlay } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="grid grid-cols-3 bg-cyan-50 rounded-2xl p-4 px-20 items-end">
        <div className="p-4 absolute contents"><img class="-mt-20 -mb-10" alt="image" src="/location.webp" /></div>
        <div class="flex flex-col col-span-2 pb-12 mr-24">
          <h2 class="sm:text-2xl md:text-3xl xl:text-5xl mb-4 font-bold [&&]:leading-tight">حمل تطبق فودي الان</h2>
          <div class="mb-6 text-lg leading-relaxed text-gray-500 ">لطلبات وخبرة توصيل رائعة حمل التطبيق على 
          <br />جهازك المحمول الان</div>
          
          <div className="flex">
            <div class="flex justify-center">
              <button class="text-white bg-gray-800 py-3 px-6 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                <div class="text-3xl me-3"><FaApple /></div>
                <div>
                  <span class="text-gray-300 text-xs">Download on the</span><br/>
                  <span class="text-start">App Store</span>
                </div>
              </button>
            </div>

            <div class="flex justify-center mx-6">
              <button class="text-white bg-gray-800 py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                <div class="text-3xl me-3"><FaGooglePlay /></div>
                <div>
                  <span class="text-gray-300 text-xs">Download on the</span><br/>
                  <span class="text-start">Google Play</span>
                </div>
              </button>
            </div>

            <div class="flex justify-center">
              <button class="text-white bg-gray-800 py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
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

      <div class="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 sm:px-6 lg:space-y-16 lg:px-8">
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

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 font-bold">
            <div>
              <p class="text-xs text-gray-400 uppercase">روابط سريعة</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="foot-links">من نحن </a>
                </li>

                <li>
                  <a href="#" class="foot-links">كن شريكنا</a>
                </li>

                <li>
                  <a href="#" class="foot-links">جولة معنا</a>
                </li>

                <li>
                  <a href="#" class="foot-links"> الخبرات </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">الاعمال التجارية</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="foot-links">بيع المنتجات معنا</a>
                </li>

                <li>
                  <a href="#" class="foot-links"> الإعلان معنا </a>
                </li>

                <li>
                  <a href="#" class="foot-links"> دعم البائع </a>
                </li>

                <li>
                  <a href="#" class="foot-links"> الأسئلة الشائعة </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">المساعدة</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="foot-links"> تواصل معنا </a>
                </li>

                <li>
                  <a href="#" class="foot-links"> الأسئلة الشائعة </a>
                </li>

                <li>
                  <a href="#" class="foot-links">شروط الاستخدام </a>
                </li>

                <li>
                  <a href="#" class="foot-links">شروط الخصوصية </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">الدول</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="foot-links">المملكة العربية السعودية</a>
                </li>

                <li>
                  <a href="#" class="foot-links"> الإمارات العربية المتحدة </a>
                </li>

                <li>
                  <a href="#" class="foot-links"> عمان </a>
                </li>

                <li>
                  <a href="#" class="foot-links"> البحرين </a>
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
