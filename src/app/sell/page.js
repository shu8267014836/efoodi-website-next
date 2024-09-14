import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form1 from "../form1";

export default function Sell() {
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
              <h2 className="text-2xl font-bold mb-4">Begin your journey with endless achievements with eFOODi!</h2>
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
              <h2 className="text-2xl font-bold mb-5 text-center">Ready to accelerate your <br /> business growth?</h2>
              <Form1 />
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
