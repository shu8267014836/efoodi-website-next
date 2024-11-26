import "./globals.css";

export default function Form2() {
  return (
        <form class="myform">
            
            <div class="mb-5">
                <select id="" class="myinput px-6 border border-gray-600 bg-transparent" required>
                <option value="" selected>اختر موضوعًا *</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
            </div>
            <div class="mb-5">
                <input type="text" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder="اختر موضوعًا*" required />
            </div>
            
            <div class="flex mb-5">
                <select id="" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 ps-1 text-sm font-bold text-center text-gray-900 border bg-transparent border-e-transparent rounded-s-lg border-gray-600" required>
                    <option value="" selected>+965</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </select>
                <div class="relative w-full">
                    <input type="number" id="search-dropdown" class="block pe-8 p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-e-lg border-s-transparent border border-gray-600" placeholder="057697" required />
                </div>
            </div>

            <div class="mb-5">
                <input type="email" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder="اكتب البريد الإلكتروني هنا*" required />
            </div>

            <div class="mb-5">
                <textarea type="text" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder="اكتب رسالتك*" rows={3} required />
            </div>

            <div className="block px-6">
                <button type="submit" class="text-white bg-myorange font-medium rounded-full w-full text-sm py-2.5 text-center">أرسل استعلامًا</button>
            </div>
        </form>
 );
}