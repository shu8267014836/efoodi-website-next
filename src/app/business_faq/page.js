"use client";

import { useEffect } from "react";
import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import { initAccordions } from "flowbite";
import { FaAngleDown } from "react-icons/fa6";

export default function Business_faq() {

  useEffect(() => {
    initAccordions();
  });

  return (
    <div dir="rtl">
      <Nav />
      
      <div class="md:w-9/12 mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">الأسئلة الشائعة</h2>
        <div className="mb-6 text-gray-500">الأسئلة الأكثر شيوعًا.</div>

        <div className="py-6">
          
          <div id="accordion-collapse" data-accordion="collapse">

            <div className="mb-4">
              <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium !bg-gray-100 text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span>ما هو eFOODi؟</span>
                  <FaAngleDown className="text-myorange text-2xl" />
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-gray-200 rounded-xl">
                  <p class="mb-2 text-gray-500">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h2 id="accordion-collapse-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium !bg-gray-100 text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>ماذا يفعل eFOODi؟</span>
                  <FaAngleDown className="text-myorange text-2xl" />
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-gray-200 rounded-xl">
                  <p class="mb-2 text-gray-500 ">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium !bg-gray-100 text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                  <span>كم سيكلفني استخدام خدمات eFOODi؟</span>
                  <FaAngleDown className="text-myorange text-2xl" />
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-gray-200 rounded-xl">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h2 id="accordion-collapse-heading-4">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium !bg-gray-100 text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                  <span>لماذا يجب علي استخدام eFOODi على الهاتف؟</span>
                  <FaAngleDown className="text-myorange text-2xl" />
                </button>
              </h2>
              <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div class="p-5 border border-gray-200 rounded-xl">
                  <p class="mb-2 text-gray-500">eFOODi هي قاعة الطعام الضخمة الوحيدة للعديد من المطاعم، لذلك لا تحتاج إلى تحمل متاعب العثور على أرقام المطاعم، أو الانتظار في الانتظار، أو الحصول على إشارة مشغول أثناء الاتصال برقم مطعم، أو الحصول على طلب خاطئ بسبب سوء التواصل عبر الهاتف! بالإضافة إلى ذلك، باستخدام eFOODi، يمكنك عرض القوائم التي تحتوي على صور لجميع مطاعمك المفضلة على موقعنا الإلكتروني والتطبيق سهل الاستخدام.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}
