import {
  FaFacebookF,
  FaTwitter,
  FaApple,
  FaGooglePlay,
  FaCircle,
} from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiHuawei } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mt-32 mx-6">
        <div className="bg-bgcolor grid grid-cols-1 lg:grid-cols-3 rounded-2xl p-4 lg:px-20 items-end lg:h-72 z-0 relative">
          <div className="p-6 h-full">
            <FaCircle className="text-mygreen text-4xl absolute z-20" style={{top: '4rem', left:'-1rem'}} />
            <img
              class="lg:-mt-28 "
              alt="image"
              src="/location-e.webp"
              style={{scale: '1.2'}}
            />
          </div>

          <div class="flex flex-col col-span-2 pb-24 lg:ml-24">
            <h2 class="text-2xl xl:text-5xl mb-4 font-bold [&&]:leading-tight mx-2">
              Download the <span className="text-mypurple">eFooDi app</span>
            </h2>
            <div class="mb-6 text-lg leading-relaxed text-gray-500 mx-2">
              For a seamless ordering and delivery experience, download <br className="hidden lg:block" /> the
              eFooDi app on your mobile device.
            </div>

            <div className="flex">
              <div class="flex justify-center w-1/3 lg:w-auto">
                <button class="text-white bg-gray-800 appbtn">
                  <div class="text-2xl me-1 lg:me-3">
                    <FaApple />
                  </div>
                  <div>
                    <span class="text-gray-400 text-xs">Download on</span>
                    <br />
                    <span class="text-start">App Store</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center w-1/3 lg:w-auto lg:mx-4 lg:my-0">
                <button class="text-white bg-gray-800 appbtn">
                  <div class="text-2xl me-1 lg:me-3">
                    <FaGooglePlay />
                  </div>
                  <div>
                    <span class="text-gray-400 text-xs">Download on</span>
                    <br />
                    <span class="text-start">Google Play</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center w-1/3 lg:w-auto">
                <button class="text-white bg-gray-800 appbtn">
                  <div class="text-2xl me-1 lg:me-3">
                    <SiHuawei />
                  </div>
                  <div>
                    <span class="text-gray-400 text-xs">Download on</span>
                    <br />
                    <span class="text-start">App Gallery</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-6 lg:mx-0 max-w-screen-xl space-y-8 pt-8 lg:space-y-16 lg:px-12 relative">
        <FaCircle className="text-mygreen text-2xl absolute z-20" style={{top: '3rem', right:'7rem'}} />
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <button class="bg-myorange_fade text-myorange rounded-full px-6 p-2 mb-4 text-xs">
              CONTACT US
            </button>

            <h2 class="sm:text-xl md:text-2xl xl:text-3xl mb-4 flex items-center">
              <span>support@efoodi.net</span>
              <a href="mailto=support@efoodi.net"><BsArrowUpRightCircleFill className="text-myorange text-2xl ml-2" /></a>
            </h2>

            <ul class="mt-8 flex gap-4 items-center">
              <li className="text-sm text-gray-600">Social Media</li>

              <li className="myborder rounded-full p-2">
                <a
                  href={"/eng/about"}
                  rel="noreferrer"
                  target="_blank"
                  class="foot-links text-lg"
                >
                  <AiFillInstagram />
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

          <div class="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4 font-bold">
            <div>
              <p class="text-xs text-gray-400 uppercase">Quick links</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <Link href={"/eng/about"} class="foot-links">
                    {" "}
                    About Us{" "}
                  </Link>
                </li>

                <li>
                  <Link href={"/eng/comingsoon"} class="foot-links">
                    {" "}
                    Partner With us{" "}
                  </Link>
                </li>

                <li>
                  <Link href={"/eng/comingsoon"} class="foot-links">
                    {" "}
                    Ride With Us{" "}
                  </Link>
                </li>

                <li>
                  <Link href={"/eng/comingsoon"} class="foot-links">
                    {" "}
                    Career{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">Business</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href={"/eng/sell"} class="foot-links">
                    {" "}
                    Sell With Us{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/advertise"} class="foot-links">
                    {" "}
                    Advertise With Us{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/support"} class="foot-links">
                    {" "}
                    Seller Support{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/business_faq"} class="foot-links">
                    {" "}
                    FAQ&apos;s{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">Help</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href={"/eng/contact"} class="foot-links">
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/customer_faq"} class="foot-links">
                    {" "}
                    FAQ&apos;s{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/terms"} class="foot-links">
                    Terms of Use{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/privacy"} class="foot-links">
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs text-gray-400 uppercase">Countries</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href={"/eng/"} class="foot-links">
                    {" "}
                    Saudi Arabia{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links">
                    {" "}
                    UAE{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links">
                    {" "}
                    Oman{" "}
                  </a>
                </li>

                <li>
                  <a href={"/eng/"} class="foot-links">
                    {" "}
                    Bahrain{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-xs text-gray-500 text-center mb-4 border-t border-solid py-6">
          &copy; 2024 eFOODi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
