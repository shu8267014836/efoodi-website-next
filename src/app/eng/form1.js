"use client";

import React, {useEffect} from 'react';
import "./../globals.css";

export default function Form1() {
   
    useEffect(() => {
        // Select all input elements
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            const placeholder = input.getAttribute("placeholder");
            if (placeholder && !placeholder.endsWith("*")) {
                input.setAttribute("placeholder", `${placeholder}*`);
            }
        });
    }, []);

    return (
        <form class="myform mx-8">
            <div class="mb-5 form-item">
                <input type="text" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder='Business Name' required />
            </div>
            <div class="mb-5 form-item">
                <select id="" class="myinput ps-4 border border-gray-700 bg-transparent" required>
                <option value="" selected>Type of Business</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
            </div>
            <div class="mb-5 form-item">
                <input type="text" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder='Contact Person Name' required />
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

            <div class="mb-5 form-item">
                <input type="email" id="" class="myinput px-6 border border-gray-600 bg-transparent" placeholder='Type email here'  required />
            </div>
            <div className="block px-10 btn-box">
                <button type="submit" class="text-white bg-myorange font-medium rounded-full w-full text-sm py-2.5 text-center">Submit</button>
            </div>
        </form>
 );
}