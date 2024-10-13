import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form2 from "../form2";

export default function Support() {
  return (
    <div dir="rtl">

      <Nav />
      
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-16 grid lg:grid-cols-2 md:px-12">
          <div className="order-2 lg:order-1 p-6">
            <h2 className="text-2xl font-bold mb-5">نحن سعيدين بمساعدتك</h2>
            <div className="mb-6 text-gray-500">هل لا تزال لديك أسئلة أو استفسارات لم تتم الإجابة عليها؟ شاركنا بأفكارك أدناه لتساعدنا في تحسين تجربتك في موقع الويب الخاص بك.</div>
            <Form2 />
          </div>
          <div className="p-8 order-1 lg:order-2"><img class="scale-x-reverse " alt="image" src="/support.webp" /></div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
