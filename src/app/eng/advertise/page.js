import "../../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form1 from "../form1";

export default function Advertise() {
  return (
    <div>

      <Nav />
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-16 grid lg:grid-cols-2 md:px-12">
          <div className="px-6 lg:mt-48 order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">Advertise on eFOODi!</h2>
            <div className="mb-12 text-xl text-gray-500">For every marketing you spent, eFOODi returns over 8X the investment.</div>
            <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-2.5 text-center w-9/12">Grow Your Business</button>
          </div>
          <div className="p-10 order-1 lg:order-2"><img class=" " alt="image" src="/advertise.webp" /></div>
        </section>
      </div>
      <div class="md:w-11/12 mx-auto">

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Why <span className="text-mypurple">advertise</span> on eFOODi</h2>
          <div className="grid lg:grid-cols-2 lg:px-12">
            <div className="px-6">
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

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-5 text-center">Ready to grow your business?</h2>
              <Form1 />
            </div>
          </div>
        </section>

        <Footer />
      </div>

    </div>
  );
}
