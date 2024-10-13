import Link from "next/link";

export default function Header_main() {
  return (
    <nav class="bg-white m-auto pt-8 mb-8">
      <div class="md:w-11/12 bg-white flex flex-wrap items-center justify-between mx-auto shadow-2xl p-4 px-10 rounded-full">
        <Link
          href={"/eng/"}
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" class="h-8" alt="Logo" />
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href={"/"}>
            <button
              type="button"
              class="text-white text-sm bg-myorange px-6 py-2 rounded-full"
            >
              عربي
            </button>
          </Link>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-default"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href={"/eng/"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/eng/sell"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                href={"/eng/"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                Ride with us
              </Link>
            </li>
            <li>
              <Link
                href={"/eng/contact"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
