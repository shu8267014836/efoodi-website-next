import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import { FaApple, FaGooglePlay, FaCircleArrowRight } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";

export default function Seller() {
  return (
    <div>
      <div class="bg-[url('/hero-image.webp')] md:h-screen">
        <Nav />

        <section class="flex-center h-full">
          <div className="md:w-1/2 text-white text-center -mt-28">
            <div className="flex justify-center mb-8"><img class="w-1/2" src="/logo-white.webp" alt="logo" /></div>
            <h1 className="text-4xl font-bold">Sell online with eFOODi</h1>
            <p className="text-gray-300 text-2xl my-3 pb-8">Become a eFOODi seller and sell to millions of customers.</p>
            <button className="bg-myorange text-sm rounded-full p-3 md:w-1/3">Become a partner</button>
          </div>
        </section>
      </div>

      <div class="md:w-11/12 mx-auto -mt-20">
        <section className="bg-gray-200 rounded-xl grid grid-cols-5 p-8 text-center mb-16">
          <div className="flex-vr">
            <div className="flex-hz"><img src="/target-audience.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold ">Sell to millions of eFOODi <br/> customers</div>
          </div>

          <div className="flex-vr">
            <div className="flex-hz"><img src="wallet.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold ">Secure and regular <br/> payments</div>
          </div>

          <div className="flex-vr">
            <div className="flex-hz"><img src="/calculator-money.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold ">Low cost of doing <br/> business</div>
          </div>

          <div className="flex-vr">
            <div className="flex-hz"><img src="/customer-service.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold ">One click Seller <br/> support</div>
          </div>

          <div className="flex-vr">
            <div className="flex-hz"><img src="/bags-shopping.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold ">Access to Offers <br/> & promotions</div>
          </div>
        </section>

        <section className="mb-16">
          <h1 className="text-5xl font-bold text-center mb-10">Start your <span className="text-mypurple">journey</span></h1>
          <div className="grid grid-cols-2 md:px-12">
            <div className="px-6">
              <h2 className="text-3xl font-bold mb-4">Begin your journey with endless achievements with eFOODi!</h2>
              <div className="mb-6 text-gray-500">Partner with us to streamline your business, reach more customers, boost your sales, and thrive in online world - your journey to success starts.</div>
              
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Ease of doing business</h6>
                  <div class="text-gray-500 text-sm my-2">Create your seller account in under 10 minutes with just 1 product and a valid document.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Growth</h6>
                  <div class="text-gray-500 text-sm my-2">Sellers see an average 2.8X spike in growth, 2.3X more in visibility, and upto 5X growth in sales.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">Additional Support</h6>
                  <div class="text-gray-500 text-sm my-2">Account management services, exclusive training programs, business insights, catalogue/photoshoot support, and more. </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-6">
              <h2 className="text-3xl font-bold mb-5 text-center">Ready to accelerate your <br /> business growth?</h2>
            
              <form class="myform mx-8">
                <div class="mb-5">
                  <input type="text" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="Business Name*" required />
                </div>
                <div class="mb-5">
                  <select id="" class="myinput px-8 border border-gray-600 bg-transparent" required>
                    <option value="" selected>Type of Business</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div class="mb-5">
                  <input type="text" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="Contact Person Name*" required />
                </div>
                
                <div class="flex mb-5">
                  <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 ps-8 text-sm font-medium text-center text-gray-900 border bg-transparent border-e-transparent rounded-s-lg border-gray-600" type="button">
                    +965 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                  </button>
                  <div id="dropdown" class="z-10 hidden bg-transparent  rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a></li>
                      </ul>
                  </div>
                  <div class="relative w-full">
                      <input type="number" id="search-dropdown" class="block pe-8 p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-e-lg border-s-transparent border border-gray-600" placeholder="Search" required />
                  </div>
                </div>

                <div class="mb-5">
                  <input type="email" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="Type Email here*" required />
                </div>
                <div className="block px-8">
                  <button type="submit" class="text-white bg-myorange font-medium rounded-full w-full text-sm py-2.5 text-center">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </section>

        <section className="bg-cyan-50 rounded-xl p-8 text-center mb-16 py-14">
          <h1 className="text-5xl font-bold text-center mb-14">Your <span className="text-mypurple"> Journey</span> on eFOODi</h1>
          <div className="grid grid-cols-5">
            <div className="flex-vr px-6">
              <div className="flex-hz"><img src="/target-audience.webp" alt="image" className="w-1/3" /></div>
              <div className="text-2xl font-bold my-4">Create</div>
              <div className="text-gray-500 text-sm">Register in just 10 mins with valid CR, tax, address, & bank details.</div>
            </div>

            <div className="flex-vr px-6">
              <div className="flex-hz"><img src="wallet.webp" alt="image" className="w-1/3" /></div>
              <div className="text-2xl font-bold my-4">List</div>
              <div className="text-gray-500 text-sm">List your products (min 1no.) that you want to sell on eFOODi.</div>
            </div>

            <div className="flex-vr px-6">
              <div className="flex-hz"><img src="/calculator-money.webp" alt="image" className="w-1/3" /></div>
              <div className="text-2xl font-bold my-4">Orders</div>
              <div className="text-gray-500 text-sm">Receive orders from over millions of eFOODi customers.</div>
            </div>

            <div className="flex-vr px-6">
              <div className="flex-hz"><img src="/customer-service.webp" alt="image" className="w-1/3" /></div>
              <div className="text-2xl font-bold my-4">Shipment</div>
              <div className="text-gray-500 text-sm">eFOODi ensures stress free delivery of your products.</div>
            </div>

            <div className="flex-vr px-6">
              <div className="flex-hz"><img src="/bags-shopping.webp" alt="image" className="w-1/3" /></div>
              <div className="text-2xl font-bold my-4">Payment</div>
              <div className="text-gray-500 text-sm">Receive payment same from the date of dispatch of your order.</div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

    </div>
  );
}
