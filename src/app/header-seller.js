export default function Header_seller() {
  return (
      <nav class="m-auto pt-8 mb-8">
        <div class="md:w-9/12 bg-white flex flex-wrap items-center justify-between mx-auto shadow-2xl p-4 px-10 rounded-full">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" class="h-8" alt="Flowbite Logo" />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-mypurple text-sm font-bold border-solid border-mypurple border-2 px-6 py-2 rounded-full">عربي</button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block me-3 px-3 md:p-0 text-sm text-mypurple" aria-current="page">Sell With Us</a>
              </li>
              <li>
                <a href="#" class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay">Advertise With Us</a>
              </li>
              <li>
                <a href="#" class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay">Seller Support</a>
              </li>
              <li>
                <a href="#" class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay">FAQ's</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
  );
}
