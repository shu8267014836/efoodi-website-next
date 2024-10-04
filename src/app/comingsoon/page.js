import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";

export default function Comingsoon() {
  return (
    <div dir="rtl">
      <Nav />
      
      <div class="md:w-5/12 mx-auto mb-28 py-12 text-center">
        <div className="w-1/2 mx-auto"><img class=" " alt="image" src="/comingsoon.webp" /></div>
        <h2 className="text-2xl font-bold mb-3">استعد، قريبًا…</h2>
        <div className="mb-6 text-gray-500">موقعنا قيد الإنشاء، تابعنا للحصول على التحديثات الآن!</div>
        <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-2.5 text-center w-5/12">انتقل إلى الصفحة الرئيسية</button>
      </div>

      <Footer />
    </div>
  );
}
