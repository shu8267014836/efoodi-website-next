import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Link from "next/link";

export default function Comingsoon() {
  return (
    <div dir="rtl">
      <Nav />
      
      <div class="md:w-5/12 mx-auto mb-28 py-12 text-center">
        <div className="mx-6">
          <div className="w-1/2 mx-auto"><img class=" " alt="image" src="/comingsoon.webp" /></div>
          <h2 className="text-2xl font-bold mb-3">استعد، قريبًا…</h2>
          <div className="mb-6 text-gray-500">موقعنا قيد الإنشاء، تابعنا للحصول على التحديثات الآن!</div>
          <Link href={"/"}>
            <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-2.5 text-center w-9/12 lg:w-5/12">انتقل إلى الصفحة الرئيسية</button>
          </Link>
        </div>
      </div>
      <div class="lg:w-10/12 mx-auto">
        <Footer />
      </div>
    </div>
  );
}
