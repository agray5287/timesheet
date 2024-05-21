"use client";
import { HeaderBlank } from "@/components/Header_Blank";
import { Header } from "@/components/Header";
import { HomePage } from "@/components/pages/HomePage";

export default function Home() {
  return (
    <div class="bg-gray-100 h-screen flex flex-col">
      <Header />
      <HomePage />
    </div>
  );
};
