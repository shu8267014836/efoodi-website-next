import "./globals.css";

export default function Form2() {
  return (
        <form class="myform">
            
            <div class="mb-6">
                <select id="" class="myinput px-8 border border-gray-600 bg-transparent" required>
                <option value="" selected>Select a topic *</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
            </div>
            <div class="mb-6">
                <input type="text" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="اختر موضوعًا*" required />
            </div>
            <div class="mb-6">
                <input type="text" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="أدخل الاسم الكامل*" required />
            </div>
            
            <div class="flex mb-6">
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 ps-8 text-sm font-medium text-center text-gray-900 border bg-transparent border-e-transparent rounded-s-lg border-gray-600" type="button">
                +965 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                </button>
                <div id="dropdown" class="z-10 hidden bg-transparent  rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a></li>
                    </ul>
                </div>
                <div class="relative w-full">
                    <input type="number" id="search-dropdown" class="block pe-8 p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-e-lg border-s-transparent border border-gray-600" placeholder="Search" required />
                </div>
            </div>

            <div class="mb-6">
                <input type="email" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="اكتب البريد الإلكتروني هنا*" required />
            </div>

            <div class="mb-6">
                <textarea type="text" id="" class="myinput px-8 border border-gray-600 bg-transparent" placeholder="اكتب رسالتك*" rows={2} required />
            </div>

            <div className="block px-8">
                <button type="submit" class="text-white bg-myorange font-medium rounded-full w-full text-sm py-2.5 text-center">أرسل استعلامًا</button>
            </div>
        </form>
 );
}