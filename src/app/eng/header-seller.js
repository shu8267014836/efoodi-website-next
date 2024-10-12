import Link from "next/link";

export default function Header_seller() {
  return (
    <nav class="m-auto pt-8 mb-8">
      <div class="md:w-9/12 bg-white flex flex-wrap items-center justify-between mx-auto shadow-2xl p-4 px-10 rounded-full">
        <Link
          href={"/eng/"}
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" class="h-8" alt="Flowbite Logo" />
        </Link>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href={"/eng/"}>
            <button
              type="button"
              class="text-gray-600 border border-gray-500 text-sm font-bold px-6 py-2 rounded-full"
            >
              Login
            </button>
          </Link>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href={"/eng/sell"}
                class="block me-3 px-3 md:p-0 text-sm text-mypurple"
                aria-current="page"
              >
                Sell With Us
              </Link>
            </li>
            <li>
              <Link
                href={"/eng/advertise"}
                class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay"
              >
                Advertise With Us
              </Link>
            </li>
            <li>
              <Link
                href={"/eng/support"}
                class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay"
              >
                Seller Support
              </Link>
            </li>
            <li>
              <Link
                href={"/eng/business_faq"}
                class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay"
              >
                FAQ&apos;s
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
