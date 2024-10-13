import "./globals.css";
import Nav from "./header-main";
import Footer from "./footer";
import { FaApple, FaGooglePlay, FaCircleArrowRight } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";

export default function Home() {
  return (
    <div class="max-w-full lg:w-10/12" dir="rtl">
      <Nav />

      <section class="max-w-full text-black body-font mx-6 mb-16">
        <div class="grid lg:grid-cols-2 items-end lg:px-4 pt-5">
          <div class="flex flex-col mb-16">
            <h1 class="text-3xl xl:text-5xl mb-4 font-bold [&&]:leading-tight text-right">احصل على طعامك المفضل
            <br />إلى باب منزلك</h1>
            <div class="my-4 text-xl leading-relaxed text-gray-500">اطعمة، مشروبات، مقاضي، وأكثر.. تسليم الى باب 
            <br />منزلك او الاستلام من المطعم</div>
            
            <div class="my-3 text-xl leading-relaxed text-gray-500 lg:text-right text-center mb-4">حمل التطبيق</div>
            <div className="lg:flex">
              <div class="flex justify-center">
                <button class="w-1/2 lg:w-auto scale-125 lg:scale-100 text-white bg-black py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                  <div class="text-3xl me-3"><FaApple /></div>
                  <div>
                    <span class="text-gray-300 text-xs">Download on the</span><br/>
                    <span class="text-start">App Store</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center lg:mx-6 my-6 mx-0 lg:my-0">
                <button class="w-1/2 lg:w-auto scale-125 lg:scale-100 border border-black py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                  <div class="text-3xl me-3"><FaGooglePlay /></div>
                  <div>
                    <span class=" text-xs">Download on the</span><br/>
                    <span class="text-start">Google Play</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center">
                <button class="w-1/2 lg:w-auto scale-125 lg:scale-100 border border-black py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                  <div class="text-3xl me-3"><SiHuawei /></div>
                  <div>
                    <span class=" text-xs">Download on the</span><br/>
                    <span class="text-start">App Gallery</span>
                  </div>
                </button>
              </div>
            </div>

          </div>
          <div class="p-6 flex justify-center lg:justify-end">
            <img class="scale-x-reverse lg:p-4 w-10/12" alt="hero" src="/hero.webp" />
          </div>
        </div>
        <div class="lg:flex justify-center hidden"><img class="w-6" src="/down.webp" alt="down" /></div>
      </section>

      <section class="bg-cyan-50 text-center rounded-2xl p-12 mb-16">
        <button class="bg-myorange_fade text-myorange rounded-full px-6 p-2 mb-4">المميزات</button>
        <h2 class="text-3xl xl:text-4xl mb-4 font-bold [&&]:leading-tight">الية عمل التطبيق</h2>
        <div class="grid lg:grid-cols-3">
          <div class="mb-4">
            <div class="flex-hz max-h-60"><img src="./delivery.webp" alt="image" className="object-contain" /></div>
            <h6 className="font-bold">احصل على أفضل تجربة</h6>
            <div class="text-gray-500 text-sm my-3">جرب أفضل ما يقدم من حولك كلهم في تطبيق واحد
            <br />تطبيق واحد</div>
            <a href="" class="flex justify-center text-myorange">
              <span className="text-sm font-bold">ابدأ بكسب المال</span>
              <span className="mt-1 mr-3"><FaCircleArrowRight className="scale-x-reverse" /></span>
            </a>
          </div>

          <div class="mb-6">
            <div class="flex-hz max-h-60"><img src="./transport.webp" alt="image" className="object-contain"/></div>
            <h6 className="font-bold">كن شريكنا</h6>
            <div class="text-gray-500 text-sm my-3">طور عملك وتواصل مع عملاء جدد <br />
            بالشراكة معنا.</div>
            <a href="" class="flex justify-center text-myorange">
              <span className="text-sm font-bold">سجل في فودي</span>
              <span className="mt-1 mr-3"><FaCircleArrowRight className="scale-x-reverse" /></span>
            </a>
          </div>

          <div class="mb-4">
            <div class="flex-hz max-h-60"><img src="./become-partner.webp" alt="image" className="object-contain scale-x-reverse"/></div>
            <h6 className="font-bold">انضم الينا كمندوب توصيل</h6>
            <div class="text-gray-500 text-sm my-3">سجل في دقائق كمندوب توصيل حسب<br />وقتك المتاح</div>
            <a href="" class="flex justify-center text-myorange">
              <span className="text-sm font-bold">احصل على التطبيق الان</span> 
              <span className="mt-1 mr-3"><FaCircleArrowRight className="scale-x-reverse" /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div class="grid lg:grid-cols-2 gap-4 mx-6 lg:mx-12">
          <div>
            <h2 className="text-3xl xl:text-4xl mb-4 font-bold [&&]:leading-tight">نوصيل سريع</h2>
            <div class="text-gray-500 mt-3 mb-5">توصيل سريع لكل احتياجاتك من غذاء ودواء وز هور واكثر</div>
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">منتجات لكل شخص</h6>
                  <div class="text-gray-500 text-sm my-2">اطعمة وجبات حلويات وأكثر</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">توصيل او استلام من الفرع</h6>
                  <div class="text-gray-500 text-sm my-2">استمتع بالتوصيل الى منزلك او تفضل بالاستلام من الموقع</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">وفر مع تطبيق فودي</h6>
                  <div class="text-gray-500 text-sm my-2">احصل على توصيل لامحدود، عروض حصرية، وأكثر</div>
                </div>
              </div>
          </div>

          <div className="px-10"><img class=" " alt="image" src="/deliver-products.webp" /></div>
        </div>
      </section>
      
      <Footer />
      
    </div>
  );
}
