"use client";

import "../../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form1 from "../form1";
import { FaCircle } from "react-icons/fa";

export default function Advertise() {

  const isBrowser = () => typeof window !== 'undefined';

  const scrollDown = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 620, behavior: 'smooth' });
  };

  return (
    <div>

      <Nav />
      <div class="lg:w-9/12 mx-auto mt-4">
        <section className="mb-8 grid lg:grid-cols-2 items-start">
          <div className="px-12 lg:mt-20 order-2 lg:order-1 relative h-full">
            <FaCircle className="text-mygreen text-xs absolute" style={{top: '-3rem', left:0}} />
            <FaCircle className="text-mypurple text-xl absolute" style={{bottom: '7rem', left:'1rem'}} />

            <h2 className="text-3xl font-bold mb-4">Advertise on eFOODi!</h2>
            <div className="mb-12 text-xl text-gray-500">For every marketing you spent, eFOODi returns over 8X the investment.</div>
            <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-3 text-center w-9/12" onClick={scrollDown}>Grow Your Business</button>
          </div>
          <div className="p-10 px-16 order-1 lg:order-2 relative">
            <img class=" " alt="image" src="/advertise.webp" />
            <FaCircle className="text-myorange text-4xl absolute" style={{top: '1rem', left:'4rem'}} />
            <FaCircle className="text-mygreen text-3xl absolute" style={{top: '4rem', right:'3rem'}} />
            <FaCircle className="text-mygreen text-xs absolute" style={{top: '14rem', right:'1rem'}} />
            <FaCircle className="text-mygreen text-2xl absolute" style={{bottom: 0, right:0}} />
          </div>
        </section>
      </div>
      <div class="md:w-10/12 mx-auto">

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Why <span className="text-mypurple">advertise</span> on eFOODi</h2>
          <div className="grid lg:grid-cols-2 lg:px-12">

            <div className="px-6 relative">
              <FaCircle className="text-mygreen text-xs absolute" style={{top: '-3rem', left:'1rem'}} />
              <h2 className="text-2xl font-bold mb-4">Drive Users to You</h2>
              <div className="mb-6 text-gray-500">Generate gauranteed visits to your page via dynamic search ads on web and mobile platform. Boost your platform within relevant collections for your brand.</div>
              
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Gauranteed customer growth</h6>
                  <div class="text-gray-500 text-sm my-2">Increase visits to your page which will drive more footfall and revenue for your restaurant.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Target your Right Audience</h6>
                  <div class="text-gray-500 text-sm my-2">Get showcased to customers searching for what you have to offer, at most relevant time and location.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Pay for Results</h6>
                  <div class="text-gray-500 text-sm my-2">Take the guessing out of advertising and only pay for the customers you brought to your page.</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 relative">
              <h2 className="text-2xl font-bold mb-5 text-center">Ready to grow your business?</h2>
              <FaCircle className="text-mygreen text-lg absolute" style={{top: '3rem', right:'-2rem'}} />
              <FaCircle className="text-myorange text-4xl absolute" style={{bottom: '1rem', left:'-1.5rem'}} />
              <FaCircle className="text-myorange text-xl absolute" style={{bottom: '-2rem', right:'0.5rem'}} />
              <Form1 />
            </div>
          </div>
         <Footer />

        </section>

      </div>

    </div>
  );
}
