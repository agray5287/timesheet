//import { HomePage } from "./Content";
import { useState } from "react";

export function Header() {
  return (
    <div class="flex items-center">
      <head>
        <title>Volkert Timesheet</title>
      </head>
      <header class="flex items-center">
        <img
          src="https://apps.volkert.com/images/Logo.jpg"
          alt="Logo Cannot Be Found"
          class="top-0 left-0 w-32 h-16 mr-5"
        />
        <button class="ml-5">Home</button>
        <button class="ml-5">Enter Time</button>
        <button class="ml-5">Weekly Summary</button>
        <button class="ml-5">Statistics</button>
      </header>
    </div>
  );
};