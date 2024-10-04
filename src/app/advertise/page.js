import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form1 from "../form1";

export default function Advertise() {
  return (
    <div dir="rtl">

      <Nav />
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-16 grid grid-cols-2 md:px-12">
          <div className="px-6 mt-48">
            <h2 className="text-3xl font-bold mb-4">أعلن على فودي</h2>
            <div className="mb-12 text-xl text-gray-500">على كل اعلان تسويقي تنفقه، تطبيق فودي يرده لك 8 اضعاف كاستثمار</div>
            <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-2.5 text-center w-9/12">طور اعمالك</button>
          </div>
          <div className="p-10"><img class="scale-x-reverse " alt="image" src="/advertise.webp" /></div>
        </section>
      </div>
      <div class="md:w-11/12 mx-auto">

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">لماذا الاعلان على تطبيق فودي</h2>
          <div className="grid grid-cols-2 md:px-12">
            <div className="px-6">
              <h2 className="text-2xl font-bold mb-4">اجذب العملاء</h2>
              <div className="mb-6 text-gray-500">زيارات مضمونة لصفحتك عبر إعلانات 
البحث على منصتنا على الويب والجوّال.
عزز تجارتك ضمن المجموعات ذات
 الصلة بعلامتك التجارية</div>
              
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">زيادة مضمونه لعملائك</h6>
                  <div class="text-gray-500 text-sm my-2">قم بزيادة عدد الزيارات إلى صفحتك مما 
                  سيؤدي إلى زيادة عدد الزوار والإيرادات لنشاطك.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">استهدف الجمهور المناسب</h6>
                  <div class="text-gray-500 text-sm my-2">اعرض منتجاتك للعملاء الذين يبحثون عما 
                  تقدمه، في الوقت والمكان الملائم.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">ادفع مقابل النتائج</h6>
                  <div class="text-gray-500 text-sm my-2">تخلص من العشوائية في الإعلانات وادفع فقط 
                  مقابل العملاء الذين تم جلبهم إلى صفحتك.</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-5 text-center">هل أنت مستعد لتطوير اعمالك؟</h2>
              <Form1 />
            </div>
          </div>
        </section>

        <Footer />
      </div>

    </div>
  );
}
