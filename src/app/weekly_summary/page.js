"use client";
import { Header } from "@/components/Header";
import { WeeklySummaryPage } from "@/components/pages/WeeklySummaryPage";

export default function WeeklySummary() {
    return (
      <div class="bg-gray-100 h-screen">
        <Header />
        <WeeklySummaryPage />
      </div>
    );
  };