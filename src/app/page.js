"use client";
import { HeaderBlank } from "@/components/Header_Blank";
import { Header } from "@/components/Header";
import { LoginPage } from "@/components/pages/LoginPage";

export default function Home() {
  return (
    <div class="bg-gray-100 h-screen flex flex-col">
      <HeaderBlank />
      <LoginPage />
    </div>
  );
};