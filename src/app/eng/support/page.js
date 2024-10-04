import "../../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form2 from "../form2";

export default function Support() {
  return (
    <div>

      <Nav />
      
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-16 grid grid-cols-2 md:px-12">
          <div className=" p-6">
            <h2 className="text-2xl font-bold mb-5">We are happy to help you</h2>
            <div className="mb-6 text-gray-500">Still have questions and queries that are unanswered? Share your thoughts below which will help us improve your website experience.</div>
            <Form2 />
          </div>
          <div className="p-8"><img class=" " alt="image" src="/support.webp" /></div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
