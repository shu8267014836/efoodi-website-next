import { FaInstagram, FaFacebookF, FaTwitter, FaApple, FaGooglePlay } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-3 bg-cyan-50 rounded-2xl p-4 px-20 items-end">
        <div className="p-4 absolute contents"><img class="-mt-20 -mb-10 scale-x-reverse" alt="image" src="/location.webp" /></div>
        <div class="flex flex-col col-span-2 pb-12 mr-24">
          <h2 class="sm:text-2xl md:text-3xl xl:text-5xl mb-4 font-bold [&&]:leading-tight">Download the <span className="text-mypurple">eFooDi app</span></h2>
          <div class="mb-6 text-lg leading-relaxed text-gray-500 ">For a seamless ordering and delivery experience, download <br /> the eFooDi app on your mobile device.</div>
          
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
              <button class="text-white bg-gray-800 py-3 px-6 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
                <div class="text-3xl me-3"><FaGooglePlay /></div>
                <div>
                  <span class="text-gray-300 text-xs">Download on the</span><br/>
                  <span class="text-start">Google Play</span>
                </div>
              </button>
            </div>

            <div class="flex justify-center">
              <button class="text-white bg-gray-800 py-3 px-6 hover:bg-opacity-80 rounded-lg text-sm text-start flex flex-row items-center"> 
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
            <button class="bg-myorange_fade text-myorange rounded-full px-6 p-2 mb-4 text-xs">CONTACT US</button>

            <h2 class="sm:text-xl md:text-2xl xl:text-3xl mb-4">support@efoodi.net</h2>

            <ul class="mt-8 flex gap-4 items-center">
              <li className="text-sm text-gray-600">Social Media</li>

              <li className="myborder rounded-full p-2">
                <a
                  href={"/eng/about"}
                  rel="noreferrer"
                  target="_blank"
                  class="foot-links "
                >
                <FaInstagram />
                </a>
              </li>

              <li className="myborder rounded-full p-2">
                <a
                  href={"/eng/about"}
                  rel="noreferrer"
                  target="_blank"
                  class="foot-links"
                >
                <FaTwitter />
                </a>
              </li>

              <li className="myborder rounded-full p-2">
                <a
                  href={"/eng/about"}
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
              <p class="text-xs text-gray-400 uppercase">Quick links</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link href={"/eng/about"} class="foot-links"> About Us </Link>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links"> Partner With us </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links"> Ride With Us </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links"> Career </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">Business</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href={"/eng/sell"} class="foot-links"> Sell With Us </a>
                </li>

                <li>
                  <a href={"/eng/advertise"} class="foot-links"> Advertise With Us </a>
                </li>

                <li>
                  <a href={"/eng/support"} class="foot-links"> Seller Support </a>
                </li>

                <li>
                  <a href={"/eng/business_faq"} class="foot-links"> FAQ's </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">Help</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href={"/eng/contact"} class="foot-links"> Contact Us </a>
                </li>

                <li>
                  <a href={"/eng/customer_faq"} class="foot-links"> FAQ's </a>
                </li>

                <li>
                  <a href={"/eng/terms"} class="foot-links">Terms of Use </a>
                </li>

                <li>
                  <a href={"/eng/privacy"} class="foot-links">Privacy Policy </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">Countries</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href={"/eng/"} class="foot-links"> Saudi Arabia </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links"> UAE </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links"> Oman </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links"> Bahrain </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-xs text-gray-500 text-center mb-4 border-t border-solid py-6">&copy; 2024 eFoodi. All rights reserved.</div>
      </div>
    </footer>
  );
}
