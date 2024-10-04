import "../globals.css";
import Nav from "./header-main";
import Footer from "./footer";
import { FaApple, FaGooglePlay, FaCircleArrowRight } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";

export default function Home() {
  return (
    <div class="md:w-10/12">
      <Nav />

      <section class="text-black body-font mx-6 mb-16">
        <div class="grid grid-cols-2 items-end px-4 pt-5">
          <div class="flex flex-col mb-16">
            <h1 class="sm:text-2xl md:text-3xl xl:text-5xl mb-4 font-bold [&&]:leading-tight">Get your <span className="text-mypurple">favorite</span> food, delivered staright to your door.</h1>
            <div class="mb-3 text-lg leading-relaxed text-gray-500 ">Food, drinks, groceries and more available for delivery and pickup.</div>
            
            <div class="my-3 text-xl leading-relaxed text-gray-500 ">Apps available to download on</div>
            <div className="flex">
              <div class="flex justify-center">
                <button class="text-white bg-black py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                  <div class="text-3xl me-3"><FaApple /></div>
                  <div>
                    <span class="text-gray-300 text-xs">Download on the</span><br/>
                    <span class="text-start">App Store</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center mx-6">
                <button class="border border-black py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                  <div class="text-3xl me-3"><FaGooglePlay /></div>
                  <div>
                    <span class=" text-xs">Download on the</span><br/>
                    <span class="text-start">Google Play</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center">
                <button class="border border-black py-2 px-5 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                  <div class="text-3xl me-3"><SiHuawei /></div>
                  <div>
                    <span class=" text-xs">Download on the</span><br/>
                    <span class="text-start">App Gallery</span>
                  </div>
                </button>
              </div>
            </div>

          </div>
          <div class="p-6 flex justify-end">
            <img class="p-4 w-10/12" alt="hero" src="/hero.webp" />
          </div>
        </div>
        <div class="flex justify-center"><img class="w-6" src="/down.webp" alt="down" /></div>
      </section>

      <section class="bg-cyan-50 text-center rounded-2xl p-12 mb-16">
        <button class="bg-myorange_fade text-myorange rounded-full px-6 p-2 mb-4">Features</button>
        <h2 class="sm:text-2xl md:text-3xl xl:text-4xl mb-4 font-bold [&&]:leading-tight">Let's see how it <span className="text-mypurple">works</span></h2>
        <div class="grid grid-cols-3">
          <div class="">
            <div class="flex-hz max-h-60"><img src="./delivery.webp" alt="image" className="scale-x-reverse object-contain"/></div>
            <h6 className="font-bold">Become a delivery man</h6>
            <div class="text-gray-500 text-sm my-3">As a delivery driver, make money and work <br /> on your shedule. Signup in minutes.</div>
            <a href="" class="flex justify-center text-myorange">
              <span className="text-sm font-bold">Start Earning </span>
              <span className="mt-1 ml-3"><FaCircleArrowRight /></span>
            </a>
          </div>

          <div class="">
            <div class="flex-hz max-h-60"><img src="./transport.webp" alt="image" className="object-contain"/></div>
            <h6 className="font-bold">Become a partner</h6>
            <div class="text-gray-500 text-sm my-3">Grow your business and reach new <br /> customers by partnering with us.</div>
            <a href="" class="flex justify-center text-myorange">
              <span className="text-sm font-bold"> Signup for your eFoodi </span>
              <span className="mt-1 ml-3"><FaCircleArrowRight /></span>
            </a>
          </div>

          <div class="">
            <div class="flex-hz max-h-60"><img src="./become-partner.webp" alt="image" className="object-contain" /></div>
            <h6 className="font-bold">Get the best eFoodi experience</h6>
            <div class="text-gray-500 text-sm my-3">Experience the best your neighbourhood<br />has to offer, all in one app.</div>
            <a href="" class="flex justify-center text-myorange">
              <span className="text-sm font-bold">Get the app</span> 
              <span className="mt-1 ml-3"><FaCircleArrowRight /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div class="grid grid-cols-2 gap-4 mx-12">
          <div>
            <h2 className="sm:text-2xl md:text-3xl xl:text-4xl mb-4 font-bold [&&]:leading-tight">We deliver our products <br/> with <span class="text-mypurple">lightning-fast</span> speed</h2>
            <div class="text-gray-500 mt-3 mb-5">Get all your needs with fast delivery from food, <br /> groceries pharmacy items, flowers, and more.</div>
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Something for everyone</h6>
                  <div class="text-gray-500 text-sm my-2">We've got every meal covered and more: snacks, dessert and more ...</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Delivery for pickup</h6>
                  <div class="text-gray-500 text-sm my-2">Sit back and relax, have us deliver to you or skip the line for pickup</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Save with eFooDi</h6>
                  <div class="text-gray-500 text-sm my-2">Get unlimited delivery, exclusive offers, and more</div>
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
