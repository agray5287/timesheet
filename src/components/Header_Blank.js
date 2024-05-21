//import { HomePage } from "./Content";
import { useState } from "react";
import Link from "next/link";

const currentDate = new Date();
const options = { year: "numeric", month: "2-digit", day: "2-digit" };
const shortDate = currentDate.toLocaleDateString("en-US", options);

export function HeaderBlank() {
  return (
    <div class="bg-[#02325d] flex items-center justify-between">
      <head>
        <title>VolkertasdfTimesheet</title>
      </head>
      <header class="flex items-center">
        <div class="bg-white rounded-full m-3 flex justify-center">
          <img
            src="https://apps.volkert.com/images/Logo.jpg"
            alt="Logo Cannot Be Found"
            class="w-32 h-16 ml-3 mr-3 mt-1 mb-1 rounded-xl"
          />
        </div>
      </header>
      <span class="relative mr-5">{shortDate}</span>
    </div>
  );
}
