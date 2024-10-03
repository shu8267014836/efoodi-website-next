import Link from "next/link";
export default function Header_main() {
  return (
    <nav class="bg-white m-auto pt-8 mb-8">
      <div class="md:w-11/12 bg-white flex flex-wrap items-center justify-between mx-auto shadow-2xl p-4 px-10 rounded-full">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" class="h-8" alt="Flowbite Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white text-sm bg-myorange px-6 py-2 rounded-full"
          >
            عربي
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href={"/"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                {/* <a
                  href="#"
                  class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                  aria-current="page"
                > */}
                Home
                {/* </a> */}
              </Link>
            </li>
            <li>
              {/* <a
                href="#"
                class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay"
              >
                Business
              </a> */}
              <Link
                href={"/business_faq"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                {/* <a
                  href="#"
                  class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                  aria-current="page"
                > */}
                Business
                {/* </a> */}
              </Link>
            </li>
            <li>
              {/* <a
                href="#"
                class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay"
              >
                Ride with us
              </a> */}
              <Link
                href={"/"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                {/* <a
                  href="#"
                  class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                  aria-current="page"
                > */}
                Ride with us
                {/* </a> */}
              </Link>
            </li>
            <li>
              {/* <a
                href="#"
                class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay"
              >
                Contact us
              </a> */}
              <Link
                href={"/contact"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                {/* <a
                  href="#"
                  class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                  aria-current="page"
                > */}
                Contact us
                {/* </a> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
