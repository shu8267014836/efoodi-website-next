"use client";

import React, {useState} from 'react';
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Header_main() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {     // this handler is "regular"
      setMenuOpen(!menuOpen);    // open and close...
  };
  return (
      <nav class=" m-auto pt-8 mb-8">
        <div class="md:w-11/12 flex flex-wrap items-center justify-between mx-auto lg:shadow-2xl p-4 px-10 rounded-full">
          <Link href={"/"} class="flex items-center space-x-3 rtl:space-x-reverse order-2 lg:order-1">
              <img src="/logo.png" class="h-8" alt="Logo" />
          </Link>

          <div class="flex order-1 lg:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href={"/eng/"}>
              <button type="button" class="text-white text-sm bg-myorange px-6 py-2 rounded-full">English</button>
            </Link>
          </div>

          <button 
            data-drawer-target="default-sidebar" 
            data-drawer-toggle="default-sidebar"
            type="button" 
            class="order-3 inline-flex items-center z-50 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="default-sidebar" 
            aria-expanded="false"
            onClick={toggleMenu}
            >
              {menuOpen ? 
                (<RxCross2 className='text-3xl' />) : 
                (<MdMenu className='text-3xl' />)
              }
              
          </button>

          {
            menuOpen && (
              <aside id="default-sidebar" class="fixed top-0 left-0 z-40 h-screen w-full transition-transform sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" id="default-sidebar">
                <ul class="flex flex-col font-medium p-4 mt-16 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link href={"/"} class="block p-3 font-semibold text-mypurple" aria-current="page">الصفحة الرئيسية</Link>
                  </li>
                  <li>
                    <Link href={"/sell"} class="block p-3 font-semibold text-gray-500 md:hover:primay">الاعمال</Link>
                  </li>
                  <li>
                    <Link href={"/"} class="block p-3 font-semibold text-gray-500 md:hover:primay">تعرف علينا </Link>
                  </li>
                  <li>
                    <Link href={"/contact"} class="block p-3 font-semibold text-gray-500 md:hover:primay">تواصل معنا</Link>
                  </li>
                </ul>
                </div>
              </aside>
            )
          }

          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={"/"} class="block me-3 px-3 md:p-0 text-sm text-mypurple" aria-current="page">الصفحة الرئيسية</Link>
              </li>
              <li>
                <Link href={"/sell"} class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay">الاعمال</Link>
              </li>
              <li>
                <Link href={"/"} class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay">تعرف علينا </Link>
              </li>
              <li>
                <Link href={"/contact"} class="block me-3 px-3 md:p-0 text-sm text-gray-500 md:hover:primay">تواصل معنا</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

  );
}
