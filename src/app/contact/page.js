import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";

export default function Contact() {
  return (
    <div dir="rtl">

      <Nav />
      
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-16 md:px-12">
          <div className=" p-6">

            <h2 className="text-2xl font-bold mb-3">تواصل معنا</h2>
            <div className="mb-6 text-gray-500">يسرنا ان نسمع من عملائنا</div>

            <div className="px-12 mb-4"><img class="sm:block lg:hidden" alt="image" src="/contact.webp" /></div>

            <form class="myform">
              <div className="grid lg:grid-cols-2">
                <div>
                  <div class="mb-6">
                    <label for="countries" class="block mb-2 text-md text-gray-900 font-bold">الموضوع</label>
                    <select id="countries" class=" border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5">

                      <option>الشكاوى</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </select>
                  </div>

                  <div class="mb-6">
                    <label for="countries" class="block mb-2 text-md text-gray-900 font-bold">من أنت؟</label>
                    <select id="countries" class=" border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5">

                      <option>العميل</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </select>
                  </div>

                  <div class="mb-6">
                    <label class="block mb-2 text-md text-gray-900 font-bold">رقم الجوال</label>
                    <div className="flex">
                      <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 ps-6 text-sm font-medium text-center text-gray-900 border bg-transparent border-e-transparent rounded-s-lg border-gray-600" type="button">
                      +965 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                      </button>
                      <div id="dropdown" class="z-10 hidden bg-transparent  rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a></li>
                          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a></li>
                          </ul>
                      </div>
                      <div class="relative w-full">
                        <input type="number" id="search-dropdown" class="block pe-6 p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-e-lg border-s-transparent border border-gray-600" placeholder="Search" required />
                      </div>
                    </div>
                    
                  </div>

                  <div class="mb-6">
                    <label class="block mb-2 text-md text-gray-900 font-bold">البريد الالكتروني</label>
                    <input type="email" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder="اكتب البريد الإلكتروني هنا*" required />
                  </div>
                </div>

                <div className="pr-14 mr-16"><img class="hidden lg:block" alt="image" src="/contact.webp" /></div>
              </div>

              <div class="mb-6">
                <label class="block mb-2 text-md text-gray-900 font-bold">الرسائل</label>
                <textarea type="text" id="" class="lg:w-9/12 myinput px-6 border border-gray-600 bg-transparent" placeholder="اكتب الرسالة هنا*" rows={3} required />
              </div>

              <div class="my-8 text-xs font-medium text-gray-600">من خلال اتخاذ هذا الإجراء، فإنك توافق على شروطنا وأحكامنا وسياسة الخصوصية</div>

              <div className="block lg:w-4/12">
                <button type="submit" class="text-white bg-myorange font-medium rounded-full w-full text-sm py-2.5 text-center">قدم</button>
              </div>
            </form>

          </div>
          
        </section>
      </div>

      <Footer />
    </div>
  );
}
