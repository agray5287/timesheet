"use client";
import { Header } from "@/components/Header";
import { NewAccountPage } from "@/components/pages/NewAccountPage";


export default function NewAccount() {
    return (
      <div class="bg-gray-100 h-screen">
        <Header />
        <NewAccountPage />
      </div>
    );
  };