import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";
import Form1 from "../form1";

export default function Sell() {
  return (
    <div dir="rtl">
      <div class="bg-[url('/hero-image.webp')] h-screen">
        <Nav />

        <section class="flex-center h-full px-3">
          <div className="md:w-1/2 text-white text-center -mt-28">
            <div className="flex justify-center mb-8"><img class="w-1/2" src="/logo-white.webp" alt="logo" /></div>
            <h1 className="text-3xl lg:text-4xl font-bold">البيع عبر الأنترنت في تطبيق فودي</h1>
            <p className="text-gray-300 text-xl lg:text-2xl my-3 pb-8 px-6 lg:px-0">سجل منتجاتك لدى تطبيق فودي وبع لملاين الزبائن</p>
            <button className="bg-myorange text-sm rounded-full p-3 w-1/2 lg:w-1/3 mb-4">كن شريكنا</button>
          </div>
        </section>
      </div>

      <div class="lg:w-11/12 mx-auto lg:-mt-20">
        <section className="bg-gray-100 rounded-xl grid lg:grid-cols-5 p-8 text-center mb-16">
          <div className="flex-vr mb-10">
            <div className="flex-hz"><img src="/target-audience.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold text-lg md:text-xl lg:text-lg">بع منتجاتك لملاين العملاء في <br/> تطبيق فودي</div>
          </div>

          <div className="flex-vr mb-10">
            <div className="flex-hz"><img src="/wallet.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold text-lg md:text-xl lg:text-lg">مدفوعات امنه<br/> ومنظمة</div>
          </div>

          <div className="flex-vr mb-10">
            <div className="flex-hz"><img src="/calculator-money.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold text-lg md:text-xl lg:text-lg">اقل تكلفة لأعمالك <br/> التجارية</div>
          </div>

          <div className="flex-vr mb-10">
            <div className="flex-hz"><img src="/customer-service.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold text-lg md:text-xl lg:text-lg">دعم البائع بنقرة <br/> واحدة</div>
          </div>

          <div className="flex-vr mb-10">
            <div className="flex-hz"><img src="/bags-shopping.webp" alt="image" className="w-1/3 mb-4" /></div>
            <div className="font-bold text-lg md:text-xl lg:text-lg">الوصول إلى العروض و <br/> العروض الترويجية</div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">ابدا معنا</h2>
          <div className="grid lg:grid-cols-2 lg:px-12">
            <div className="px-6">
              <h2 className="text-2xl font-bold mb-4">ابدا رحلتك مع فودي لتحقيق أرباح
              <br />وانجازات لامحدودة</h2>
              <div className="mb-6 text-gray-500">كن شريكًا معنا لتبسيط عملك والوصول إلى المزيد من العملاء وتعزيز مبيعاتك والازدهار في عالم التجارة في الإنترنت - أبدأ رحلتك نحو النجاح الآن.</div>
              
              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">1</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">سهولة ممارسة الاعمال التجارية عبر الانترنت</h6>
                  <div class="text-gray-500 text-sm my-2">أنشئ حسابك الخاص كبائع في تطبيق فودي في أقل من 10 دقائق باستخدام منتج واحد فقط ومستندات سليمة.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">2</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">التطور</h6>
                  <div class="text-gray-500 text-sm my-2">يشهد البائعون ارتفاعًا في النمو بمعدل 2.8 ضعفًا، وزيادة في الرؤية بمعدل 2.3 ضعفًا، ونموًا يصل إلى 5 أضعاف في المبيعات.</div>
                </div>
              </div>

              <div class="flex mb-4">
                <div className="bg-myorange text-white text-sm rounded-full me-3 h-7 min-w-7 flex-center">3</div>
                <div className="inline-block">
                  <h6 className="font-bold text-gray-600">الدعم الاضافي</h6>
                  <div class="text-gray-500 text-sm my-2">خدمات إدارة الحسابات، وبرامج التدريب الحصرية، ورؤى الأعمال، ودعم قوائم العرض والتصوير الفوتوغرافي، والمزيد.</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-5 text-center">هل أنت مستعد لتسريع نمو مشروعك <br /> تطوير الاعمال؟</h2>
              <Form1 />
            </div>
          </div>
        </section>

        <section className="bg-cyan-50 rounded-xl p-8 text-center mb-16 py-14">
          <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14">ابدأ رحلتك في فودي</h1>
          <div className="grid lg:grid-cols-5">
            <div className="flex-vr px-6">
              <div className="flex-hz"><img src="/tracking.webp" alt="image" className="w-2/3" /></div>
              <div className="text-2xl font-bold my-3">انشئ</div>
              <div className="text-gray-500 text-lg md:text-xl lg:text-sm">سجل في 10 دقائق فقط برقم سجل تجاري صالح، وبيانات القيمة المضافة، العنوان وتفاصيل الحساب البنكي</div>
            </div>

            <div className="flex-vr px-6 mb-8">
              <div className="flex-hz"><img src="/talk.webp" alt="image" className="w-2/3" /></div>
              <div className="text-2xl font-bold my-3">القائمة</div>
              <div className="text-gray-500 text-lg md:text-xl lg:text-sm">أدرج قائمة منتجاتك (منتج واحد على الأقل) التي تريد بيعها عبر تطبيق فودي</div>
            </div>

            <div className="flex-vr px-6 mb-8">
              <div className="flex-hz"><img src="/boys.webp" alt="image" className="w-2/3" /></div>
              <div className="text-2xl font-bold my-3">الطلبات</div>
              <div className="text-gray-500 text-lg md:text-xl lg:text-sm">استقبل الطلبات من أكثر من ملايين 
              العملاء في تطبيق فودي</div>
            </div>

            <div className="flex-vr px-6 mb-8">
              <div className="flex-hz"><img src="/warehouse.webp" alt="image" className="w-2/3" /></div>
              <div className="text-2xl font-bold my-3">التوصيل</div>
              <div className="text-gray-500 text-lg md:text-xl lg:text-sm">تضمن فودي توصيل منتجاتك 
              بكل اريحية</div>
            </div>

            <div className="flex-vr px-6 mb-8">
              <div className="flex-hz"><img src="/cod.webp" alt="image" className="w-2/3" /></div>
              <div className="text-2xl font-bold my-3">الدفع</div>
              <div className="text-gray-500 text-sm">الدفع يتم في نفس تاريخ 
              إرسال الطلب</div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

    </div>
  );
}
