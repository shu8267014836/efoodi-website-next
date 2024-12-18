"use client";

import "../globals.css";
import Nav from "./header-main";
import Footer from "./footer";
import Link from "next/link";
import { FaApple, FaGooglePlay, FaCircleArrowRight } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";

export default function Home() {

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  const scrollDown = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  const getApp = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 2000, behavior: 'smooth' });
  };

  return (
    <div class="max-w-full lg:w-10/12">
      <Nav />

      <section class="max-w-full text-black body-font mx-4 lg:mx-6 mb-16">
        <div class="grid lg:grid-cols-2 items-end lg:px-4 pt-5">
          <div class="flex flex-col mb-16">
            <h1 class="text-3xl xl:text-5xl mb-4 font-bold [&&]:leading-tight">
              Get your <span className="text-mypurple">favorite</span> food,
              delivered staright to your door.
            </h1>
            <div class="mb-3 text-lg leading-relaxed text-gray-500 ">
              Food, drinks, groceries and more available for delivery and
              pickup.
            </div>

            <div class="my-4 text-xl leading-relaxed text-gray-500 text-center lg:text-left">
              Apps available to download on
            </div>
            <div className="flex">
              <div class="flex justify-center w-1/3 lg:w-auto">
                <button class="appbtn">
                  <div class="text-xl lg:text-2xl me-1 lg:me-3">
                    <FaApple />
                  </div>
                  <div>
                    <span class="text-gray-400 text-xs">Download on</span>
                    <br />
                    <span class="text-start">App Store</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center w-1/3 lg:w-auto lg:mx-6 lg:my-0">
                <button class="appbtn">
                  <div class="text-xl lg:text-2xl me-1 lg:me-3">
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
                <button class="appbtn">
                  <div class="text-xl lg:text-2xl me-1 lg:me-3">
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
          <div class="p-6 flex justify-center lg:justify-end">
            <img class="lg:p-4 w-10/12 home-rider-eng" alt="hero" src="/hero.webp" />
          </div>
        </div>
        <button class="lg:flex justify-center hidden m-auto" onClick={scrollDown}>
          <img class="w-6" src="/down.webp" alt="down"/>
        </button>
      </section>

      <section class="bg-bgcolor text-center rounded-2xl p-12 mb-16" >
        <button class="bg-myorange_fade text-myorange rounded-full px-6 p-2 mb-4">
          Features
        </button>
        <h2 class="text-3xl xl:text-4xl mb-4 font-bold [&&]:leading-tight">
          Let&apos;s see how it <span className="text-mypurple">works</span>
        </h2>
        <div class="grid lg:grid-cols-3">

          <div class="mb-4">
            <div class="flex-hz max-h-60">
              <img
                src="./delivery-e.webp"
                alt="image"
                className="object-contain"
              />
            </div>
            <h6 className="font-bold">Become a delivery man</h6>
            <div class="text-gray-500 text-sm my-3">
              As a delivery driver, make money and work <br /> on your shedule.
              Signup in minutes.
            </div>
            <Link href={"/eng/comingsoon"} class="flex justify-center text-myorange">
              <span className="text-sm font-bold">Start Earning </span>
              <span className="mt-1 ml-3">
                <FaCircleArrowRight />
              </span>
            </Link>
          </div>

          <div class="mb-6">
            <div class="flex-hz max-h-60">
              <img
                src="./transport.webp"
                alt="image"
                className="object-contain"
              />
            </div>
            <h6 className="font-bold">Become a partner</h6>
            <div class="text-gray-500 text-sm my-3">
              Grow your business and reach new <br /> customers by partnering
              with us.
            </div>
            <Link href={"/eng/sell"} class="flex justify-center text-myorange">
              <span className="text-sm font-bold">
                {" "}
                Signup for your eFoodi{" "}
              </span>
              <span className="mt-1 ml-3">
                <FaCircleArrowRight />
              </span>
            </Link>
          </div>

          <div class="mb-4">
            <div class="flex-hz max-h-60">
              <img
                src="./become-partner.webp"
                alt="image"
                className="object-contain"
              />
            </div>
            <h6 className="font-bold">Get the best eFoodi experience</h6>
            <div class="text-gray-500 text-sm my-3">
              Experience the best your neighbourhood
              <br />
              has to offer, all in one app.
            </div>
            <button href="" class="flex m-auto justify-center text-myorange" onClick={getApp}>
              <span className="text-sm font-bold">Get the app</span>
              <span className="mt-1 ml-3">
                <FaCircleArrowRight />
              </span>
            </button>
          </div>

        </div>
      </section>

      <section className="mb-16">
        <div class="grid lg:grid-cols-2 gap-4 mx-6 lg:mx-12">
          <div>
            <h2 className="text-3xl xl:text-4xl mb-4 font-bold [&&]:leading-tight">
              We deliver our products <br className="hidden lg:block" /> with{" "}
              <span class="text-mypurple">lightning-fast</span> speed
            </h2>
            <div class="text-gray-500 mt-3 mb-5">
              Get all your needs with fast delivery from food, groceries
              pharmacy items, flowers, and more.
            </div>
            <div class="flex mb-4">
              <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">
                1
              </div>
              <div className="inline-block">
                <h6 className="font-bold text-gray-600">
                  Something for everyone
                </h6>
                <div class="text-gray-500 text-sm my-2">
                  We&apos;ve got every meal covered and more: snacks, dessert
                  and more ...
                </div>
              </div>
            </div>

            <div class="flex mb-4">
              <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">
                2
              </div>
              <div className="inline-block">
                <h6 className="font-bold text-gray-600">Delivery for pickup</h6>
                <div class="text-gray-500 text-sm my-2">
                  Sit back and relax, have us deliver to you or skip the line
                  for pickup
                </div>
              </div>
            </div>

            <div class="flex mb-4">
              <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">
                3
              </div>
              <div className="inline-block">
                <h6 className="font-bold text-gray-600">Save with eFooDi</h6>
                <div class="text-gray-500 text-sm my-2">
                  Get unlimited delivery, exclusive offers, and more
                </div>
              </div>
            </div>
          </div>

          <div className="px-10">
            <img class=" " alt="image" src="/deliver-products.webp" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
