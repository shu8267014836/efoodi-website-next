"use client";

import "../globals.css";
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
    <div dir="rtl">

      <Nav />
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-8 grid lg:grid-cols-2 items-start">
          <div className="px-12 lg:mt-20 order-2 lg:order-1 relative h-full">
            <FaCircle className="text-mygreen text-xs absolute" style={{top: '-3rem', right:0}} />
            <FaCircle className="text-mypurple text-xl absolute" style={{bottom: '7rem', right:'1rem'}} />
            <h2 className="text-3xl font-bold mb-4">أعلن على فودي</h2>
            <div className="mb-12 text-xl text-gray-500">على كل اعلان تسويقي تنفقه، تطبيق فودي يرده لك 8 اضعاف كاستثمار</div>
            <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-2.5 text-center w-9/12" onClick={scrollDown}>طور اعمالك</button>
          </div>
          <div className="p-10 px-16 order-1 lg:order-2 relative">
            <img class=" " alt="image" src="/advertise-ar.webp" />
            <FaCircle className="text-myorange text-4xl absolute" style={{top: '1rem', right:'4rem'}} />
            <FaCircle className="text-mygreen text-3xl absolute" style={{top: '4rem', left:'3rem'}} />
            <FaCircle className="text-mygreen text-xs absolute" style={{top: '14rem', left:'1rem'}} />
            <FaCircle className="text-mygreen text-2xl absolute" style={{bottom: 0, left:0}} />
          </div>
        </section>
      </div>
      <div class="md:w-10/12 mx-auto">

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">لماذا الاعلان على تطبيق فودي</h2>
          <div className="grid lg:grid-cols-2 lg:px-12">
            <div className="px-6 relative">
              <FaCircle className="text-mygreen text-xs absolute" style={{top: '-3rem', right:'1rem'}} />
              <h2 className="text-2xl font-bold mb-4">اجذب العملاء</h2>
              <div className="mb-6 text-gray-500">زيارات مضمونة لصفحتك عبر إعلانات 
البحث على منصتنا على الويب والجوّال.
عزز تجارتك ضمن المجموعات ذات
 الصلة بعلامتك التجارية</div>
              
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">زيادة مضمونه لعملائك</h6>
                  <div class="text-gray-500 text-sm my-2">قم بزيادة عدد الزيارات إلى صفحتك مما 
                  سيؤدي إلى زيادة عدد الزوار والإيرادات لنشاطك.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">استهدف الجمهور المناسب</h6>
                  <div class="text-gray-500 text-sm my-2">اعرض منتجاتك للعملاء الذين يبحثون عما 
                  تقدمه، في الوقت والمكان الملائم.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">ادفع مقابل النتائج</h6>
                  <div class="text-gray-500 text-sm my-2">تخلص من العشوائية في الإعلانات وادفع فقط 
                  مقابل العملاء الذين تم جلبهم إلى صفحتك.</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 relative">
              <h2 className="text-2xl font-bold mb-5 text-center">هل أنت مستعد لتطوير اعمالك؟</h2>
              <FaCircle className="text-mygreen text-lg absolute" style={{top: '3rem', left:'-2rem'}} />
              <FaCircle className="text-myorange text-4xl absolute" style={{bottom: '1rem', right:'-1.5rem'}} />
              <FaCircle className="text-myorange text-xl absolute" style={{bottom: '-2rem', left:'0.5rem'}} />
              <Form1 />
            </div>
          </div>
        </section>

        <Footer />
      </div>

    </div>
  );
}
